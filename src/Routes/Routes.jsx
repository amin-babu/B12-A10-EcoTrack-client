import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/hero-slides')
      }
    ]
  }
]);

export default router;