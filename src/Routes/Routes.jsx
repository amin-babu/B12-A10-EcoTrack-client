import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
          const recentTips = await fetch('http://localhost:3000/renect-tips').then(r => r.json());
          const activeChallenges = await fetch('http://localhost:3000/active-challange').then(r => r.json());
          const events = await fetch('http://localhost:3000/next-events').then(r => r.json());
          return { heroSlide, activeChallenges, recentTips, events };
        }
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/sign-up',
        Component: SignUp
      }
    ]
  }
]);

export default router;