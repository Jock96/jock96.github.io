import { FC, CSSProperties, useEffect, useCallback } from "react";
import { Post } from "../../entities";
import { GoToPostButton } from "../../features";
import { postApi, Spinner, FetchMoreObserver } from "../../shared";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { DEFAULT_ELEMENT_WIDTH } from "./constants";

export const PostList: FC = () => {
  const { useLazyGetPostsQuery } = postApi;

  const [trigger, data] = useLazyGetPostsQuery({});
  const { data: posts, isLoading } = data;

  const handleFetchMore = useCallback(() => trigger({}), [trigger]);

  useEffect(() => {
    handleFetchMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!posts?.length && isLoading) return <Spinner centered />;

  const renderPost = (idx: number, style?: CSSProperties) => {
    const post = posts ? posts[idx] : undefined;
    return post ? (
      <>
        <Post
          style={{
            ...style,
            height: DEFAULT_ELEMENT_WIDTH,
            width: "calc(100% - 10px)",
          }}
          key={post.id}
          action={<GoToPostButton id={post.id} />}
          post={post}
          postNumber={idx + 1}
        />
        {idx === (posts?.length ?? 0) - 1 && (
          <div
            style={{
              ...style,
              top: (style?.top as number) + DEFAULT_ELEMENT_WIDTH,
            }}
          >
            <FetchMoreObserver onFetchMore={handleFetchMore} />
          </div>
        )}
      </>
    ) : null;
  };

  return posts ? (
    <AutoSizer style={{ height: "100%", minHeight: 0 }}>
      {({ height, width }: { height: number; width: number }) => (
        <FixedSizeList
          height={height}
          width={width}
          itemCount={posts.length}
          itemSize={70}
        >
          {({ index, style }: { index: number; style: CSSProperties }) =>
            renderPost(index, style)
          }
        </FixedSizeList>
      )}
    </AutoSizer>
  ) : null;
};
