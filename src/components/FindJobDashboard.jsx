import React from "react";

const FindJobDashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full bg-transparent">
      <div className="w-10/12 h-96 md:h-[40rem] m-auto flex justify-center flex-col items-center">
        {/** TEXT */}
        <div className="w-full font-bold text-white ml-5 mb-5 text-lg md:text-3xl">
          <h1>FIND YOUR JOB</h1>
        </div>
        {/*SEARCH*/}
        <div className="flex justify-start w-full">
          <form
            className="w-full bg-white rounded-full flex flex-row p-2 justify-around"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Job Title"
              className="p-1 md:p-5 w-10/12 placeholder-black text-black bg-slate-100 rounded-lg font-semibold"
            />
            <input
              type="submit"
              className="bg-blue text-white text-xs min-w-fit md:text-base font-semibold w-1/12 p-2 md:p-4 rounded-md"
              value={"Search"}
            />
          </form>
        </div>
      </div>

      <div className="w-full h-72 md:h-96 bg-black">
        {/*JOIN BANNER*/}
      <div className="w-full h-full gap-4 flex flex-col items-center justify-center font-semibold text-lg md:text-3xl">
        <h2 className="text-white text-center">MAKE YOUR CV AND BE READY FOR OPPORTUNITIES !</h2>
        <a href="#" className="p-3 w-fit text-white bg-blue">JOIN</a>
        </div>
      </div>
    </div>
  );
};

export default FindJobDashboard;
