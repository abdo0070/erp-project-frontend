import React from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <div className="h-20 w-full  bg-footer-header flex justify-center shadow-sm shadow-black drop-shadow-2xl border-b-2 border-black sticky top-0 left-0">
      <div className="w-10/12 bg-red-500 h-full flex flex-row justify-between">
        {/** LOGO AND HEADERS LINKS SECTION **/}
        <div className="h-full w-11/12 flex flex-row items-center gap-2 bg-black justify-between">
          <div className="">
            <img
              src="/logo.png"
              className="rounded-full w-10 h-10"
              alt="logo"
            />
          </div>
          <div className="h-full flex flex-row items-center g-2">
            <div className="w-fit sm:block md:text-xs lg:text-lg h-full flex flex-row items-center gap-2 font-semibold cursor-pointer text-white">
              <Link className="" to={"/home"}>
                Home
              </Link>
              <Link className="" to={"/about"}>
                About
              </Link>
              <Link className="" to={"/applications"}>
                Applications
              </Link>
            </div>
            <div className="text-sm h-10 flex rounded-full flex-row items-center justify-center">
              <input
                type="text"
                placeholder="search for cvs"
                className="bg-white p-1 h-full rounded-l-2xl"
              />
              <div className="flex rounded-r-2xl p-1 flex-row items-center bg-slate-100 justify-center h-full"><i class="bg-slate-100 fa-solid fa-magnifying-glass"></i></div>
              
            </div>
          </div>
        </div>
        <div className="h-full w-fit md:text-lg flex items-center">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
