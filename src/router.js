import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./pages/NotFound";
import UserLogin from "./pages/UserLogin";
import Applications from "./components/Applications";
import Cvs from "./components/Cvs";
import CvReview from "./components/CvReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path : "applications",
        element : <Applications />
      },
      {
        path : "cv",
        element : <Cvs />
      },
      {
        path : "cv/:userId",
        element : <CvReview />
      },
    ],
    
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <UserLogin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
