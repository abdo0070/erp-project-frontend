import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAPI } from "../api/axiosAPI";
import Swal from "sweetalert2";
import { imageDB } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const CompanyRegister = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [logo, setLogo] = useState(null);

  const hanleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateData());
    const newCompany = {
      email,
      name,
      password,
      address,
    };
    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      // Upload logo to Firebase Storage
      console.log(logo);
      const imageRef = ref(imageDB, `images/${logo.name}`);
      await uploadBytes(imageRef, logo);
      // Get download URL of the uploaded logo
      newCompany.image = await getDownloadURL(imageRef);
      await axiosAPI.post("companies/register", newCompany, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      Swal.fire({
        title: "Success!",
        text: "You have successfully registered.",
        icon: "success",
        button: "OK",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const validateData = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!address) {
      errors.address = "Address is required";
    }
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
        <div>
          {errors.name && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.name}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Company Name
          </label>
          <div className="mt-1  rounded-md shadow-sm">
            <input
              placeholder="John Doe"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          {errors.email && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.email}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Email address
          </label>
          <div className="mt-1  rounded-md shadow-sm">
            <input
              placeholder="user@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
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
        <div className="mt-6">
          {errors.address && (
            <span className="text-sm text-red-500 font-semibold">
              {errors.address}
            </span>
          )}
          <label className="block text-sm font-medium leading-5  text-gray-700">
            Company Address
          </label>
          <div className="mt-1  rounded-md shadow-sm">
            <input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="cairo , Cairo"
              type="text"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
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
              src={logo ? URL.createObjectURL(logo) : "/img/null.png"}
              alt="Current Logo image"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose Logo Image</span>
            <input
              type="file"
              onChange={(e) => setLogo(e.target.files[0])}
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
