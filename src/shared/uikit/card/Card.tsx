import { FC } from "react";
import { Column } from "../column";
import type { ICardProps } from "./types";
import "./Card.css";

export const Card: FC<ICardProps> = ({ gap, children, style }) => (
  <Column className="card" gap={gap} style={style}>
    {children}
  </Column>
);
