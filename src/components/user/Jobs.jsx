import React, { useContext, useEffect, useState } from "react";
import Job from "./Job";
import { AuthContext } from "../../context/AuthContext";
import { axiosAPI } from "../../api/axiosAPI";

const Jobs = () => {
  const { token } = useContext(AuthContext);
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
        console.log(err);
      });
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {posts?.map((c,i) => {
        return <Job key={i} post={c} />;
      })}
    </div>
  );
};

export default Jobs;
