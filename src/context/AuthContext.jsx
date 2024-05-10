import { createContext, useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

export const AuthContext = createContext();
export const AuthProvidor = ({ children }) => {
  const [user, setUser] = useState({ name: "abdalla" });
  const [role, setRole] = useState(localStorage.getItem("role") || 0);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const updateUser = (newToken, newRole) => {
    const userDecodedToken = decodeToken(newToken);
    const isExp = isExpired(newToken);
    setUser(userDecodedToken);
    setToken(newToken);
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole || 0);
    setRole(newRole || 0);
  };

  const refreshToken = () => {
    const isExp = isExpired(token);
    if (isExp) {
      updateUser(null);
      return true;
    }
    return false;
  };
  return (
    <AuthContext.Provider
      value={{ user, token, role, updateUser, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
