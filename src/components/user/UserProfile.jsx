import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [curUser, setCurUser] = useState({});
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setCurUser(JSON.parse(user));
  }, []);
  return (
    <div className="flex items-center flex-row justify-between h-screen w-full">
      {/**SIDEBARE**/}
      <div className="h-full w-3/12 text-black font-semibold mt-8">
        <button
          className="w-full bg-white border-2 p-1 border-black"
          onClick={() => setOpen(true)}
        >
          INFO
        </button>
        <button
          className="w-full bg-white border-2 p-1 border-black"
          onClick={() => setOpen(false)}
        >
          SKILLS
        </button>
        <button className="w-full bg-white border-2 p-1 border-black">
          CV
        </button>
      </div>

      {/**INFO**/}
      {open ? (
        <div className="h-full min-w-fit w-10/12 flex flex-col p-4 g-4 md:g-8 bg-white">
          <div className="">
            <h2 className="font-bold pl-1">Email</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              {curUser?.email}
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold pl-1">Title</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              {curUser?.title}
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold pl-1">Phone Number</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              {curUser?.phone || "No Contact phone no."}
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold pl-1">Education</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              {curUser?.education || "Unkown"}
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold pl-1">Address</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              {curUser?.address}
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold pl-1">Prefered Job</h2>
            <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
              remote job
            </h2>
          </div>
          <div className="mt-4">
            <button className="w-full p-2 bg-blue font-bold text-white rounded-sm">
              UPDATE
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full min-w-fit w-10/12 flex flex-col p-4 g-4 md:g-8 bg-white">
          <div className="flex flex-row w-full">
            {curUser?.skills?.map((s) => {
              return (
                <button className="p-1 text-white m-0.5 font-medium text-[10px] rounded-lg bg-blue">
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
