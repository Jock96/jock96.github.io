import { FC } from "react";
import type { ITextProps } from "./types";
import "./Text.css";

export const Text: FC<ITextProps> = ({ elipsis, children }) => (
  <span className={elipsis ? "elipsisText" : undefined}>{children}</span>
);
