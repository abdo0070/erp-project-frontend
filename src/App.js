import { useContext, useEffect } from "react";
import { AuthContext, AuthProvidor } from "./context/AuthContext";
import GuestLayout from "./layouts/GuestLayout";
import "./style.css";
import UserLayout from "./layouts/UserLayout";
import CompanyLayout from "./layouts/CompanyLayout";
function App() {
  const { role } = useContext(AuthContext);
  if (role == 1) {
    return <UserLayout />;
  } else if (role == 2) {
    <CompanyLayout />;
  }
  return <GuestLayout />;
}

export default App;
