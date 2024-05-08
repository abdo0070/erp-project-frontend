import React from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const handleJobSearch = (e) => {
    e.preventDefault()
  }
  return (
    <div className="h-20 w-full flex justify-center bg-footer-header shadow-sm shadow-black drop-shadow-2xl border-b-2 border-black sticky top-0 left-0">
      <div className="w-10/12 h-full flex flex-row justify-between">
        {/** LOGO AND HEADERS LINKS SECTION **/}
        <div className="h-full flex flex-row items-center gap-4 justify-between">
          <div className="">
            <img
              src="/logo.png"
              className="rounded-full sm:w-10 sm:h-10 w-8 h-8"
              alt="logo"
            />
          </div>
          <div className="h-full flex flex-row items-center gap-4 font-semibold text-xs sm:text-lg cursor-pointer text-white">
            <Link className="" to={"/home"}>
              Home
            </Link>
            <Link className="" to={"/applications"}>
              Applications
            </Link>
          </div>
        </div>
        <div className="h-full flex flex-row items-center">
          <form className="flex flex-row  w-full" onSubmit={handleJobSearch}>
            <input
              type="text"
              placeholder="Search ?"
              className="bg-white rounded-l-2xl p-1 lg:p-2"
            />
            <input
              type="submit"
              className="bg-slate-100 rounded-r-2xl p-1 lg:p-2"
              value="search"
            />
          </form>
        </div>
        <div className="h-full flex items-center gap-2 text-white text-lg md:text-2xl">
          <button>
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
