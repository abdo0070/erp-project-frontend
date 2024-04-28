import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center flex-row justify-between h-screen w-full">
      {/**SIDEBARE**/}
      <div className="h-full w-3/12 text-black font-semibold mt-8">
        <div className="w-full bg-white border-2 p-1 border-black">INFO</div>
        <div className="w-full bg-white border-2 p-1 border-black">SKILLS</div>
        <div className="w-full bg-white border-2 p-1 border-black">CV</div>
      </div>
      {/**INFO**/}
      <div className="h-full min-w-fit w-10/12 flex flex-col p-4 g-4 md:g-8 bg-white">
        <div className="">
          <h2 className="font-bold pl-1">Email</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            abdallammdouh6@gmail.com
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Title</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            fullstack web developer
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Phone Number</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            01115907072
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Education</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            faculty of computer science ain shams university
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Address</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            Giza , Egypt
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Prefered Job</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            remote job
          </h2>
        </div>
        <div className="mt-4">
          <button className="w-full p-2 bg-blue font-bold text-white rounded-sm">UPDATE</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
