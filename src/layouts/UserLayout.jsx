import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import { AuthContext } from "../context/AuthContext";

const UserLayout = () => {
  const { refreshToken } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (refreshToken()) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="bg-soft-gray">
        <UserHeader />
        <div className="min-h-screen w-10/12 m-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
