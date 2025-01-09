import React from "react";
import { FiTwitter } from "react-icons/fi";

import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";

const teamMembers = [
  {
    name: "Kishan K. (CEO)",
    role: "CEO",
    specialization: "Operations & BD",
    experience: "9+ years in finance, tech & real estate",
    previous: ["Standard Chartered", "Riverwalk Holdings"],
    education: "IIT BHU",
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Dhananjay Mishra",
    role: "Investor Management & Sales",
    specialization: "Investor Management & Sales",
    experience: "16+ years BD & Corp Dev",
    previous: ["ClearTax", "Flipkart", "Udaan"],
    education: "IIT Delhi",
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Amit Daga",
    role: "Investor Management & Sales",
    specialization: "Investor Management & Sales",
    experience: "Built large sales & operations across Lendingkart, Flipkart",
    previous: ["Lendingkart", "Flipkart"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
];

const advisors = [
  {
    name: "Vamsi Sai",
    role: "Finance",
    specialization: "Finance",
    experience: "20+ Years in finance & real estate",
    previous: ["Ozone Group", "Divyashree"],
    education: "University of Toronto",
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Niranjan Tadanki",
    role: "Marketing",
    specialization: "Marketing",
    experience: "20+ Years in marketing & real estate",
    previous: ["Ozone", "Karle Infra", "Vaswani Group"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Vinay Nagpal",
    role: "Sales",
    specialization: "Sales",
    experience: "20+ Years in sales & real estate",
    previous: ["Ozone", "Mantri Developers"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Naveen Kumar",
    role: "CRM",
    specialization: "CRM",
    experience: "20+ years in CRM & real estate",
    previous: ["Ozone group", "Sowparnika", "Confident Group", "Goyal and co"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Alok Kumar Singh",
    role: "Project Management",
    specialization: "Project Management",
    experience: "15+ Years in sales & real estate",
    previous: ["Azven Realty", "Azure Capital"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
  {
    name: "Gaurav Gowda",
    role: "Construction Management",
    specialization: "Construction Management",
    experience: "30+ years in construction management",
    previous: ["Ozone", "ASK property", "ICICI", "Saint Gobain"],
    education: null,
    icons: {
      linkedin: "link-to-linkedin",
      calendar: "link-to-calendar",
      email: "link-to-email",
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    // <div className="max-w-5xl mx-auto px-4 pb-12">
    //   {/* Team Section */}
    //   <div className="text-center mb-12">
    //     {/* <h2 className="text-sm uppercase font-semibold text-gray-500">
    //       Features
    //     </h2> */}
    //     <h1 className="text-[44px] font-bold mt-2 font-Inter">Meet our team</h1>
    //     <p className="text-gray-600 mt-2 font-Montserrat">
    //       A dedicated team to serve your dreams
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    //     {/* Team Member Cards */}
    //     {teamMembers.map((member, index) => (
    //       <div
    //         key={index}
    //         className="bg-white border-2 border-[#DCDCDC] p-6 text-center max-w-[310px] col-span-1"
    //       >
    //         <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full"></div>
    //         <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
    //         <p className=" text-sm -mt-2">{member.specialization}</p>
    //         <p className="text-gray-500 text-sm mt-3">{member.experience}</p>
    //         <p className="text-gray-400 text-sm ">
    //           {member.previous.join(", ")}
    //         </p>
    //         <p className="text-gray-400 text-sm">{member.education}</p>
    //         <div className="flex justify-center space-x-4  mt-10">
    //           <a
    //             href="#"
    //             className="  bg-black rounded-full p-2 text-white font-bold"
    //           >
    //             <FiTwitter />
    //           </a>
    //           <a
    //             href="#"
    //             className="bg-black rounded-full p-2 text-white font-bold"
    //           >
    //             <PiLinkedinLogoBold />
    //           </a>
    //           <a
    //             href="#"
    //             className="bg-black rounded-full p-2 text-white font-bold"
    //           >
    //             <MdMailOutline />
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Advisors Section */}
    //   <div className="mt-24 text-center">
    //     <h2 className="text-2xl font-bold mb-12">OUR ADVISORS</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 4 gap-6">
    //       {advisors.map((member, index) => (
    //         <div
    //           key={index}
    //           className="bg-white border-2 border-[#DCDCDC] p-6 text-center max-w-[310px]"
    //         >
    //           <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full"></div>
    //           <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
    //           <p className=" text-sm -mt-2">{member.specialization}</p>
    //           <p className="text-gray-500 text-sm mt-3">{member.experience}</p>
    //           <p className="text-gray-400 text-sm ">
    //             {member.previous.join(", ")}
    //           </p>
    //           <p className="text-gray-400 text-sm">{member.education}</p>
    //           <div className="flex justify-center space-x-4  mt-10">
    //             <a
    //               href="#"
    //               className="  bg-black rounded-full p-2 text-white font-bold"
    //             >
    //               <FiTwitter />
    //             </a>
    //             <a
    //               href="#"
    //               className="bg-black rounded-full p-2 text-white font-bold"
    //             >
    //               <PiLinkedinLogoBold />
    //             </a>
    //             <a
    //               href="#"
    //               className="bg-black rounded-full p-2 text-white font-bold"
    //             >
    //               <MdMailOutline />
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-5xl mx-auto px-4 pb-12">
      {/* Team Section */}
      <div className="text-center mb-12">
        <h1 className="text-[44px] font-bold mt-2 font-Inter">Meet Our Team</h1>
        <p className="text-gray-600 mt-2 font-Montserrat">
          A dedicated team to serve your dreams
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#DCDCDC] p-6 text-center"
          >
            {/* Team Member Avatar */}
            <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full"></div>

            {/* Member Details */}
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-sm -mt-2">{member.specialization}</p>
            <p className="text-gray-500 text-sm mt-3">{member.experience}</p>
            <p className="text-gray-400 text-sm">
              {member.previous.join(", ")}
            </p>
            <p className="text-gray-400 text-sm">{member.education}</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="bg-black rounded-full p-2 text-white">
                <FiTwitter />
              </a>
              <a href="#" className="bg-black rounded-full p-2 text-white">
                <PiLinkedinLogoBold />
              </a>
              <a href="#" className="bg-black rounded-full p-2 text-white">
                <MdMailOutline />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Advisors Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase">Our Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#DCDCDC] p-6 text-center"
            >
              {/* Advisor Avatar */}
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full"></div>

              {/* Advisor Details */}
              <h3 className="text-lg font-semibold mb-2">{advisor.name}</h3>
              <p className="text-sm -mt-2">{advisor.specialization}</p>
              <p className="text-gray-500 text-sm mt-3">{advisor.experience}</p>
              <p className="text-gray-400 text-sm">
                {advisor.previous.join(", ")}
              </p>
              <p className="text-gray-400 text-sm">{advisor.education}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-8">
                <a href="#" className="bg-black rounded-full p-2 text-white">
                  <FiTwitter />
                </a>
                <a href="#" className="bg-black rounded-full p-2 text-white">
                  <PiLinkedinLogoBold />
                </a>
                <a href="#" className="bg-black rounded-full p-2 text-white">
                  <MdMailOutline />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default TeamSection;
