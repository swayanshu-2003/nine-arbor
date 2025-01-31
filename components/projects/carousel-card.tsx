"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

interface CarouselCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  location: string;
  index: number;
  activeIndex: number;
  totalItems: number;
}

export function CarouselCard({ project, index, activeIndex, totalItems }: any) {
  const getCardPosition = () => {
    let diff = index - activeIndex;

    // Handle wrap-around cases
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === -1) return "left";
    return "hidden";
  };

  const position = getCardPosition();

  if (position === "hidden") return null;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-0 w-full max-w-[450px] transition-all duration-500 ease-in-out",
        position === "center" && "-translate-x-1/2 scale-100 opacity-100 z-20",
        position === "left" && "-translate-x-[150%] scale-75 opacity-50 z-10",
        position === "right" && "translate-x-[50%] scale-75 opacity-50 z-10"
      )}
    >
      <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={project.image?.src}
            alt={project?.title}
            className={cn(
              "object-cover transition-all duration-500",
              position !== "center" && "grayscale"
            )}
            sizes="(max-width: 450px) 100vw, 400px"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-Inter font-semibold text-gray-800">
            {project.title}
          </h3>
          <div className="grid grid-cols-7 w-full  items-center justify-center text-sm text-black mt-7 gap-2">
            <div className="col-span-3 text-right border-black border-r-2 rounded-8 flex flex-col items-start justify-center font-Lato">
              <div className="flex flex-col items-start w-fit ">
                <p className="text-sm sm:text-base font-semibold">
                  {project.description}
                </p>
                <p className="text-xs font-light">{project.type}</p>
              </div>
            </div>
            <div className="col-span-2 text-right border-black border-r-2 rounded-8 flex flex-col items-center justify-center font-Lato">
              <div className="flex flex-col items-start w-fit ">
                <p className="text-sm sm:text-base">{project.price}</p>
                <p className="text-xs font-light">Onwards</p>
              </div>
            </div>
            <div className="col-span-2 text-right  rounded-8 flex flex-col items-center justify-center font-Lato">
              <div className="flex flex-col items-start w-fit ">
                <p className="text-sm sm:text-base">{project.units}</p>
                <p className="text-xs font-light">Units</p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 mt-4 text-black font-Lato w-full">
            <div className="flex items-start gap-2 max-w-[60%] truncate overflow-hidden">
              <MapPin className="w-5 h-5 mt-1 " color="#00000080" />
              <div className="max-w-[91%]">
                <p className="font-semibold text-sm sm:text-base">
                  {project.location.name}
                </p>
                <p className="text-xs text-gray-600 max-w-full overflow-hidden truncate">
                  {project.location.address}
                </p>
              </div>
            </div>
            <button className="w-24 sm:w-32 bg-black rounded text-white text-xs sm:text-sm py-2 hover:bg-gray-800 transition flex items-center justify-center gap-1">
              View Project <ArrowRight size={15} className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
