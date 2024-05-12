import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./pages/NotFound";
import UserLogin from "./pages/UserLogin";
import Applications from "./components//user/Applications";
import Cvs from "./components/Cvs";
import CvReview from "./components/CvReview";
import PostsIndex from "./components/company/PostsIndex";
import PostNew from "./components/company/PostNew";
import CompanyProfile from "./components/company/CompanyProfile";
import Jobs from "./components/user/Jobs";
import SingleJob from "./components/user/SingleJob";
import UserRegister from "./pages/UserRegister";
import CompanyRegister from './pages/CompanyRegister';
import CompanyLogin from "./pages/CompanyLogin";

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
    path : "cv",
    element : <Cvs />
  },
  // FOR USER
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
        path : "",
        element : <Jobs />
      },
      {
        path : "jobs",
        element : <Jobs />
      },
      {
        path : "jobs/:jobId",
        element : <SingleJob />
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
  // FOR COMPANY
  {
    path : "company",
    element : <App />,
    children : [
      {
        path : "",
        element : <Cvs />
      },
      {
        path : "posts",
        element : <PostsIndex />
      },
      {
        path : "posts/new",
        element : <PostNew />
      },
      {
        path : "profile",
        element : <CompanyProfile />
      },
      {
        path : "cv/:userId",
        element : <CvReview />
      },
    ]
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "/company/login",
    element: <CompanyLogin />,
  },
  {
    path: "/company/register",
    element: <CompanyRegister />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
