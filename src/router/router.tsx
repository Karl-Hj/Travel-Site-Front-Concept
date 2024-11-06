import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <div></div>,
      },
    ],
  },
]);
