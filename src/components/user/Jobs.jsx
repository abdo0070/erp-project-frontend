import React, { useContext, useEffect, useState } from "react";
import Job from "./Job";
import { AuthContext } from "../../context/AuthContext";
import { axiosAPI } from "../../api/axiosAPI";

const Jobs = () => {
  const { token , refreshToken } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosAPI
      .get("/jobs", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data?.data);
      })
      .catch((err) => {
        refreshToken();
      });
  }, []);
  return (
    <div className="min-h-screen w-10/12 flex flex-col mt-2">
      {posts?.map((c,i) => {
        return <Job key={i} post={c} />;
      })}
    </div>
  );
};

export default Jobs;
