import React, { useContext, useEffect, useState } from "react";
import { axiosAPI } from "../../api/axiosAPI";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const PostEdit = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [curPost, setCurPost] = useState({});
  useEffect(() => {
    axiosAPI
      .get(`jobs/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setCurPost(res.data?.data);
        setPostData();
      })
      .catch((error) => {});
  }, []);
  // POST VARIABLES
  const [jobTitle, setJobTitle] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [careerLevel, setCareerLevel] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new post object with the form data
    const newPost = {
      title: jobTitle,
      expected_salary: expectedSalary,
      career_level: careerLevel,
      location: jobLocation,
      job_type: jobType,
      description,
      skills: ["Web", "Node.js", "OOP"],
    };
    // UPDATE THE DATA
    try {
      const res = await axiosAPI.patch(`/jobs/${id}`, newPost, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      });
      // Reset form fields and error state after successful submission
      setJobTitle("");
      setExpectedSalary("");
      setCareerLevel("");
      setJobLocation("");
      setJobType("");
      setDescription("");
      setError("");
      // Alert success message
      Swal.fire({
        title: "Done",
        text: "Your file has been added.",
        icon: "success",
      });
    } catch (error) {
      // Handle submission error
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const setPostData = () => {
    setCareerLevel(curPost?.career_level);
    setDescription(curPost?.description);
    setExpectedSalary(curPost?.expected_salary);
    setJobType(curPost?.job_type);
    setJobTitle(curPost?.title);
    setJobLocation(curPost?.location);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8"
    >
      {/* Job Title */}
      <div className="mb-4">
        <label
          htmlFor="jobTitle"
          className="block text-sm font-medium text-gray-700"
        >
          Job Title
        </label>
        <input
          type="text"
          defaultValue={curPost?.title || ""}
          onChange={(e) => setJobTitle(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      {/* Expected Salary */}
      <div className="mb-4">
        <label
          htmlFor="expectedSalary"
          className="block text-sm font-medium text-gray-700"
        >
          Expected Salary (EGP)
        </label>
        <input
          type="number"
          id="expectedSalary"
          defaultValue={curPost?.expected_salary}
          onChange={(e) => {
            setExpectedSalary(e.target.value);
            console.log(e.target.value);
          }}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      {/* Career Level */}
      <div className="mb-4">
        <label
          htmlFor="careerLevel"
          className="block text-sm font-medium text-gray-700"
        >
          Career Level
        </label>
        <select
          id="careerLevel"
          defaultValue={curPost?.career_level}
          onChange={(e) => setCareerLevel(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        >
          <option defaultValue="">Select Career Level</option>
          <option defaultValue="Entry Level">Student</option>
          <option defaultValue="Mid Level">Junior</option>
          <option defaultValue="Senior Level">Senior</option>
        </select>
      </div>
      {/* Job Location */}
      <div className="mb-4">
        <label
          htmlFor="jobLocation"
          className="block text-sm font-medium text-gray-700"
        >
          Job Location
        </label>
        <input
          type="text"
          id="jobLocation"
          defaultValue={curPost?.location}
          onChange={(e) => setJobLocation(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      {/* Job Type */}
      <div className="mb-4">
        <label
          htmlFor="jobType"
          className="block text-sm font-medium text-gray-700"
        >
          Job Type
        </label>
        <select
          id="jobType"
          defaultValue={curPost?.job_type}
          onChange={(e) => setJobType(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        >
          <option defaultValue="">Select Job Type</option>
          <option defaultValue="Full-time">Full-time</option>
          <option defaultValue="Part-time">Part-time</option>
          <option defaultValue="Contract">Contract</option>
          <option defaultValue="Freelance">Freelance</option>
        </select>
      </div>
      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          defaultValue={curPost?.description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          rows="4"
          required
        />
      </div>
      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {/* Form Buttons */}
      <div className="flex justify-between">
        <Link
          to={"/company/posts"}
          className="bg-blue-500 text-white bg-green-500 font-bold px-4 py-2 rounded-md"
        >
          Back
        </Link>
        <button
          type="submit"
          className="bg-blue-500 text-white bg-green-500 font-bold px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default PostEdit;
