import { FC } from "react";
import { Page, Title } from "../../shared";
import { PostCard } from "../../widgets";

export const Post: FC = () => (
  <Page>
    <Title>Пост:</Title>
    <PostCard />
  </Page>
);
