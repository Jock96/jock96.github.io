import { FC } from "react";
import { Space } from "../space";
import type { IColumnProps } from "./types";

export const Column: FC<IColumnProps> = ({ children, gap, className, style }) => (
  <Space direction="column" gap={gap} className={className} style={style}>
    {children}
  </Space>
);
