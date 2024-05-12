import React, { useContext, useEffect, useState } from "react";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";

const Application = ({ post }) => {
  const {status, job_id: job } = post;
  const {token} = useContext(AuthContext);
  const [company, setCompany] = useState({});
  useEffect(() => {
    console.log(job.company_id);
    axiosAPI
      .get(`companies/${job.company_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) =>{ setCompany(res.data?.data) ; console.log(res);})
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="p-2 w-full bg-white flex flex-row">
      {/**IMAGE & NAME SECTION */}
      <div className="w-2/12 min-w-fit flex-col justify-center flex items-center">
        <img
          className="h-12 w-12 md:h-18 md:w-18 lg:w-28 lg:h-28 rounded-full"
          src={company?.image}
          alt="company_image"
        />
        <span className="text-sm md:text-base lg:text-xl text-slate-700 font-semibold">
          {company?.name}
        </span>
      </div>

      <div className="w-10/12 flex flex-row">
        <div className="w-full flex flex-col">
          <h2 className="text-blue font-semibold">{job?.title}</h2>
          {/* DETAILS */}
          <div className="flex text-gray-600 flex-col text-[8px] font-medium">
            <span>Expected Salary : {job.expected_salary}</span>
            <span>Career-level : {job.career_level}</span>
            <span>Location : {job.location}</span>
            <span>Applied at : {post.created_at?.slice(0, 10)}</span>
          </div>

          <div className="flex flex-row w-full">
            {job?.skills?.map((s, i) => {
              return (
                <div
                  key={i}
                  className="p-1 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue"
                >
                  {s}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button
            href="/cv_preview.html"
            className="text-xs text-center md:text-lg whitespace-nowrap text-white font-bold rounded-sm p-1 md:p-2 md:w-32 bg-green-500"
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
