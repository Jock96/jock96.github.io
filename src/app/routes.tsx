import { createBrowserRouter } from "react-router-dom";
import { Home, Post, NotFound } from "../pages";

export enum Routes {
  post = "/post",
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: `${Routes.post}/:id`,
    element: <Post />,
  },
]);
