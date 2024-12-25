import React from "react";
import HeroImage from "@/assets/hero/hero2.png";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-[550] sm:w-full">
        {/* Background Image */}
        <img
          src={HeroImage?.src}
          alt="Hero Background"
          className="w-full  h-auto object-cover"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 sm:px-6 md:px-10 pt-40 sm:pt-48 lg:pt-52 w-[550] sm:w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight font-Inter">
            Where Your Vision Meets <br />
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mt-4 text-black font-Inter">
            Transparent{" "}
            <span className="font-normal">Homebuilding</span>
          </h1>
          <p className="my-6 sm:my-8 md:my-10 text-black text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl font-Montserrat !leading-7 sm:!leading-8 lg:!leading-9 font-[500]">
            We Empower Homebuyers to Co-Create Communities <br />
            and Multi-Family Dream Homes
          </p>
          <button className="border border-black hover:border-black bg-black text-white rounded-md py-2 px-4 hover:bg-white hover:text-black transition font-Lato text-sm sm:text-base">
            Talk to Us
          </button>
        </div>

        {/* About Section */}
        <div className="absolute grid grid-cols-1 md:grid-cols-2 gap-6 bottom-0 w-full bg-gradient-to-t from-black/75 via-black/50 to-black/0 py-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-52 text-start">
          <p className="col-span-2 text-white font-[500] font-Montserrat">
            <span className="border-b-2 border-white w-fit text-sm sm:text-base lg:text-2xl pb-2">
              About
            </span>
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl !leading-8 sm:!leading-10 lg:!leading-[56px] font-bold col-span-1 text-white font-Inter">
            Innovating Real Estate <br />
            for Collaborative <br />
            Ownership
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-2xl max-w-full md:max-w-2xl lg:max-w-4xl !leading-6 sm:!leading-7 md:!leading-8 lg:!leading-9 mx-auto col-span-1 font-Lato font-[500] text-white">
            At Nine Arbor, we bring homebuyers/investors together to <br />
            co-create bespoke apartments and <br />
            thriving communities that meet their unique needs and <br />
            aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
