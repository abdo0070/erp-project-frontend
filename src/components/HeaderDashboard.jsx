import React from "react";

const HeaderDashboard = () => {
  return (
    <div className="h-20 w-full flex justify-center shadow-sm shadow-black drop-shadow-2xl ">
      <div className="w-10/12 h-full flex flex-row justify-between">
        {/** LOGO AND HEADERS LINKS SECTION **/}
        <div className="h-full flex flex-row items-center gap-4 justify-between">
          <div className="">
            <img src="/logo.png" className="rounded-full w-10 h-10" alt="logo" />
          </div>
          <div className="h-full flex flex-row items-center gap-4">
            <a className="font-semibold text-lg cursor-pointer text-white">
              Home
            </a>
            <a className="font-semibold text-lg cursor-pointer text-white">
              About
            </a>
          </div>
        </div>
        <div className="h-full flex items-center gap-2">
            <button className="bg-blue text-white text-base font-semibold p-1">Login</button>
            <button className="bg-blue text-white text-base font-semibold p-1">Register</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
