import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CompanyAuth = ({ children }) => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role != 2) {
      return navigate("/notauthorized");
    }
  }, []);
  
  if (role != 2) {
    return navigate("/notauthorized");
  }
  return children;
};

export default CompanyAuth;
