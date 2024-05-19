import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full max-w-screen-lg bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png"
            alt="CVPortal Logo"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">About CVPortal</h1>
        </div>
        <div className="text-lg text-gray-700 mb-6">
          <p className="mb-4">
            Welcome to CVPortal, the project created by Abdalla Mmdouh in 2024. CVPortal provides an easy and good UI and UX experience, allowing companies to view users' CVs and profiles, post job vacancies, and for users to apply to those job posts seamlessly.
          </p>
          <p className="mb-4">
            The Website is designed to bridge the gap between job seekers and employers, offering a user-friendly interface that simplifies the hiring process. With CVPortal, managing job applications has never been easier.
          </p>
        </div>
        <div className="text-lg text-gray-700 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Easy-to-use interface for job seekers and employers</li>
            <li>Comprehensive profiles with CV upload capability</li>
            <li>Job posting and application management</li>
          </ul>
        </div>
        <div className="text-lg text-gray-700">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p>
            If you have any questions or need further assistance, feel free to reach out me at <a href="mailto:abdallammdouh6@gmail.com" className="text-blue-600 font-bold">abdallammdouh6@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
