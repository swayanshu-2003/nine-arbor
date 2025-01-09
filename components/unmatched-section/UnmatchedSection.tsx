import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import VectorImg from "@/assets/unmatched/Vector.png";

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
    // <div className="w-full bg-gray-100 ">
    //   <div className=" py-12 bg-gray-100 max-w-7xl mx-auto">
    //     <div className="flex items-start justify-between ">
    //       {/* Left Section */}
    //       <div className="space-y-4">
    //         <h4 className="text-xl tracking-wide font-Montserrat font-[500] flex flex-col gap-2 mb-7">
    //           <span>Unmatched</span>
    //           <span className="w-16 h-0.5 bg-black rounded-full"></span>
    //         </h4>
    //         <h2 className="text-2xl md:text-[44px] !leading-[57px] font-bold font-Inter ">
    //           What makes <br />
    //           <span className="text-gray-600">our buildings</span>
    //           <br /> stand out
    //         </h2>
    //       </div>

    //       {/* Accordion Section */}
    //       <div className="w-4/6 px-8">
    //         <Accordion type="single" collapsible className="space-y-4 w-full">
    //           {accordionItems.map((item) => (
    //             <AccordionItem key={item.id} value={item.id}>
    //               <AccordionTrigger className="text-lg font-medium text-[#707378] font-Montserrat">
    //                 {item.title}
    //               </AccordionTrigger>
    //               <AccordionContent className="text-gray-600 font-Montserrat font-[500] text-base">
    //                 {item.content}
    //               </AccordionContent>
    //             </AccordionItem>
    //           ))}
    //         </Accordion>
    //       </div>
    //     </div>
    //   </div>
    //   <img src={VectorImg?.src} alt="" className="w-[450px] relative bottom-0 left-0 -mt-40" />
    // </div>

    <div className="w-full bg-gray-100">
      <div className="py-12 bg-gray-100 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Section */}
          <div className="space-y-4 mb-8 lg:mb-0">
            <h4 className="text-xl tracking-wide font-Montserrat font-[500] flex flex-col gap-2 mb-7">
              <span>Unmatched</span>
              <span className="w-16 h-0.5 bg-black rounded-full"></span>
            </h4>
            <h2 className="text-2xl md:text-[44px] !leading-[57px] font-bold font-Inter">
              What makes <br />
              <span className="text-gray-600">our buildings</span>
              <br /> stand out
            </h2>
          </div>

          {/* Accordion Section */}
          <div className="w-full lg:w-4/6 px-4 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4 w-full">
              {accordionItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium text-[#707378] font-Montserrat">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-Montserrat font-[500] text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      {/* Vector Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={VectorImg?.src}
          alt=""
          className="w-64 sm:w-80 md:w-[350px] lg:w-[450px] relative bottom-0 left-0 -mt-20 lg:-mt-40"
        />
      </div>
    </div>
  );
};

export default UnmatchedSection;
