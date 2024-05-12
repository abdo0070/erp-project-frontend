import React, { useContext } from "react";
import PostsIndex from "./company/PostsIndex";
import Jobs from "./user/Jobs";
import Dashboard from "../pages/Dashboard";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const {role} = useContext(AuthContext);
  return role == 1 ? <Jobs /> : role == 2 ? <PostsIndex /> : <Dashboard />;
};

export default Home;
