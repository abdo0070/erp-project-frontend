import React from "react";

const HeaderDashboard = () => {
  return (
    <div className="h-20 w-full flex justify-center shadow-sm shadow-black drop-shadow-2xl fixed top-0 left-0">
      <div className="w-10/12 h-full flex flex-row justify-between">
        {/** LOGO AND HEADERS LINKS SECTION **/}
        <div className="h-full flex flex-row items-center gap-4 justify-between">
          <div className="">
            <img src="/logo.png" className="w-10 h-10" alt="logo" />
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
            <button className="bg-blue text-white text-base font-semibold p-1">LOGIN</button>
            <button className="bg-blue text-white text-base font-semibold p-1">LOGOUT</button>
        </div>
      </div>
    </div>
  );
  /**
   <div className="h-full bg-red-400">
            <button className="bg-blue text-white text-lg font-semibold p-1">LOGIN</button>
            <button className="bg-blue text-white text-lg font-semibold p-1">LOGOUT</button>
        </div>
   */
};

export default HeaderDashboard;
