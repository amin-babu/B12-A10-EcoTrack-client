import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Challenges from "../Pages/Challenges";
import ChallengesDetails from "../Pages/ChallengesDetails";
import AddNewChallenge from "../Pages/AddNewChallenge";
import ForgotPassword from "../Pages/ForgotPassword";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Contexts/PrivateRoute";
import EditChallenge from "../Pages/EditChallenge";
import MyActivities from "../Pages/MyActivities";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const heroSlide = await fetch('https://eco-track-server-rho.vercel.app/hero-slides').then(r => r.json());
          const recentTips = await fetch('https://eco-track-server-rho.vercel.app/renect-tips').then(r => r.json());
          const activeChallenges = await fetch('https://eco-track-server-rho.vercel.app/active-challenges').then(r => r.json());
          const events = await fetch('https://eco-track-server-rho.vercel.app/next-events').then(r => r.json());
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
        loader: () => fetch('https://eco-track-server-rho.vercel.app/challanges').then(r => r.json())
      },
      {
        path: '/challenges/:id',
        element: <ChallengesDetails />,
        loader: ({ params }) => fetch(`https://eco-track-server-rho.vercel.app/challanges/${params.id}`)
      },
      {
        path: '/challenges/add',
        element: <PrivateRoute>
          <AddNewChallenge />
        </PrivateRoute>
      },
      {
        path: '/forgot-password',
        Component: ForgotPassword
      },
      {
        path: '/edit-challenge/:id',
        element: (
          <PrivateRoute>
            <EditChallenge />
          </PrivateRoute>
        )
      },
      {
        path: '/my-activities',
        element: <PrivateRoute>
          <MyActivities/>
        </PrivateRoute>,
        loader: () => fetch('https://eco-track-server-rho.vercel.app/my-activities')
      },
      {
        path: '/*',
        Component: NotFound
      }
    ]
  }
]);

export default router;