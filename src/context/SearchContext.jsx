import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../api/axiosAPI";
import { AuthContext } from "./AuthContext";

export const SearchContext = createContext();
export const SearchProvidor = ({ children }) => {
  const [q, setQ] = useState([]);
  const UpdateQ = (newQ,token,role) => {
    let searchQuery;
    (role == 2)
      ? (searchQuery = `/users/search/${newQ}`)
      : (searchQuery = `/users/search/${newQ}`);
      console.log(searchQuery);
    // FETCH THE DATA
    axiosAPI
      .get(`${searchQuery}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setQ(res.data?.data);
        console.log(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setQ(newQ || "");
  };
  return (
    <SearchContext.Provider value={{ q, UpdateQ }}>
      {children}
    </SearchContext.Provider>
  );
};
