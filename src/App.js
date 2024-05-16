import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import CompanyAuth from "./auth/CompanyAuth";
import PostsIndex from "./components/company/PostsIndex";
import CvReview from "./components/CvReview";
import PostNew from "./components/company/PostNew";
import Cvs from "./components/Cvs";
import Jobs from "./components/user/Jobs";
import SingleJob from "./components/user/SingleJob";
import Applications from "./components/user/Applications";
import UserProfile from "./components/user/UserProfile";
import CompanyProfile from "./components/company/CompanyProfile";
import NotFound from "./pages/NotFound";
import NotAuth from "./pages/NotAuth";
import UserAuth from "./auth/UserAuth";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyRegister from "./pages/CompanyRegister";
import PostEdit from "./components/company/PostEdit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen bg-soft-gray flex justify-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/companies/login" element={<CompanyLogin />} />
            <Route path="/companies/register" element={<CompanyRegister />} />

            <Route path="/company">
              <Route
                path=""
                element={
                  <CompanyAuth>
                    <Home />
                  </CompanyAuth>
                }
              />
              <Route
                path="posts"
                element={
                  <CompanyAuth>
                    <PostsIndex />
                  </CompanyAuth>
                }
              />
              <Route
                path="posts/new"
                element={
                  <CompanyAuth>
                    <PostNew />
                  </CompanyAuth>
                }
              />
              <Route
                path="posts/edit/:id"
                element={
                  <CompanyAuth>
                    <PostEdit />
                  </CompanyAuth>
                }
              />
              <Route path="cv/:userId" element={<CvReview />} />
              <Route
                path="profile"
                element={
                  <CompanyAuth>
                    <CompanyProfile />
                  </CompanyAuth>
                }
              />
            </Route>

            <Route path="/user">
              <Route
                path=""
                element={
                  <UserAuth>
                    <Home />
                  </UserAuth>
                }
              />

              <Route path="cv" element={<Cvs />} />
              <Route path="cv/:userId" element={<CvReview />} />
              <Route
                path="jobs"
                element={
                  <UserAuth>
                    <Jobs />
                  </UserAuth>
                }
              />
              <Route
                path="jobs/:jobId"
                element={
                  <UserAuth>
                    <SingleJob />
                  </UserAuth>
                }
              />
              <Route
                path="applications"
                element={
                  <UserAuth>
                    <Applications />
                  </UserAuth>
                }
              />
              <Route
                path="profile"
                element={
                  <UserAuth>
                    <UserProfile />
                  </UserAuth>
                }
              />
            </Route>

            <Route path="/notauthorized" element={<NotAuth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
