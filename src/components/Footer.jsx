import React from "react";

const Footer = () => {
  return (
    <div className="h-44 w-full bg-footer-header flex justify-center fixed left-0 bottom-0">
      <div className="w-10/12 h-full flex justify-between items-center">
        {/**LOGO & CONTACT SECTION */}
        <div className="h-full flex flex-col gap-2">
          <div className="w-20 h-20">
            <img className="w-fit h-fit" src="/logo.png" alt="" />
          </div>
          <div className="">
            <h2 className="font-semibold text-white">Contact Info</h2>
            <h2 className="font-semibold text-white">Tel: +201115907072</h2>
            <h2 className="font-semibold text-white">
              Email: abdallammdouh6@gmail.com
            </h2>
          </div>
        </div>
        <div className="flex h-full justify-centers items-end mb-8">
          <div className="h-fit">
            <h2 className="font-semibold text-center text-white">
              Created By Abdalla Mmdouh
            </h2>
            <h2 className="font-semibold text-center text-white">2024</h2>
          </div>
        </div>

        <div className="h-full flex flex-col gap-2 mt-4">
          <h2 className="font-semibold w-full text-center text-lg text-white">
            FOLLOW ME
          </h2>
          <div className="flex gap-2 w-full justify-center">
            <i className="text-4xl fa-brands fa-facebook"></i>
            <i className="text-4xl fa-brands fa-github"></i>
            <i className="text-4xl fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
