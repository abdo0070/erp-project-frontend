import React, { useContext, useEffect, useState } from "react";
import Cv from "./Cv";
import { AuthContext } from "../context/AuthContext";
import { axiosAPI } from "../api/axiosAPI";

const Cvs = () => {
  const [usersCvs,setUsersCvs] = useState([]);
  // AuthContext
  const {token , user , refreshToken } = useContext(AuthContext); 

  useEffect( () => {
    axiosAPI
      .get("/users", {
        headers: {
          Authorization:
            "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiX2lkXCI6XCI2NjMzNzYzZWQ0ZTVkZjkyMTJjYjM0MGVcIixcIm5hbWVcIjpcImFiZGFsbGFcIixcImVtYWlsXCI6XCJhYmRhbGxhQGdtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpcIjEyM1wiLFwidGl0bGVcIjpcInNvZnR3YXJlIGVuZ2luZWVyXCIsXCJhZGRyZXNzXCI6XCJhZ3V6YSAsIGdpemFcIixcInNraWxsc1wiOltdLFwiX192XCI6MH0iLCJpYXQiOjE3MTUwOTUzMTEsImV4cCI6MTcxNTA5ODkxMX0.Am74iltH3ygfm6cJTe6W_JotN0N0VTUunpZxjZdI9eI"
        },
      })
      .then((res) => {setUsersCvs(res.data?.data) ; console.log(res.data?.data);})
      .catch((err) => refreshToken() );

  })
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {usersCvs?.map((c) => {
        return <Cv cv={c} />;
      })}
    </div>
  );
};

export default Cvs;
