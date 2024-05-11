import { useContext, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import { AuthContext } from "../context/AuthContext";

const GuestLayout = () => {
  const {refreshToken} = useContext(AuthContext);
  useEffect(() => {
    refreshToken();
  },[])
  return (
    <div className="min-h-screen w-full bg-soft-gray">
      <Dashboard />
    </div>
  );
};

export default GuestLayout;
