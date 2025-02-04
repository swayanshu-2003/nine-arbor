"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import ProjectDemo from "@/assets/projects/projectDemo.svg";
import { CustomCarousel } from "./CustomCarousel";

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

];

const Projects = () => {

  return (
    <div className="my-20 w-full mx-auto" >
      <h2 id="projects" className="text-2xl md:text-[44px] my-10 font-Inter font-bold text-black text-center mt-12">
        Our Projects
      </h2>
      <div className="relative w-full mx-auto">
        <CustomCarousel projects={projectData} />

      </div>
    </div>
  );
};

export default Projects;
