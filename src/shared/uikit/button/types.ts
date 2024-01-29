import type { IChild } from "../types"

export interface IButtonProps {
    onClick(): void
    children?: IChild
}
