import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const SingleJob = () => {
  const { jobId } = useParams();
  const [post, setPost] = useState(null);  // Initialize as null
  const { token, user, refreshToken } = useContext(AuthContext);

  useEffect(() => {
    axiosAPI
      .get(`jobs/${jobId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPost(res.data?.data);
      })
      .catch(() => {
        refreshToken();
      });
  }, [jobId, token, refreshToken]);

  const handleApplicationApply = () => {
    const user_id = user._id;
    axiosAPI
      .post(
        "/applications",
        {
          job_id: jobId,
          user_id: user_id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Your Application has been done successfully.",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  // Render loading or not found state if post is not yet loaded
  if (!post) {
    return <div>Loading...</div>;
  }

  // Destructure to simplify access and add safety checks
  const {
    company = [],
    title,
    post_date,
    expected_salary,
    career_level,
    location,
    job_type,
    description,
    veiwed_num,
    applied_num,
    skills = [],
  } = post;

  const companyInfo = company[0] || {};

  return (
    <div className="h-fit w-10/12 flex-row space-y-4">
      {/** MAIN DETAILS SECTION */}
      <div className="flex w-full md:p-4 h-fit flex-row bg-white rounded-xl">
        {/** IMAGE & USERNAME */}
        <div className="w-fit flex flex-col items-center p-1">
          <img
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full"
            src={companyInfo.image || 'default_image_url'} // Provide a fallback URL if needed
            alt={companyInfo.name || 'Company'}
          />
          <h2 className="font-bold text-slate-700 text-xs sm:text-base rounded-xl">
            {companyInfo.name || 'Company Name'}
          </h2>
        </div>
        <div className="w-10/12 flex flex-col p-2">
          <h2 className="text-blue text-xs sm:text-lg md:text-2xl font-bold">
            {title}
          </h2>
          <div className="flex text-gray-600 mt-1 flex-col text-[10px] md:text-base font-medium rounded-xl">
            <span>{applied_num || 0} Applications | {veiwed_num || 0} Viewed</span>
            <span>Posted at: {post_date?.slice(0, 10)}</span>
          </div>
        </div>
        <div className="flex items-start mt-2 mr-1.5 sm:mr-3">
          <button
            className="text-xs text-center md:text-lg whitespace-nowrap text-white font-bold rounded-sm p-1 md:p-2 lg:p-3 md:w-32 bg-blue"
            onClick={handleApplicationApply}
          >
            Apply
          </button>
        </div>
      </div>
      {/** INFO */}
      <div className="bg-white p-1 md:p-4 rounded-xl">
        <h2 className="font-bold text-blue text-[14px] sm:text-base md:text-xl">
          JOB INFO
        </h2>
        <div className="flex text-gray-800 flex-col text-sm md:text-base font-medium rounded-xl">
          <span>Expected Salary: {expected_salary} EGP</span>
          <span>Career-level: {career_level}</span>
          <span>Location: {location}</span>
          <span>Job Type: {job_type}</span>
        </div>
      </div>
      {/** DESCRIPTION SECTION */}
      <div className="bg-white w-full h-fit p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          Description
        </h2>
        <p className="bg-soft-gray p-1 md:p-2 rounded-2xl sm:text-sm md:text-lg text-[10px] font-serif">
          {description || "No Description"}
        </p>
      </div>
      {/** SKILLS */}
      <div className="bg-white p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          NEEDED SKILLS
        </h2>
        <div className="flex flex-row w-full">
          {skills.map((s, i) => (
            <button
              key={i}
              className="p-1 md:p-2 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
