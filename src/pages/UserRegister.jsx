import React, { useState } from "react";
import GuestHeader from "../components/guest/GuestHeader";
import { axiosAPI } from "./../api/axiosAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDB } from "../firebaseConfig";

const UserRegister = () => {
  const [isOpen, setOpen] = useState(true);
  const [addedSkill, setAddedSkill] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  /** USER_DATA */
  const [name, setName] = useState();
  const [user_name, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [jobType, setJobType] = useState();
  const [careerLevel, setCareelLevel] = useState();
  const [image, setImage] = useState();
  const [skills, setSkills] = useState([]);
  const [cv, setCv] = useState();

  const hanleSubmit = async () => {
    // Validate input data
    setErrors(validateData());
    // if (Object.keys(errors).length === 0) {
    //   return;
    // }
    // MAKE THE POST REQUEST .
    try {
      const imageRef = ref(imageDB, `images/users/${image.name}`);
      await uploadBytes(imageRef, image);
      // Get download URL of the uploaded logo
      const ImageURL = await getDownloadURL(imageRef);

      console.log(cv);
      const CvRef = ref(imageDB, `user/cvs/${cv.name}`);
      await uploadBytes(CvRef, cv);
      // Get download URL of the uploaded logo
      const CvURL = await getDownloadURL(CvRef);
      const newUser = {
        name,
        user_name,
        email,
        password,
        date,
        title,
        address,
        job_type: jobType,
        career_level: careerLevel,
        skills,
        image: ImageURL,
        cv_link: CvURL,
      };
      await axiosAPI.post("users/register", newUser, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      Swal.fire({
        title: "Success!",
        text: "You have successfully registered.",
        icon: "success",
        button: "OK",
      }).then(() => {
        navigate("/company/login");
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
  const handleNewSikill = () => {
    console.log(skills.length);
    if (addedSkill === "" || addedSkill == undefined) {
      return;
    }
    const newSkills = skills;
    newSkills.push(addedSkill);
    setSkills(newSkills);
  };
  const validateData = () => {
    let errors = {};
    // Validate name
    if (!name) {
      errors.name = "Name is required";
    }
    // Validate user name
    if (!user_name) {
      errors.user_name = "User name is required";
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
    // Validate date
    if (!date) {
      errors.date = "Date is required";
    }
    // Validate title
    if (!title) {
      errors.title = "Title is required";
    }
    // Validate job type
    if (!jobType) {
      errors.jobType = "Job type is required";
    }
    // Validate career level
    if (!careerLevel) {
      errors.careerLevel = "Career level is required";
    }
    // Validate image
    if (!image) {
      errors.image = "Image is required";
    }
    // Validate skills
    if (skills.length === 0) {
      errors.skills = "At least one skill is required";
    }
    // Validate CV
    if (!cv) {
      errors.cv = "CV is required";
    }
    return errors;
  };

  return (
    <div className="w-full h-fit static bg-white">
      <div className=" bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {isOpen ? (
          <div className="mt-8 sm:mx-auto w-full">
            <h2>Register</h2>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {/**NAME**/}
              <div>
                {errors.name && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.name}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5  text-gray-700">
                  Name
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    placeholder="John Doe"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              {/**USER_NAME**/}
              <div className="mt-6">
                {errors.user_name && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.user_name}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5  text-gray-700">
                  username
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    placeholder="John_1"
                    value={user_name}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
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
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    placeholder="user@example.com"
                    type="email"
                    value={email}
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
                    value={password}
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
                  Address
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="cairo , Cairo"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              {/**DATE */}
              <div className="mt-6">
                {errors.date && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.date}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5  text-gray-700">
                  Date
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              {/**NEXT**/}
              <div className="mt-6 w-full flex  justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 bg-blue text-white rounded-lg "
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 sm:mx-auto w-full">
            <h2>Register</h2>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {/**JOB TITLE**/}
              <div>
                {errors.title && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.title}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5  text-gray-700">
                  Job title
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    placeholder="Software Engineer"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              {/**CAREER  LEVEL**/}
              <div className="mt-6">
                {errors.careerLevel && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.careerLevel}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Career level
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <select
                    onChange={(e) => setCareelLevel(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="junior">Junior</option>
                    <option value="med_level">Med-Level</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
              </div>
              {/**JOB TYPE**/}
              <div className="mt-6">
                {errors.jobType && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.jobType}
                  </span>
                )}
                <label className="block text-sm font-medium leading-5  text-gray-700">
                  Job Type
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <select
                    onChange={(e) => setJobType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="office">Office</option>
                    <option value="remote">Remote</option>
                    <option value="hybird">Hybird</option>
                  </select>
                </div>
              </div>
              {/**IMAGE**/}
              <div className="flex items-center space-x-6 mt-6">
                {errors.image && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.image}
                  </span>
                )}
                <div className="shrink-0">
                  <img
                    id="preview_img"
                    className="h-16 w-16 object-cover rounded-full"
                    src="/img/null.png"
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
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
              {/**PDF FILE**/}
              <div className="mt-6  rounded-md shadow-sm">
                {errors.cv && (
                  <span className="text-sm text-red-500 font-semibold">
                    {errors.cv}
                  </span>
                )}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload CV (PDF FILE ONLY)
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  onChange={(e) => setCv(e.target.files[0])}
                />
              </div>
              {/**SKILLS**/}
              {errors.skills && (
                <span className="text-sm text-red-500 font-semibold">
                  {errors.skills}
                </span>
              )}
              <div className="mt-6 w-full ">
                <div className="w-full flex flex-row h-fit">
                  <input
                    type="text"
                    placeholder="Enter Your Skills"
                    className="w-full h-full py-1"
                    onChange={(e) => setAddedSkill(e.target.value)}
                  />
                  <button
                    className="w-fit font-medium text-white whitespace-nowrap h-full py-1 pr-1 rounded-r-lg bg-blue"
                    onClick={handleNewSikill}
                  >
                    ADD SKILL
                  </button>
                </div>

                <div className="w-full bg-soft-gray mt-3 p-1 rounded-md">
                  <ul className="w-full flex flex-row gap-1 overflow-hidden">
                    {skills?.map((s, i) => {
                      return (
                        <li
                          key={i}
                          className="p-1 bg-blue text-white font-medium rounded-lg"
                        >
                          {s}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/**SUBMIT**/}
              <div className="mt-6 w-full flex  justify-between">
                <button
                  onClick={() => setOpen(true)}
                  className="p-2 bg-blue text-white rounded-lg "
                >
                  BACK
                </button>
                <button
                  onClick={hanleSubmit}
                  className="p-2 bg-blue text-white rounded-lg "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserRegister;
