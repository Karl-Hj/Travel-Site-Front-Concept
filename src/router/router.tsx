import { createBrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Explore } from "../pages/Explore/Explore";
import { Home } from "../pages/Home/Home";
import { Relax } from "../pages/Relax/Relax";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "relax", element: <Relax /> },
    ],
  },
]);
