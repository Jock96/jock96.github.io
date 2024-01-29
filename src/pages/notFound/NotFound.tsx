import { FC } from "react";
import { Page, Title } from "../../shared";

export const NotFound: FC = () => (
  <Page>
    <Title>Ничего не найдено</Title>
    <Title level={2}>Проверьте правильность вводимого адреса</Title>
  </Page>
);
