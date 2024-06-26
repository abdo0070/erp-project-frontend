import React from "react";
import { Link } from "react-router-dom";

const Job = ({ post }) => {
  const { name, image, title, career_level, location, post_date, skills } = post;

  return (
    <Link to={`/user/jobs/${post?._id}`}>
      <div className="p-2 w-full bg-white flex flex-row rounded-md my-2">
        {/**IMAGE & NAME SECTION */}
        <div className="w-2/12 min-w-fit flex-col justify-center flex items-center">
          <img
            className="h-12 w-12 md:h-18 md:w-18 lg:w-28 lg:h-28 rounded-full"
            src={post?.company[0]?.image}
            alt="company_image"
          />
          <span className="text-sm md:text-base lg:text-xl text-slate-700 font-semibold">
            {post?.company[0]?.name}
          </span>
        </div>
        <div className="w-10/12 flex flex-col">
          <h2 className="text-blue text-base md:text-lg lg:text-3xl font-semibold">
            {title}
          </h2>
          {/* DETAILS */}
          <div className="flex text-gray-600 flex-col lg:text-sm text-[8px] lg:mb-2 font-medium">
            <span>Career-level : {career_level}</span>
            <span>Location : {location}</span>
            <span>posted at :{post_date?.slice(0,10)}</span>
          </div>

          <div className="flex flex-row w-full">
            {skills?.map((s, i) => {
              return (
                <button
                  key={i}
                  className="p-1 text-white m-0.5 lg:p-2 font-medium text-[10px] rounded-lg bg-blue"
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
