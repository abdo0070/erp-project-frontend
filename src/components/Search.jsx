import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const { UpdateQ } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleJobSearch = (e) => {
    e.preventDefault();
    // UPDATE THE QUERY IN SEARCH CONTEXT
    UpdateQ(query);
    // NAVIGATE THE USER TO users
    navigate("/user/cv");
  };
  return (
    <form className="flex flex-row  w-full" onSubmit={handleJobSearch}>
      <input
        type="text"
        placeholder="Search ?"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white rounded-l-2xl p-1 lg:p-2"
      />
      <input
        type="submit"
        className="bg-slate-100 rounded-r-2xl p-1 lg:p-2"
        value="search"
      />
    </form>
  );
};

export default Search;
