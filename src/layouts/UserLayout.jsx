import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import UserAuth from "../auth/UserAuth";

const UserLayout = () => {
  return (
    <div className="bg-soft-gray">
      <UserHeader />
      <div className="min-h-screen w-10/12 m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
