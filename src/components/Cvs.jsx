import React, { useContext, useEffect, useState } from "react";
import Cv from "./Cv";
import { AuthContext } from "../context/AuthContext";
import { axiosAPI } from "../api/axiosAPI";
import { SearchContext } from "../context/SearchContext";

const Cvs = () => {
  const [usersCvs, setUsersCvs] = useState([]);
  const { q } = useContext(SearchContext);
  const { token, user, refreshToken } = useContext(AuthContext);

  useEffect(() => {
    console.log(q);
    axiosAPI
      .get(`users/search?q=${q}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUsersCvs(res.data?.data);
      })
      .catch((err) => {
        refreshToken();
      });
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {usersCvs?.map((c, i) => {
        return <Cv cv={c} key={i} />;
      })}
    </div>
  );
};

export default Cvs;
