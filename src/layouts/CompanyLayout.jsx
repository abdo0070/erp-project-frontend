import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import Cvs from "../components/Cvs";
import PostsIndex from "../components/company/PostsIndex";

const CompanyLayout = () => {
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

export default CompanyLayout;
