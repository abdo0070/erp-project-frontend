import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleJob = () => {
    const [display, setDiplay] = useState(false);

  const post = {
    name: "Jo",
    image: "/img/user.png",
    title: "Junior Full-stack Developer (React.js + PHP)",
    skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
    career_level: "Junior",
    description:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate quis, culpa in ex, tempore vel ratione odio magni ad harum cum velit dolorum reprehenderit officia maiores porro asperiores quae?",
    age: 20,
    address: "Cairo",
  };

  useEffect(() => {
    // fetch post job by job_id from the api
  },[]);

  const { jobId } = useParams();
  return (
    <div className="h-fit w-full flex-row  space-y-4">
      {/** MAIN DETAILS SECTION */}
      <div className="flex w-full md:p-4 h-fit flex-row bg-white rounded-xl">
        {/**IMAGE & USERNAME */}
        <div className="w-fit flex flex-col items-center p-1">
          <img
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full"
            src={post.image}
            alt=""
          />
          <h2 className="font-bold text-slate-700 text-xs sm:text-base rounded-xl">
            {post.name}
          </h2>
        </div>
        <div className="w-10/12 flex flex-col p-2">
          <h2 className="text-blue text-xs sm:text-lg md:text-2xl font-bold">
            {post.title}
          </h2>
          <div className="flex text-gray-600 flex-col text-[10px] md:text-base font-medium rounded-xl">
            <span>Career-level : {post.career_level}</span>
            <span>Location : {post.address}</span>
            <span>Age : {post.age} years</span>
          </div>
        </div>
        <div className="flex items-start mt-2 mr-1.5 sm:mr-3">
          <button
            href="/cv_preview.html"
            className="text-xs text-center md:text-lg whitespace-nowrap text-white font-bold rounded-sm p-1 md:p-2 lg:p-3 md:w-32 bg-blue"
            onClick={() => setDiplay(!display)}
          >
            Apply
          </button>
        </div>
      </div>
      {/** CV  */}
      <div className="">
        {display && (
          <object
            data="/cv.pdf"
            type="application/pdf"
            className="w-full h-screen"
          >
            <p>
              Your web browser doesn't have a PDF plugin.
              <a href="/cv.pdf">click here to download the PDF file.</a>
            </p>
          </object>
        )}
      </div>
      {/** DESCRIPTION SECTION SECTION */}
      <div className="bg-white w-full h-fit p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          Description
        </h2>
        <p className="bg-soft-gray p-1 md:p-2 rounded-2xl sm:text-sm md:text-lg text-[10px] font-serif">
          {post.description || "No Description"}
        </p>
      </div>

      {/**SKILLS */}
      <div className="bg-white p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          SKILLS
        </h2>
        <div className="flex flex-row w-full">
          {post.skills?.map((s) => {
            return (
              <button className="p-1 md:p-2 text-white m-0.5 font-medium text-[10px]  rounded-lg bg-blue">
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
