import { useContext, useEffect } from "react";
import { AuthContext, AuthProvidor } from "./context/AuthContext";
import GuestLayout from "./layouts/GuestLayout";
import "./style.css";
import UserLayout from "./layouts/UserLayout";
import CompanyLayout from "./layouts/CompanyLayout";
function App() {
  const { role, refreshToken } = useContext(AuthContext);
  useEffect(() => {
    // refreshToken();
  }, []);
  if (role == 1) {
    return <UserLayout />;
  } else if (role == 2) {
    return <CompanyLayout />;
  }
  return <GuestLayout />;
}

export default App;
