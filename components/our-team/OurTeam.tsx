import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import KishanKImg from "@/assets/team/kishan-k.png";
import DhananjayMImg from "@/assets/team/dhananjay-m.png";
import AmitDImg from "@/assets/team/amit-d.png";

import AlokKumarImg from "@/assets/advisors/alok-kumar-singh.png"
import GauravGImg from "@/assets/advisors/gaurav-gowda.png"
import NaveenKImg from "@/assets/advisors/naveen-kumar.png"
import NiranjanTImg from "@/assets/advisors/niranjan-tadanki.png"
import VamsiSaiImg from "@/assets/advisors/vamsi-sai.png"
import VinayNImg from "@/assets/advisors/vinay-nagpal.png"

const teamMembers = [
  {
    name: "Kishan K. (CEO)",
    previous: ["ex-Standard Chartered", "ex-Riverwalk Holdings"],
    education: "IIT BHU",
    socials: {
      linkedin: "https://www.linkedin.com/in/kishan-k-153924127/",
    },
    profile_picture: KishanKImg,
  },
  {
    name: "Dhananjay Mishra",
    previous: ["ex-ClearTax", "ex-Flipkart", "ex-Udaan"],
    education: "IIT Delhi",
    socials: {
      linkedin: "https://www.linkedin.com/in/dhananjay-mishra-346a7620/",
    },
    profile_picture: DhananjayMImg,
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
    socials: {
      linkedin: "https://www.linkedin.com/in/amit-d-5b747652/",
    },
    profile_picture: AmitDImg,
  },
];

const advisors = [
  {
    name: "Vamsi Sai",
    role: "Finance",
    specialization: "Finance",
    experience: "20+ Years in finance & real estate",
    previous: ["ex-COO @ Ozone Group", "ex-Divyashree"],
    profile_picture:VamsiSaiImg

  },
  {
    name: "Niranjan Tadanki",
    role: "Marketing",
    specialization: "Marketing",
    experience: "20+ Years in marketing & real estate",
    previous: ["ex- @ Ozone", "Karle Infra", "Vaswani Group"],
    profile_picture:NiranjanTImg
  },
  {
    name: "Vinay Nagpal",
    role: "Sales",
    specialization: "Sales",
    experience: "20+ Years in sales & real estate",
    previous: ["ex- @ Ozone", "Mantri Developers"],
    profile_picture:VinayNImg
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
    profile_picture:NaveenKImg
  },
  {
    name: "Alok Kumar Singh",
    role: "Project Management",
    specialization: "Project Management",
    experience: "15+ Years in sales & real estate",
    previous: ["Founder of Azven Realty & Azure Capital"],
    profile_picture:AlokKumarImg
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
    profile_picture:GauravGImg
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-12">
      {/* Team Section */}
      <div className="text-center mb-12">
        <div className="flex flex-col w-full items-center">
          <span
            id="team"
            className=" text-[#433F3E] w-fit text-xs sm:text-sm md:text-base lg:text-2xl"
          >
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
            <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full overflow-hidden">
              <img
                src={member?.profile_picture?.src}
                alt=""
                className="bg-cover w-full h-full"
              />
            </div>

            {/* Member Details */}
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-400 text-sm">
              {member.previous.join(", ")}, {member.education}
            </p>
            {/* <p className="text-gray-400 text-sm">{member.education}</p> */}

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href={member?.socials?.linkedin} target="_blank" className="bg-black rounded-full p-2 text-white">
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
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-300 rounded-full overflow-hidden">
              <img
                src={advisor?.profile_picture?.src}
                alt=""
                className="bg-cover bg-center w-full h-full"
              />
              </div>

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
