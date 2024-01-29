import { FC } from "react";
import type { ISpaceProps } from "./types";
import "./Space.css";
import classnames from "classnames";

export const Space: FC<ISpaceProps> = ({
  direction = "row",
  gap = 0,
  children,
  className,
  style,
}) => (
  <div
    className={classnames("root", className)}
    style={{ flexDirection: direction, gap, ...style }}
  >
    {children}
  </div>
);
