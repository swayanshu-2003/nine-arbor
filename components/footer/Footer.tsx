import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-6 mb-20 items-center justify-center ">
      <div className="flex flex-wrap px-4 md:px-0 gap-4 sm:gap-12 text-[#0A142F] font-sans mt-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Highlights</a>
        <a href="#">Values</a>
        <a href="#">Projects</a>
        <a href="#">Team</a>
      </div>
      <div className="flex justify-center gap-6">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <TfiYoutube />
        </a>
      </div>

      <div className="text-[#0A142F] font-sans font-light text-sm sm:text-lg">
        © Copyright 2024 - 9arbor
      </div>
    </div>
  );
};

export default Footer;
