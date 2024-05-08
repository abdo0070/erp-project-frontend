import { createContext, useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

export const AuthContext = createContext();
export const AuthProvidor = ({ children }) => {
  const [user, setUser] = useState({ name: "abdalla" });
  const [role, setRole] = useState(localStorage.getItem("role") || 0);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const updateUser = (token, role) => {
    const userDecodedToken = decodeToken(token);
    const isExp = isExpired(token);
    if (!isExp) {
      setUser(userDecodedToken);
      setToken(userDecodedToken);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role || 0);
      setRole(role || 0);
    }
  };

  const refreshToken = () => {
    const isExp = isExpired(token);
    if (!isExp || token == null || token == undefined) {
      updateUser(null);
      return true;
    }
    return false;
  };
  return (
    <AuthContext.Provider value={{ user, role, updateUser, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
