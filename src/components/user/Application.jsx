import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Application = ({ post }) => {
  const { name, image, title, career_level, address, age, skills } = post;
  useEffect(() => {});
  return (
    <div className="p-2 w-full bg-white flex flex-row">
      {/**IMAGE & NAME SECTION */}
      <div className="w-2/12 min-w-fit flex-col justify-center flex items-center">
        <img
          className="h-12 w-12 md:h-18 md:w-18 lg:w-28 lg:h-28 rounded-full"
          src={image}
          alt="company_image"
        />
        <span className="text-sm md:text-base lg:text-xl text-slate-700 font-semibold">
          {name}
        </span>
      </div>

      <div className="w-10/12 flex flex-row">
        <div className="w-full flex flex-col">
          <h2 className="text-blue font-semibold">{title}</h2>
          {/* DETAILS */}
          <div className="flex text-gray-600 flex-col text-[8px] font-medium">
            <span>Career-level : {career_level}</span>
            <span>Location : {address}</span>
            <span>Age : {age} years</span>
          </div>

          <div className="flex flex-row w-full">
            {skills?.map((s) => {
              return (
                <button className="p-1 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue">
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <button
            href="/cv_preview.html"
            className="text-xs text-center md:text-lg whitespace-nowrap text-white font-bold rounded-sm p-1 md:p-2 md:w-32 bg-green-500"
          >
            VIEWED
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default Application;