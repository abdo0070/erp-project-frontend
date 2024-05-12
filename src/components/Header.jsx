import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserHeader from "./user/UserHeader";
import CompanyHeader from "./company/CompanyHeader";
import HeaderDashboard from "./guest/HeaderDashboard";

const Header = () => {
  const { role } = useContext(AuthContext);
  return role == 1 ? (
    <UserHeader />
  ) : role == 2 ? (
    <CompanyHeader />
  ) : (
    <HeaderDashboard />
  );
};

export default Header;
