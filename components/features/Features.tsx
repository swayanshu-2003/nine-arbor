import React from "react";
import FeaturesBg from "@/assets/features/features.png";
import Logo from "@/assets/logo.png";

const FeaturesSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-white  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 relative sm:max-w-full max-w-7xl mx-auto">
        {/* Main Feature Card */}
        <div className="lg:col-span-2 w-full max-w-full sm:w-full md:ml-8 sm:ml-0 bg-black text-white rounded-lg relative overflow-hidden aspect-square">
          {/* Background Image */}
          <img
            src={FeaturesBg?.src}
            alt="Feature Background"
            className="inset-0 w-full h-full object-cover"
          />
          <div className="absolute flex items-center justify-center bottom-0 z-10 h-5/6 w-full bg-gradient-to-t from-black/100 via-black/95 to-black/0">
            <div className="flex flex-col items-start w-10/12 sm:w-9/12 mx-auto mt-40 sm:mt-48 md:mt-64">
              <h4 className="text-xl sm:text-2xl tracking-wide font-Montserrat font-[500] flex flex-col gap-2 mb-5 sm:mb-7">
                <span>Features</span>
                <span className="w-10 sm:w-14 h-0.5 bg-white rounded-full"></span>
              </h4>

              <h2 className="text-xl sm:text-2xl md:text-[44px] !leading-[32px] sm:!leading-[40px] md:!leading-[57px] font-bold font-Inter">
                Why Nine Arbor Stands Out: <br />
                Key Features That Redefine Modern Living
              </h2>
            </div>
          </div>
        </div>

        {/* Secondary Cards */}
        <div className="col-span-1  flex flex-col gap-6">
          <div className="bg-white border shadow flex flex-col gap-4 w-full sm:w-full md:ml-8 sm:ml-0 sm:gap-6 items-center justify-center rounded-lg p-6 text-center aspect-square">
            <h3 className="text-2xl sm:text-3xl font-bold font-Inter">
              TECH DRIVEN
            </h3>
            <p className="mt-2 text-sm sm:text-lg font-[500] font-Lato leading-6 sm:leading-7">
              Live updates and real-time monitoring of project enabled by tech
            </p>
          </div>
          <div className="bg-white border shadow flex flex-col w-full sm:w-full md:ml-8 sm:ml-0 gap-4 sm:gap-6 items-center justify-center rounded-lg p-6 sm:p-10 text-center aspect-square">
            <h3 className="text-2xl sm:text-3xl font-bold font-Inter">
              BUYERS AS PROMOTER
            </h3>
            <p className="mt-2 text-sm sm:text-lg font-[500] font-Lato leading-6 sm:leading-7">
              Our unique SPV structure makes buyers co-owners of the project,
              jointly holding all assets, including land, with investors
            </p>
          </div>
        </div>

        <div className="col-span-1 bg-white border shadow flex flex-col gap-4 w-full sm:w-full md:ml-8 sm:ml-0 sm:gap-6 items-center justify-center rounded-lg p-6 sm:p-10 text-center aspect-square">
          <h3 className="text-2xl sm:text-3xl font-bold font-Inter">
            (COST+MARGIN) PRICING MODEL
          </h3>
          <p className="mt-2 text-sm sm:text-lg font-[500] font-Lato leading-6 sm:leading-7">
            Transparent open book pricing ensuring fair price for buyers
          </p>
        </div>
        <div className="col-span-1 bg-white border shadow flex flex-col gap-4 w-full sm:w-full md:ml-8 sm:ml-0 sm:gap-6 items-center justify-center rounded-lg p-6 sm:p-10 text-center aspect-square">
          <h3 className="text-2xl sm:text-3xl font-bold font-Inter">
            ESCROW SYSTEM
          </h3>
          <p className="mt-2 text-sm sm:text-lg font-[500] font-Lato leading-6 sm:leading-7">
            All funds are managed via escrow ensuring that money is spent only
            on legitimate project expenses
          </p>
        </div>

        {/* Call to Action Card */}
        <div className="bg-black text-white rounded-lg p-6 w-full sm:w-full md:ml-8 sm:ml-0 text-center flex flex-col gap-4 sm:gap-6 items-center justify-center">
          <div className="w-40 sm:w-60">
            <img src={Logo?.src} alt="Logo" className="w-full" />
          </div>
          <button className="border border-white hover:border-black bg-black text-white rounded-md py-2 px-4 hover:bg-white hover:text-black transition font-Lato text-sm sm:text-base">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
