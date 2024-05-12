import React from "react";
import { Outlet } from "react-router-dom";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyAuth from "../auth/CompanyAuth";

const CompanyLayout = () => {
  return (
      <div className="bg-soft-gray">
        <CompanyHeader />
        <div className="min-h-screen w-10/12 m-auto">
          <Outlet />
        </div>
      </div>
  );
};

export default CompanyLayout;
