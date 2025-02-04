"use client";
import React, { useEffect, useRef } from "react";
import HeroImage from "@/assets/hero/hero.svg";
import useScrollSnap from "@/hooks/useScrollSnap";
const Hero = () => {
  // const containerRef = useRef<HTMLDivElement>(null);

  // useScrollSnap(containerRef, { snapDestinationY: "90%" }, () =>
  //   console.log("snapped")
  // );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling && container) {
        isScrolling = true;
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    if (container) {
      container.addEventListener('wheel', handleScroll);
      container.addEventListener('touchmove', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=""
  
    >
      {/* Hero Section */}
      <div className="relative max-w-[550px] sm:max-w-full mx-auto    snap-start">
        {/* Background Image */}
        <img
          src={HeroImage?.src}
          alt="Hero Background"
          className="w-full h-auto object-cover"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 sm:px-6 md:px-10 pt-16 sm:pt-36 md:pt-48 lg:pt-52">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-black leading-tight font-Inter">
            Your Investment <br />
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold md:mt-4 text-black font-Inter">
            Grade <span className="font-normal">Builder</span>
          </h1>
          <p className="my-2 sm:my-6 md:my-8 lg:my-10 text-black text-xs sm:text-sm md:text-lg lg:text-2xl max-w-xl sm:max-w-2xl font-Montserrat leading-relaxed">
            Invest in the Future with Confidence, <br />
            Transparency, and Assured Quality{" "}
          </p>
          <a
            href="https://wa.me/7007828937" className="border rounded-sm border-black hover:border-black bg-black text-white py-2 px-3 sm:px-4 hover:bg-zinc-800 hover:text-white transition font-Lato text-xs sm:text-sm md:text-base">
            Talk to Us
          </a>
        </div>

        {/* About Section */}
        <div id="about" className="absolute grid grid-cols-1 bg-gradient-to-t from-black/50 via-black/35 to-black/0 md:grid-cols-2 gap-6 bottom-0 w-full py-8 sm:py-12 md:py-16 lg:py-36 text-start px-3 sm:px-4 md:px-6 lg:px-24 2xl:px-52  items-start ">
          {/* About Section Header */}
          <p className="col-span-2 py-2 text-white font-[500] font-Montserrat text-left">
            <span className="border-b-2 border-white w-fit text-xs sm:text-sm md:text-base lg:text-2xl pb-2">
              About
            </span>
          </p>

          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[44px] !leading-7 sm:!leading-8 md:!leading-[40px] lg:!leading-[56px] font-bold col-span-2 md:col-span-1 text-white font-Inter">
            Innovating Real Estate <br className="hidden md:inline-block" /> for
            Collaborative
            <br className="hidden md:inline-block" /> Ownership
          </h2>

          {/* Section Description */}
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-2xl max-w-md sm:max-w-xl md:max-w-2xl !leading-snug sm:!leading-8 md:!leading-9 lg:!leading-9 mx-auto col-span-2 md:col-span-1 font-Lato font-[500] text-white">
            At 9 Arbor, we bring homebuyers/investors together to co-create
            bespoke Real estate projects and thriving communities that meet their unique
            needs and aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
