import React from "react";
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <div className="h-20 w-full  bg-footer-header flex justify-center shadow-sm shadow-black drop-shadow-2xl border-b-2 border-black sticky top-0 left-0">
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
          <div className="h-full flex flex-row items-center gap-4 font-semibold text-lg cursor-pointer text-white">
            <Link className="" to={"/home"}>
              Home
            </Link>
            <Link className="" to={"/about"}>
              About
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center gap-2">
          <Link
            to={"/login"}
            className="bg-blue text-white text-base font-semibold p-1"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="bg-blue text-white text-base font-semibold p-1"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestHeader;
