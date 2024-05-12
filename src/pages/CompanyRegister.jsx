import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAPI } from "../api/axiosAPI";
import Swal from "sweetalert2";

const CompanyRegister = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  /** COMPANY */
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [logo, setLogo] = useState();

  const hanleSubmit = async (e) => {
    // Validate input data
    e.preventDefault();
    setErrors(validateData());
    const newCompany = {
      email,
      name,
      password,
      address,
      image: logo,
    };
    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      await axiosAPI.post(
        "companies/register",
        newCompany,

        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      Swal.fire({
        title: "Success!",
        text: "You have successfully registered.",
        icon: "success",
        button: "OK",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log(error);
    }
  };
  const validateData = () => {
    let errors = {};
    // Validate name
    if (!name) {
      errors.name = "Name is required";
    }
    // Validate email
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    // Validate password
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    // Validate address
    if (!address) {
      errors.address = "Address is required";
    }
    // Validate image
    if (!logo) {
      errors.logo = "Logo is required";
    }
    return errors;
  };

  return (
    <div className="mt-8 sm:mx-auto w-full">
      <h2>Register</h2>
      <form
        className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        onSubmit={hanleSubmit}
      >
        {/**NAME**/}
        <div>
          {errors.name && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.name}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Company Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              placeholder="John Doe"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/**EMAIL**/}
        <div className="mt-6">
          {errors.email && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.email}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              placeholder="user@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
            "
            />
            <div className="hidden inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {/**PASSWORD**/}
        <div className="mt-6">
          {errors.password && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.password}
            </span>
          )}
          <label className="block text-sm font-medium leading-5 text-gray-700">
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/**ADDRESS */}
        <div className="mt-6">
          {errors.address && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.address}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Company Address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="cairo , Cairo"
              type="text"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        {/**IMAGE**/}
        <div className="flex items-center space-x-6 mt-6">
          {errors.logo && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.logo}
            </span>
          )}
          <div className="shrink-0">
            <img
              id="preview_img"
              className="h-16 w-16 object-cover rounded-full"
              src="/img/null.png"
              alt="Current Logo image"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose Logo Image</span>
            <input
              type="file"
              onChange={(e) => setLogo(e.target.value)}
              className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-blue
        hover:file:bg-violet-100
      "
            />
          </label>
        </div>

        {/**NEXT**/}
        <div className="mt-6 w-full flex  justify-end">
          <input
            value={"Register"}
            type="submit"
            className="p-2 bg-blue text-white rounded-lg "
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyRegister;
