import { FC } from "react"
import { Column } from "../column"
import { DEFAULT_PAGE_GAP } from "./constants"
import type { IPageProps } from "./types"
import "./Page.css"

export const Page: FC<IPageProps> = ({ gap = DEFAULT_PAGE_GAP, children }) => <Column className="page" gap={gap}>{children}</Column>
