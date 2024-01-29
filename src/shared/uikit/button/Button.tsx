import { FC } from "react"
import type { IButtonProps } from "./types"
import "./Button.css"

export const Button: FC<IButtonProps> = ({ children, onClick }) => <button className="baseButton" onClick={onClick}>{children}</button>
