import React, { useState } from "react";

const PostNew = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [careerLevel, setCareerLevel] = useState("");
  const [postTime, setPostTime] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new post object with the form data
    const newPost = {
      jobTitle,
      expectedSalary,
      careerLevel,
      postTime,
      jobLocation,
      jobType,
    };
    // Pass the new post object to the onSubmit prop function
    // Clear the form fields after submission
    setJobTitle("");
    setExpectedSalary("");
    setCareerLevel("");
    setPostTime("");
    setJobLocation("");
    setJobType("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8"
    >
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
        >
          <option value="">Select Career Level</option>
          <option value="Entry Level">Student</option>
          <option value="Mid Level">Junior</option>
          <option value="Mid Level">Mid-level</option>
          <option value="Senior Level">Senior</option>
        </select>
      </div>
      
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
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white bg-green-500 font-bold px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default PostNew;
