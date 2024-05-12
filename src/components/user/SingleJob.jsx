import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const SingleJob = () => {
  const { jobId } = useParams();
  const [post, setPost] = useState([]);
  const { token, user } = useContext(AuthContext);
  useEffect(() => {
    axiosAPI
      .get(`jobs/${jobId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPost(res.data?.data);
        console.log(res.data?.data);
      })
      .catch((error) => {});
  }, []);
  const handleApplicationApply = () => {
    const user_id = user._id;
    console.log(user_id, " ", jobId);
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
          text: "Your Application has been done successfuly .",
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
  return (
    <div className="h-fit w-full flex-row  space-y-4">
      {/** MAIN DETAILS SECTION */}
      <div className="flex w-full md:p-4 h-fit flex-row bg-white rounded-xl">
        {/**IMAGE & USERNAME */}
        <div className="w-fit flex flex-col items-center p-1">
          <img
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full"
            src={post?.company[0].image}
            alt=""
          />
          <h2 className="font-bold text-slate-700 text-xs sm:text-base rounded-xl">
            {post?.company[0].name}
          </h2>
        </div>
        <div className="w-10/12 flex flex-col p-2">
          <h2 className="text-blue text-xs sm:text-lg md:text-2xl font-bold">
            {post?.title}
          </h2>
          <div className="flex text-gray-600 mt-1 flex-col text-[10px] md:text-base font-medium rounded-xl">
            <span>23 Applications | 4 Viewed </span>
            <span>posted at : {post?.post_date?.slice(0, 10)}</span>
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
      {/**INFO */}
      <div className="bg-white p-1 md:p-4 rounded-xl">
        <h2 className="font-bold text-blue text-[14px] sm:text-base md:text-xl">
          JOB INFO
        </h2>
        <div className="flex text-gray-800 flex-col text-sm md:text-base font-medium rounded-xl">
          <span>Expected Salary : {post?.expected_salary} EGP</span>
          <span>Career-level : {post?.career_level}</span>
          <span>Location : {post?.location}</span>
          <span>Job Type : {post?.job_type} </span>
        </div>
      </div>

      {/** DESCRIPTION SECTION SECTION */}
      <div className="bg-white w-full h-fit p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          Description
        </h2>
        <p className="bg-soft-gray p-1 md:p-2 rounded-2xl sm:text-sm md:text-lg text-[10px] font-serif">
          {post?.description || "No Description"}
        </p>
      </div>

      {/**SKILLS */}
      <div className="bg-white p-1 md:p-4 rounded-xl">
        <h2 className="p-1 font-bold text-blue text-[14px] sm:text-base md:text-xl">
          NEEDED SKILLS
        </h2>
        <div className="flex flex-row w-full">
          {post?.skills?.map((s, i) => {
            return (
              <button
                key={i}
                className="p-1 md:p-2 text-white m-0.5 font-medium text-[10px]  rounded-lg bg-blue"
              >
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
