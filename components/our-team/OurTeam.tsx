import React from "react";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const TeamSection: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl w-[550] sm:w-full mx-auto px-10 md:px-6 py-12">
        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-2xl font-medium text-[#433F3E] flex flex-col gap-2 items-center font-Montserrat">
            Features
            <span className="w-10 sm:w-14 h-0.5 -ml-5 md:-ml-11 bg-black rounded-full" />
          </h2>
          <h1 className="text-2xl md:text-[44px] !leading-[57px] font-bold mt-2 font-Inter">
            Meet our team
          </h1>
          <p className="text-[#5F6980] mt-2 text-sm md:text-lg">
            A dedicated team to serve your dreams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member Cards */}
          {["Kishan K. (CEO)", "Dhananjay Mishra", "Amit Dega"].map(
            (name, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <h3 className="text-sm md:text-lg font-semibold mb-2">
                  {name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">
                  {index === 0
                    ? "5+ years of experience, ex-XYZ"
                    : index === 1
                    ? "8+ years of experience in IT"
                    : "5+ years of experience in Logistics"}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <CiLinkedin />
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <MdOutlineEmail />
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* Advisors Section */}
        <div className="mt-12 text-center">
          <h2 className="text-xl md:text-[44px] font-Inter font-bold mb-6">Our Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Vamsi Sai",
              "Nitesh Tadepalli",
              "Vinay Nagpal",
              "Naveen Kumar",
              "Ajit Kumar Singh",
              "Gaurav Gowda",
            ].map((name, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <h3 className="text-sm md:text-lg font-semibold mb-2">
                  {name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">
                  {index % 2 === 0
                    ? "20+ years of experience in their field"
                    : "15+ years of experience in marketing"}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <CiLinkedin />
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-black hover:bg-gray-800"
                  >
                    <MdOutlineEmail />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
