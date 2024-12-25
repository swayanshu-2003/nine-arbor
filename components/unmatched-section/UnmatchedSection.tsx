import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "item-1",
    title: "Comprehensive Service",
    content:
      "We provide top-notch services covering all aspects of property management.",
  },
  {
    id: "item-2",
    title: "Affordable Boutique Communities in Premium Neighborhoods",
    content: "Tailored housing solutions in highly sought-after locations.",
  },
  {
    id: "item-3",
    title: "Luxury Meets Practicality",
    content: "We combine luxurious designs with practical, functional spaces.",
  },
  {
    id: "item-4",
    title: "Architectural Excellence",
    content: "Designs that inspire and provide exceptional quality.",
  },
  {
    id: "item-5",
    title: "Amenities as Subscription",
    content:
      "Innovative subscription-based services for all your living needs.",
  },
];

const UnmatchedSection = () => {
  return (
    <div className="sm:w-full w-[550] bg-gray-100">
      <div className="py-12   bg-gray-100 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="space-y-4 w-full ml-10  sm:ml-0 lg:w-2/5">
            <h4 className="text-xl sm:text-2xl tracking-wide font-Montserrat font-[500] flex flex-col gap-2 mb-4 sm:mb-7">
              <span>Unmatched</span>
              <span className="w-12 sm:w-16 h-0.5 bg-black rounded-full"></span>
            </h4>
            <h2 className="text-2xl flex sm:flex-col gap-1 sm:gap-2 sm:text-3xl md:text-[44px] font-bold font-Inter ">
              What makes <br />
              <span className="text-gray-600">our buildings</span>
              <br/> <span className="sm:-mt-10">stand out</span>
            </h2>
          </div>

          {/* Accordion Section */}
          <div className="w-full lg:w-3/5 px-4 sm:px-4">
            <Accordion type="single" collapsible className="space-y-4 w-full">
              {accordionItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-base sm:text-lg font-medium text-[#707378] font-Montserrat">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-Montserrat font-[500] text-sm sm:text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnmatchedSection;
