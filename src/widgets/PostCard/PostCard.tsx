import { FC } from "react";
import { Post } from "../../entities";
import { GoBackButton } from "../../features";
import { postApi, Spinner } from "../../shared";
import { useParams } from "react-router-dom";

export const PostCard: FC = () => {
  const { useGetPostByIdQuery } = postApi;

  const { id } = useParams();

  const parsedId = id ? parseInt(id) : NaN;

  const { data: post, isLoading } = useGetPostByIdQuery(parsedId);

  const isIdExist = !isNaN(parsedId);

  if (!isIdExist) return null;

  if (isLoading) return <Spinner centered />;

  return post ? <Post action={<GoBackButton />} post={post} /> : null;
};
