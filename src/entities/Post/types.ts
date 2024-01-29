import type { CSSProperties } from "react";
import type { IChild } from "../../shared";
import type { IPost } from "../types";

export interface IPostProps {
    action?: IChild
    post: IPost
    postNumber?: number
    style?: CSSProperties
}
