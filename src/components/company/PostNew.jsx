import React, { useContext, useState } from "react";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostNew = () => {
  const { token, user } = useContext(AuthContext);
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
    // Validate form fields
    if (
      !jobTitle ||
      !expectedSalary ||
      !careerLevel ||
      !jobLocation ||
      !jobType ||
      !description
    ) {
      setError("All fields are required");
      return;
    }
    // Create a new post object with the form data
    const id = JSON.parse(user)._id;
    const newPost = {
      title: jobTitle,
      expected_salary: expectedSalary,
      career_level: careerLevel,
      location: jobLocation,
      job_type: jobType,
      description,
      company_id: id,
      skills: ["Web", "Node.js", "OOP"],
    };

    try {
      const res = await axiosAPI.post("/jobs", newPost, {
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
        title: "Deleted!",
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
          id="jobTitle"
          value={jobTitle}
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
          value={expectedSalary}
          onChange={(e) => setExpectedSalary(e.target.value)}
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
          value={careerLevel}
          onChange={(e) => setCareerLevel(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        >
          <option value="">Select Career Level</option>
          <option value="Entry Level">Student</option>
          <option value="Mid Level">Junior</option>
          <option value="Senior Level">Senior</option>
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
          value={jobLocation}
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
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
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
          value={description}
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

export default PostNew;
