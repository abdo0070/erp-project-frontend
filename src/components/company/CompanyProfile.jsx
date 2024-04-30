import React from "react";

const CompanyProfile = () => {
  return (
    <div className="flex items-center flex-row justify-center p-5 h-fit w-full">
      {/**INFO**/}
      <div className="h-full flex flex-col p-8 g-4 md:g-8 bg-white rounded-3xl">
        <div>
          <h2 className="font-bold pl-1">Email</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            abdallammdouh6@gmail.com
          </h2>
        </div>
        <div>
          <h2 className="font-bold pl-1">Title</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            fullstack web developer
          </h2>
        </div>
        <div>
          <h2 className="font-bold pl-1">Phone Number</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            01115907072
          </h2>
        </div>
        <div>
          <h2 className="font-bold pl-1">Education</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            faculty of computer science ain shams university
          </h2>
        </div>
        <div>
          <h2 className="font-bold pl-1">Address</h2>
          <h2 className="w-full border-2 border-[#CACED8] rounded-md p-1 bg-white">
            Giza , Egypt
          </h2>
        </div>
        <div>
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
    </div>
  );
};

export default CompanyProfile;
