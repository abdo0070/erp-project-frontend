import React from "react";
import UserHeader from "../components/guest/GuestHeader";
import Footer from "../components/Footer";

const UserLogin = () => {
  return (
    <div className="w-full h-screen bg-white">
      <UserHeader />
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
              />
            </div>

            <div className="w-full flex flex-col font-sans">
              <input
                type="submit"
                className="rounded-md w-full  bg-blue  p-2 text-white font-bold "
                value={"Login now"}
              />
            </div>
            <div className="w-full flex flex-col items-center font-sans font-semibold text-sm md:text-lg">
              <h2>
                Don't have an account ?{" "}
                <a href="" className="text-blue">
                  Sign Up{" "}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLogin;
