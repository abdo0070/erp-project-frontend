import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

const PostView = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const {token} = useContext(AuthContext);
  useEffect(() => {
    axiosAPI
      .get(`/jobs/applications/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data?.data);
      })
      .catch((err) => {
      });
  },[]);
  return (
    <div className="min-h-screen w-10/12 flex flex-col mt-2">
      {posts?.map((c, i) => {
        return <SinglePost key={i} application={c} />;
      })}
    </div>
  );
};

export default PostView;
