import React from "react";
import { Link } from "react-router-dom";

const HeaderDashboard = () => {
  return (
    <div className="bg-footer-header h-20 w-full flex justify-center shadow-sm shadow-black drop-shadow-2xl border-b-2 border-black sticky top-0 left-0">
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
            <Link className="" to={"/about"}>
              About
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center gap-2 text-white text-xs md:text-base">
          <Link to={"/companies/login"} className="font-semibold  md:text-lg">as company</Link>
          <div className="text-white h-full border-l-2 border-white "></div>
          <Link
            to={"/login"}
            className="bg-blue font-semibold p-0.5 sm:p-1"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="bg-blue font-semibold p-0.5 sm:p-1"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
