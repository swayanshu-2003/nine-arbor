import React from "react";
import Solution1 from "@/assets/solutions/solution1.png";
import Solution2 from "@/assets/solutions/solution2.png";
import Solution3 from "@/assets/solutions/solution3.png";
import Solution4 from "@/assets/solutions/solution4.png";
import Solution5 from "@/assets/solutions/solution5.png";

const cardItems = [
  {
    id: 1,
    category: "Transparent Pricing",
    title: "Artificially Inflated Pricing",
    description: "Cost + Margin pricing model, making it 20% more affordable.",
    image: Solution1, // Replace with actual image paths
  },
  {
    id: 2,
    category: "Buyer’s Protection",
    title: "No Buyer Security",
    description:
      "With our unique SPV structure, Buyers are secured by hard assets.",
    image: Solution2,
  },
  {
    id: 3,
    category: "Quality",
    title: "Unclear Quality Standards",
    description:
      "Premium products with 400+ quality checks throughout the development lifecycle.",
    image: Solution3,
  },
  {
    id: 4,
    category: "Resale/Rental",
    title: "No Resale or Rental Support",
    description: "Full support for resale and rental through trusted partners.",
    image: Solution4,
  },
  {
    id: 5,
    category: "Transparency & Reporting",
    title: "Lack of Transparency in Project Progress",
    description: "End-to-end project visibility through tech-enabled tracking.",
    image: Solution5,
  },
];

const Solutions = () => {
  return (
    <div className="my-14 px-8 sm:px-0 w-full sm:w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-0">
        {cardItems.map((item: any, index: any) => (
          <div
            key={item?.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } bg-[#EFF1F2] w-full items-center justify-center`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={item?.image?.src}
                alt={item?.title}
                className="w-full h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 md:p-12 w-full md:w-1/2">
              <p className="text-base md:text-lg font-normal font-Montserrat text-[#707378]">
                {item.category}
              </p>
              <h3 className="text-2xl md:text-[44px] font-Inter font-bold text-black leading-[32px] md:leading-[57px] mt-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-2xl font-Lato font-normal mt-2 text-black">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
