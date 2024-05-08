import React, { useContext, useEffect, useState } from "react";
import Job from "./Job";
import { jobsData } from "../../api/data";
import { AuthContext } from "../../context/AuthContext";
import { axiosAPI } from "../../api/axiosAPI";

const Jobs = () => {
  const { token , refreshToken} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosAPI
      .get("/jobs", {
        headers: {
          Authorization:
          "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiX2lkXCI6XCI2NjMzNzYzZWQ0ZTVkZjkyMTJjYjM0MGVcIixcIm5hbWVcIjpcImFiZGFsbGFcIixcImVtYWlsXCI6XCJhYmRhbGxhQGdtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpcIjEyM1wiLFwidGl0bGVcIjpcInNvZnR3YXJlIGVuZ2luZWVyXCIsXCJhZGRyZXNzXCI6XCJhZ3V6YSAsIGdpemFcIixcInNraWxsc1wiOltdLFwiX192XCI6MH0iLCJpYXQiOjE3MTUwOTUzMTEsImV4cCI6MTcxNTA5ODkxMX0.Am74iltH3ygfm6cJTe6W_JotN0N0VTUunpZxjZdI9eI"
        },
      })
      .then((res) => setPosts(res.data?.data))
      .catch(refreshToken());
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {posts.map((c) => {
        return <Job post={c} />;
      })}
    </div>
  );
};

export default Jobs;