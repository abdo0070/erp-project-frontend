import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { axiosAPI } from '../api/axiosAPI';
import Swal from 'sweetalert2';
import GuestHeader from '../components/guest/GuestHeader';

const CompanyLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, updateUser, role } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
  }, []);
  const handleLogin = async () => {
    try {
      const res = await axiosAPI.post(
        "companies/login",
        { email, password },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      console.log(res.data.token);
      updateUser(res.data.token, res.data.role || 2);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Wrong Password",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen bg-white">
      <GuestHeader />
      <div className="w-full h-full min-w-fit flex flex-col items-center justify-center">
        <div className="mt-1 w-8/12 md:w-5/12 min-w-fit p-2 bg-white rounded-xl  h-[25rem] max-h-full flex flex-col border-black border-2">
          <div className="w-full">
            <h2 className="font-bold text-black text-lg md:text-2xl">
              Login to your account
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col font-sans">
              <label htmlFor="" className="p-1 font-medium">
                Email
              </label>
              <input
                type="email"
                className="rounded-md w-full p-1 focus:border-sky-700  border-2"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col font-sans">
              <label htmlFor="" className="p-1 font-medium">
                Password
              </label>
              <input
                type="password"
                className="rounded-md w-full  focus:border-sky-700  border-2 p-1"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col font-sans">
              <input
                type="submit"
                className="rounded-md w-full  bg-blue  p-2 text-white font-bold "
                value={"Login now"}
                onClick={handleLogin}
              />
            </div>
            <div className="w-full flex flex-col items-center font-sans font-bold text-sm md:text-lg">
              <h2>
                Sign up as Company {" "}
                <Link to={"/company/register"} className="text-blue">
                   Sign Up{" "}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin