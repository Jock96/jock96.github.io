import { FC } from "react";
import "./Spinner.css";
import type { ISpinnerProps } from "./types";

export const Spinner: FC<ISpinnerProps> = ({ centered }) => (
  <div style={centered ? { margin: "auto" } : undefined} className="spinner" />
);
