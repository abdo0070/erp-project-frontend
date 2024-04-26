import React from "react";

const Footer = () => {
  return (
    <div className="md:h-44 min-h-fit max-h-full  w-full bg-footer-header flex justify-center">
      <div className="w-10/12 h-full p-2 flex justify-between items-center g-3 md:g-5">
        {/**LOGO & CONTACT SECTION */}
        <div className="h-full flex flex-col gap-2">
          <div className="h-8 w-8 md:w-20 md:h-20">
            <img
              className="bg-transparent rounded-full w-fit h-fit"
              src="/logo.png"
              alt=""
            />
          </div>
          <div className="text-xs md:text-base font-semibold text-white">
            <h2>Contact Info</h2>
            <h2>Tel: +201115907072</h2>
            <h2>Email: abdallammdouh6@gmail.com</h2>
          </div>
        </div>
        <div className="flex h-full justify-centers items-end mb-4 md:mb-8">
          <div className="h-fit">
            <h2 className="text-xs md:text-base font-semibold text-center text-white">
              Created By Abdalla Mmdouh
            </h2>
            <h2 className="text-xs md:text-base font-semibold text-center text-white">
              2024
            </h2>
          </div>
        </div>

        <div className="h-full flex flex-col gap-2 justify-items-end">
          <h2 className="text-sm md:text-lg font-semibold w-full text-centertext-white">
            FOLLOW ME
          </h2>
          <div className="flex gap-2 w-full justify-center">
            <a href=""><i className="text-sm md:text-4xl fa-brands fa-facebook"></i></a>
            <a href=""><i className="text-sm  md:text-4xl fa-brands fa-github"></i></a>
            <a href=""><i className="text-sm  md:text-4xl fa-brands fa-linkedin"></i></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
