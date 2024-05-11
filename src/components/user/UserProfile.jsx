import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserProfile = () => {
  const {user} = useContext(AuthContext);
  const {open , setOpen} = useState(true);
  useEffect(() => {
    console.log(user)
  } , []); 
  return (
    <>
    {
      open ? (<div className="flex items-center flex-row justify-between h-screen w-full">
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
          {user?.email}
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Title</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {user?.title}
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Phone Number</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {user?.phone || "No Contact phone no."}
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Education</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {user?.education || "Unkown"}
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold pl-1">Address</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {user?.address}
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
    </div>) : (
     
     <div className="w-10/12 flex flex-row">
     <div className="w-full flex flex-col">
       <h2 className="text-blue font-semibold">{user?.title}</h2>
       {/* DETAILS */}
       <div className="flex text-gray-600 flex-col text-[8px] font-medium">
         <span>Career-level : {user?.career_level}</span>
         <span>Age : {user?.age} years</span>
       </div>

       <div className="flex flex-row w-full">
         {
         user?.skills?.map((s) => {
           return (
             <button className="p-1 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue">
               {s}
             </button>
           );
         })}
       </div>
     </div>

     <div>
       <button
         href="/cv_preview.html"
         className="text-xs text-center md:text-lg whitespace-nowrap text-white font-bold rounded-sm p-1 md:p-2 md:w-32 bg-green-500"
       >
         VIEWED
       </button>
     </div>
   </div>


    )
    }
    </>
  );
};

export default UserProfile;
