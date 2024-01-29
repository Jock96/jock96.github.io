import type { CSSProperties } from "react"
import type { IChild } from "../types"

export interface ISpaceProps {
    direction?: "column" | "row"
    className?: string
    gap?: number
    children?: IChild
    style?: CSSProperties
}
