import React from "react";
import Solution1 from "@/assets/solutions/solution1.svg";
import Solution2 from "@/assets/solutions/solution2.svg";
import Solution3 from "@/assets/solutions/solution3.svg";
import Solution4 from "@/assets/solutions/solution4.svg";
import Solution5 from "@/assets/solutions/solution5.svg";

const cardItems = [
  {
    id: 1,
    category: "Transparent Pricing",
    title: "No Artificial Inflation of Price",
    description: "Cost + Margin pricing model, making it 20% more affordable.",
    image: Solution1, // Replace with actual image paths
  },
  {
    id: 2,
    category: "Buyer’s Protection",
    title: "Investor/Buyer security upto 100%",
    description:
      "With our unique SPV structure, Buyers are secured by hard assets.",
    image: Solution2,
  },
  {
    id: 3,
    category: "Quality",
    title: "Investment grade quality checks and standards",
    description:
      "Premium products with 400+ quality checks throughout the development lifecycle.",
    image: Solution3,
  },
  {
    id: 4,
    category: "Resale/Rental",
    title: "Comprehensive resale or rental support",
    description: "Full support for resale and rental through trusted partners.",
    image: Solution4,
  },
  {
    id: 5,
    category: "Transparency & Reporting",
    title: "100% transparency on project progress",
    description: "End-to-end project visibility through tech-enabled tracking.",
    image: Solution5,
  },
];

const Solutions = () => {
  return (
 

    <div className="my-14 max-w-7xl mx-auto">
      <div className="flex flex-col items-center ">
        {cardItems.map((item: any, index: any) => (
          <div
            key={item?.id}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } bg-[#EFF1F2] w-full items-center justify-center`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={item?.image?.src}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-12 w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-base lg:text-lg font-normal font-Montserrat text-[#707378]">
                {item.category}
              </p>
              <h3 className="text-2xl lg:text-[44px] font-Inter font-bold text-black leading-tight lg:leading-[57px] mt-2">
                {item.title}
              </h3>
              <p className="text-black font-Lato text-base lg:text-2xl font-normal mt-2">

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
