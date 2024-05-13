import { createContext, useState } from "react";
import { isExpired } from "react-jwt";

export const AuthContext = createContext();
export const AuthProvidor = ({ children }) => {
  const loadUserData = () => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      return null;
    }
  };

  const [user, setUser] = useState(loadUserData());
  const [role, setRole] = useState(localStorage.getItem("role") || 0);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const updateUser = (newToken, newRole, newUser) => {
    const isExp = isExpired(newToken);
    setToken(newToken);
    setRole(newRole || 0);
    setUser(newUser || null);
    // SAVE THE DATA IN LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole || 0);
  };

  const refreshToken = () => {
    const isExp = isExpired(token);
    if (!isExp) {
      // updateUser(null);
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
