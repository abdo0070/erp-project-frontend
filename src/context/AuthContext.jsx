import { createContext, useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

export const AuthContext = createContext();
export const AuthProvidor = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [role, setRole] = useState(localStorage.getItem("role") || 0);
  // const [role, setRole] = useState(2);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const updateUser = (newToken, newRole) => {
    let userDecodedToken = decodeToken(newToken);
    const isExp = isExpired(newToken);
    setUser(userDecodedToken);
    setToken(newToken);
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole || 0);
    setRole(newRole || 0);
    // SAVE THE USER DATA
    if (!userDecodedToken) {
      return;
    }
    userDecodedToken = JSON.parse(userDecodedToken?.data);
    setUser(userDecodedToken);
    localStorage.setItem("user",JSON.stringify(userDecodedToken));
    console.log(localStorage.getItem("user"));

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
