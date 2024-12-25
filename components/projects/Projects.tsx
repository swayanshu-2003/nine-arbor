"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import ProjectDemo from "@/assets/projects/projectDemo.png";

const projectData = [
  {
    id: 1,
    title: "Haralur Project",
    description: "2, 3, & 3.5 BHK ",
    type: "Apartment",
    price: "2 Cr",
    units: 200,
    location: {
      name: "Rayasandra",
      address: "Nearby Rayasandra Lake, Bengaluru",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 2,
    title: "Whitefield Residency",
    description: "1, 2, & 3 BHK ",
    type: "Apartment",
    price: "1.5 Cr",
    units: 150,
    location: {
      name: "Whitefield",
      address: "Close to ITPL Main Road, Bengaluru",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 3,
    title: "Electronic City Enclave",
    description: "Studio & 1 BHK",
    type: "Apartment",
    price: "80 L",
    units: 120,
    location: {
      name: "Electronic City",
      address: "Near Infosys Campus, Bengaluru",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 4,
    title: "Koramangala Heights",
    description: "4 BHK ",
    type: "Luxury Villas",
    price: "5 Cr",
    units: 50,
    location: {
      name: "Koramangala",
      address: "In the heart of Bengaluru's premium area",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 5,
    title: "Koramangala Heights",
    description: "4 BHK",
    type: "Luxury Villas",
    price: "5 Cr",
    units: 50,
    location: {
      name: "Koramangala",
      address: "In the heart of Bengaluru's premium area",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 6,
    title: "Koramangala Heights",
    description: "4 BHK",
    type: "Luxury Villas",
    price: "5 Cr",
    units: 50,
    location: {
      name: "Koramangala",
      address: "In the heart of Bengaluru's premium area",
    },
    image: ProjectDemo, // Replace with actual image path
  },
  {
    id: 7,
    title: "Koramangala Heights",
    description: "4 BHK",
    type: "Luxury Villas",
    price: "5 Cr",
    units: 50,
    location: {
      name: "Koramangala",
      address: "In the heart of Bengaluru's premium area",
    },
    image: ProjectDemo, // Replace with actual image path
  },
];

const Projects = () => {
  const scrollContainerRef:any = useRef(null);
  const [clonedData, setClonedData] = useState<any>([...projectData, ...projectData]);

  const scroll = (direction:any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.scrollWidth;
      const visibleWidth = container.offsetWidth;

      // Reposition the scroll to maintain the illusion of infinity
      if (scrollLeft <= 0) {
        container.scrollLeft = containerWidth / 2 - visibleWidth;
      } else if (scrollLeft + visibleWidth >= containerWidth) {
        container.scrollLeft = containerWidth / 2 - visibleWidth;
      }
    }
  };

  const initializeScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Start at the middle of the container for seamless infinite scroll
      container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
    }
  };

  useEffect(() => {
    initializeScrollPosition();
  }, []);

  return (
    <div className="sm:w-full w-[550] mt-20">
      <h2 className="text-3xl sm:text-[44px] my-10 font-Inter font-semibold text-black text-center mt-12">
        Our Projects
      </h2>
      <div className="relative w-full max-w-[1500px] mx-auto">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

        {/* Left Scroll Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          &lt;
        </button>

        {/* Right Scroll Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          &gt;
        </button>

        {/* Scrollable Content */}
        <div
          className="flex items-center gap-4 overflow-x-scroll hide-scrollbar"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {clonedData.map((project: any, index: any) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({ project }: any) => {
  return (
    <div className="w-[250px] sm:w-[350px] min-w-[250px] sm:min-w-[350px] rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={project.image?.src}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl sm:text-3xl font-Inter font-semibold text-gray-800">
          {project.title}
        </h3>
        <div className="grid grid-cols-4 items-center justify-center text-sm text-black mt-7">
          <div className="col-span-2 border-black border-r-2 rounded-8 flex flex-col items-center font-Lato">
            <p className="text-sm sm:text-base font-semibold">{project.description}</p>
            <p className="text-xs font-light">{project.type}</p>
          </div>
          <div className="col-span-1 text-right border-black border-r-2 rounded-8 flex flex-col items-center font-Lato">
            <p className="text-sm sm:text-base">{project.price}</p>
            <p className="text-xs font-light">Onwards</p>
          </div>
          <div className="col-span-1 flex flex-col items-center font-Lato">
            <p className="text-sm sm:text-base">{project.units}</p>
            <p className="text-xs font-light">Units</p>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-4 text-black font-Lato w-full">
          <div className="flex items-start gap-2 max-w-[60%] truncate overflow-hidden">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5" />
            <div className="max-w-[87%]">
              <p className="font-semibold text-sm sm:text-base">{project.location.name}</p>
              <p className="text-xs sm:text-sm text-gray-600 max-w-full overflow-hidden truncate">
                {project.location.address}
              </p>
            </div>
          </div>
          <button className="w-28 sm:w-32 bg-black text-white text-xs sm:text-sm py-1 sm:py-2 hover:bg-gray-800 transition flex items-center justify-center gap-1">
            View Project <ArrowRight  size={15} className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};
