import React, { useEffect } from "react";

const Cv = ({ cv }) => {
  return (
    <div className="p-2 w-full bg-white flex flex-row">
      {/**IMAGE & NAME SECTION */}
      <div className="w-2/12 min-w-fit flex-col justify-center flex items-center">
        <img
          className="h-12 w-12 md:h-16 md:w-16 rounded-full"
          src={`/img/user.png`}
          alt=""
        />
        <span className="text-sm font-semibold">{cv?.name}</span>
      </div>
      <div className="w-10/12 flex flex-col">
        <h2 className="text-blue font-semibold">{cv?.title}</h2>
        {/* DETAILS */}
        <div className="flex text-gray-600 flex-col text-[8px] font-medium">
          <span>Career-level : {cv?.career_level}</span>
          <span>Location : {cv?.address}</span>
          <span>Age : {cv?.age} years</span>
        </div>

        <div className="flex flex-row w-full">
          {cv?.skills?.map((s) => {
            return (
              <button className="p-1 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue">
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Cv;
