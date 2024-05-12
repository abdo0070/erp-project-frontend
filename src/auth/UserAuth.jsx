import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role != 1) {
      return navigate("/login");
    }
  }, []);

  if (role != 1) {
    return navigate("/login");
  }
  return children;
};
export default UserAuth;
