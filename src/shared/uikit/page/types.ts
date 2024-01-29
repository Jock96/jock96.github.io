import type { IColumnProps } from "../column";
import type { IChild } from "../types";

export interface IPageProps extends Omit<IColumnProps, "children"> {
  children?: IChild
}
