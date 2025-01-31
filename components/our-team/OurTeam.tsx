import React from "react";
import { FiTwitter } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";

const teamMembers = [
  {
    name: "Kishan K. (CEO)",
    previous: ["ex-Standard Chartered", "ex-Riverwalk Holdings"],
    education: "IIT BHU",
    icons: {
      linkedin: "link-to-linkedin",
    },
  },
  {
    name: "Dhananjay Mishra",
    previous: ["ex-ClearTax", "ex-Flipkart", "ex-Udaan"],
    education: "IIT Delhi",
    icons: {
      linkedin: "link-to-linkedin",
    },
  },
  {
    name: "Amit Daga",
    previous: [
      "Built large sales & operations across Lendingkart",
      "Flipkart",
      "Proteum",
      "Lending-kart",
    ],
    education: "Manipal University",
    icons: {
      linkedin: "link-to-linkedin",
    },
  },
];

const advisors = [
  {
    name: "Vamsi Sai",
    role: "Finance",
    specialization: "Finance",
    experience: "20+ Years in finance & real estate",
    previous: ["ex-COO @ Ozone Group", "ex-Divyashree"],
  },
  {
    name: "Niranjan Tadanki",
    role: "Marketing",
    specialization: "Marketing",
    experience: "20+ Years in marketing & real estate",
    previous: ["ex- @ Ozone", "Karle Infra", "Vaswani Group"],
  },
  {
    name: "Vinay Nagpal",
    role: "Sales",
    specialization: "Sales",
    experience: "20+ Years in sales & real estate",
    previous: ["ex- @ Ozone", "Mantri Developers"],
  },
  {
    name: "Naveen Kumar",
    role: "CRM",
    specialization: "CRM",
    experience: "20+ years in CRM & real estate",
    previous: [
      "Held senior positions @ Ozone group",
      "Sowparnika",
      "Confident Group",
    ],
  },
  {
    name: "Alok Kumar Singh",
    role: "Project Management",
    specialization: "Project Management",
    experience: "15+ Years in sales & real estate",
    previous: ["Founder of Azven Realty & Azure Capital"],
  },
  {
    name: "Gaurav Gowda",
    role: "Construction Management",
    specialization: "Construction Management",
    experience: "30+ years in construction management",
    previous: [
      "Held senior positions @ Ozone",
      "ASK property",
      "ICICI",
      "Saint Gobain",
    ],
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-12" >
      {/* Team Section */}
      <div className="text-center mb-12">
        <div className="flex flex-col w-full items-center">
          <span id="team" className=" text-[#433F3E] w-fit text-xs sm:text-sm md:text-base lg:text-2xl">
            Team
          </span>
          <span className="w-9 h-0.5 bg-[#433F3E] rounded-full -ml-4" />
        </div>
        <h1 className="text-[44px] font-bold mt-2 font-Inter">Meet Our Team</h1>
        {/* <p className="text-gray-600 mt-2 font-Montserrat">
          A dedicated team to serve your dreams
        </p> */}
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
            <p className="text-gray-400 text-sm">
              {member.previous.join(", ")}, {member.education}
            </p>
            {/* <p className="text-gray-400 text-sm">{member.education}</p> */}

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="bg-black rounded-full p-2 text-white">
                <PiLinkedinLogoBold />
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
              className="bg-white border-2 border-[#DCDCDC] p-6 text-center pb-16"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
