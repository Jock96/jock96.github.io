import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { FC } from "react";

export const App: FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);
