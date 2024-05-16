import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CompanyProfile = () => {
  const { user } = useContext(AuthContext);
  const [curUser, setCurUser] = useState({});
  useEffect(() => {
    setCurUser(user);
  }, []);

  return (
    <div className="flex items-center w-10/12 flex-row justify-between h-screen">
      {/**INFO**/}
      <div className="h-full min-w-fit w-10/12 flex flex-col p-4 g-4 md:g-8 bg-white  rounded-3xl">
        <div>
          <h2 className="font-bold pl-1">Email</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {curUser?.email}
          </h2>
        </div>

        <div>
          <h2 className="font-bold pl-1">Company Name</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {curUser?.name}
          </h2>
        </div>

        <div>
          <h2 className="font-bold pl-1">Company Address</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            {curUser?.location || "UNKOWN LOCATION"}
          </h2>
        </div>

        <div className="mt-4">
          <button className="w-1/5 p-2 bg-blue font-bold text-white rounded-sm">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
