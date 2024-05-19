import React, { useContext } from "react";
import Cv from "../Cv";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";

const SinglePost = ({ application }) => {
  const { token } = useContext(AuthContext);
  const handleViewApplication = async() => {
    await axiosAPI
      .patch(
        `/applications/${application?.application_id}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
      })
      .catch(() => {});
  };
  return (
    <div onClick={handleViewApplication}>
      <Cv cv={application.user} />
    </div>
  );
};

export default SinglePost;
