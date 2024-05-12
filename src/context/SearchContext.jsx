import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvidor = ({ children }) => {
  const [q, setQ] = useState("");
  const UpdateQ = (newQ) => {
    setQ(newQ || "");
  };
  return (
    <SearchContext.Provider value={{ q, UpdateQ }}>
      {children}
    </SearchContext.Provider>
  );
};
