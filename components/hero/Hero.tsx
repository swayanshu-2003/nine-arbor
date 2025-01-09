import React from "react";

import HeroImage from "@/assets/hero/hero.png";


const Hero = () => {
  return (
    <div>
      {/* Hero Section */}

      <div className="relative">
        {/* Background Image */}
        <img
          src={HeroImage?.src} // Replace with your actual image URL

          alt="Hero Background"
          className="w-full h-auto object-cover"
        />

        {/* Text Content */}

        <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 md:px-6 lg:px-8 pt-52">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight font-Inter">
            Where Your Vision Meets <br />
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4 text-black font-Inter">
            Transparent <span className="font-normal">Homebuilding</span>
          </h1>
          <p className="my-10 text-black text-sm md:text-xl lg:text-2xl max-w-2xl font-Montserrat !leading-9 font-[500]">
            We Empower Homebuyers to Co-Create Communities <br /> and
            Multi-Family Dream Homes
          </p>
          <button className="border border-black hover:border-black bg-black text-white rounded-md py-2 px-4 hover:bg-white hover:text-black transition font-Lato text-base">

            Talk to Us
          </button>
        </div>

        {/* About Section */}

        <div className="absolute grid grid-cols-1 bg-gradient-to-t from-black via-black/50 to-black/0 md:grid-cols-2 gap-6 bottom-0 w-full  py-12 md:py-16 lg:py-52 text-start px-4 md:px-6 lg:px-24 2xl:px-52">
          <p className="col-span-2 py-2  text-white font-[500] font-Montserrat text-left">
            <span className="border-b-2 border-white w-fit text-sm md:text-base lg:text-2xl pb-2 ">
              About
            </span>
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[44px] !leading-[56px] font-bold col-span-1 text-white font-Inter ">
            Innovating Real Estate <br /> for Collaborative
            <br /> Ownership
          </h2>
          <p className="mt-1.5 text-sm md:text-base lg:text-2xl max-w-4xl !leading-9 mx-auto col-span-1 font-Lato font-[500] text-white">
            At Nine Arbor, we bring homebuyers/investors together to
            <br /> co-create bespoke apartments and
            <br /> thriving communities that meet their unique needs and
            <br /> aspirations.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
