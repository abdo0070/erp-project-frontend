import React from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import FindJobDashboard from "../components/FindJobDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-job-bg bg-no-repeat bg-center bg-cover">
      <HeaderDashboard />
      <FindJobDashboard />
    </div>
  );
};

export default Dashboard;
