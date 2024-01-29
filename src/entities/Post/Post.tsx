import { FC } from "react";
import { Card, Row, Text } from "../../shared";
import type { IPostProps } from "./types";

export const Post: FC<IPostProps> = ({ post, action, postNumber, style }) => (
  <Card gap={8} style={style}>
    <Row gap={10}>
      {postNumber ? <Text>{postNumber}</Text> : undefined}
      <Text elipsis>{post.title}</Text>
      <Text elipsis>{post.body}</Text>
    </Row>
    {action}
  </Card>
);
