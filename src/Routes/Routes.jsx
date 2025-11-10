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
        loader: async () => {
          const heroSlide = await fetch('http://localhost:3000/hero-slides').then(r => r.json());
          const activeChallenges = await fetch('http://localhost:3000/active-challange').then(r => r.json());
          return { heroSlide, activeChallenges };
        }
      }
    ]
  }
]);

export default router;