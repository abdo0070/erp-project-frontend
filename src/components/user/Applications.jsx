import React, { useContext, useEffect, useState } from "react";
import Application from "./Application";
import { AuthContext } from "../../context/AuthContext";
import { axiosAPI } from "../../api/axiosAPI";

const Applications = () => {
  const [applicationsData, setApplicationsData] = useState([]);
  const { user, token } = useContext(AuthContext);
  useEffect(() => {
    const id = user._id;
    axiosAPI
      .get(`applications/user/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setApplicationsData(res.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen w-10/12 flex flex-col gap-2">
      {applicationsData?.map((c, i) => {
        return <Application key={i} post={c} />;
      })}
    </div>
  );
};

export default Applications;
