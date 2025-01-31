import React from "react";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-6 py-4 items-center justify-center bg-[#EFF1F2]">
      <div className="flex flex-wrap px-4 md:px-0 gap-4 sm:gap-12 text-[#0A142F] font-sans mt-10">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
      </div>
      {/* <div className="flex justify-center gap-6">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <TfiYoutube />
        </a>
      </div> */}

      <div className="text-[#0A142F] font-sans font-light text-xs sm:text-sm">
        © Copyright 2024 - 9arbor
      </div>
    </div>
  );
};

export default Footer;
