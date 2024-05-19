import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import Search from "../Search";

const UserHeader = () => {
  return (
    <div className="h-20 w-full flex justify-center bg-footer-header shadow-sm shadow-black drop-shadow-2xl border-b-2 border-black sticky top-0 left-0">
      <div className="w-10/12 h-full flex flex-row justify-between">
        {/** LOGO AND HEADERS LINKS SECTION **/}
        <div className="h-full flex flex-row items-center gap-4 justify-between">
          <div className="sm:w-10 sm:h-10 w-8 h-8">
            <img
              src="/logo.png"
              className="rounded-full w-full h-full"
              alt="logo"
            />
          </div>
          <div className="h-full flex flex-row items-center gap-4 font-semibold text-xs sm:text-lg hidden sm:flex cursor-pointer text-white">
            <Link className="" to={"/home"}>
              Home
            </Link>
            <Link className="" to={"/user/applications"}>
              Applications
            </Link>
            <Link className="" to={"/user/jobs"}>
              Jobs
            </Link>
          </div>
        </div>
        <div className="h-full flex flex-row items-center">
          <Search />
        </div>
        {/** PROFILE ICON */}
        <div className="h-full flex items-center gap-2 text-white text-lg md:text-2xl">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
