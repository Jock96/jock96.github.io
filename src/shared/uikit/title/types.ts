import type { JSXElementConstructor, ReactElement } from "react";

export interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | string
    | null;
}
