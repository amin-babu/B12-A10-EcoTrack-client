import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Challenges from "../Pages/Challenges";
import ChallengesDetails from "../Pages/ChallengesDetails";
import AddNewChallenge from "../Pages/AddNewChallenge";

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
          const activeChallenges = await fetch('http://localhost:3000/active-challenges').then(r => r.json());
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
      },
      {
        path: '/challenges',
        Component: Challenges,
        loader: () => fetch('http://localhost:3000/challanges').then(r => r.json())
      },
      {
        path: '/challenges/:id',
        element: <ChallengesDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/challanges/${params.id}`)
      },
      {
        path: '/challenges/add',
        element: <AddNewChallenge />
      }
    ]
  }
]);

export default router;