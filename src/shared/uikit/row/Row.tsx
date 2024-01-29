import { FC } from "react";
import { Space } from "../space";
import type { IRowProps } from "./types";

export const Row: FC<IRowProps> = ({ children, gap, className, style }) => (
  <Space className={className} direction="row" gap={gap} style={style}>
    {children}
  </Space>
);
