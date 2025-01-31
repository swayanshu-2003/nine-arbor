"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CarouselCard } from "@/components/projects/carousel-card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  location: string;
}

interface CustomCarouselProps {
  projects: any[];
}

export function CustomCarousel({ projects }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const minSwipeDistance = 50;

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return;

      setIsAnimating(true);
      setActiveIndex((current) => {
        const newIndex =
          direction === "next"
            ? (current + 1) % projects.length
            : (current - 1 + projects.length) % projects.length;
        return newIndex;
      });

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, projects.length]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      navigate("next");
    } else if (isRightSwipe) {
      navigate("prev");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigate("prev");
      } else if (e.key === "ArrowRight") {
        navigate("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="relative max-w-7xl  mx-auto px-4 py-12">
      {/* Left fade */}
      <div className="z-40 absolute left-0 top-0 h-full w-6 md:w-96 bg-gradient-to-r from-white to-transparent pointer-events-none " />

      {/* Right fade */}
      <div className="z-40 absolute right-0 top-0 h-full w-6 md:w-96 bg-gradient-to-l from-white to-transparent pointer-events-none " />
      <div
        className="relative h-[480px] overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => (
          <CarouselCard
            key={project.id}
            project={project}
            index={index}
            activeIndex={activeIndex}
            totalItems={projects?.length}
          />
        ))}
      </div>

      <button
        onClick={() => navigate("prev")}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border-2 border-black transition-colors disabled:opacity-50 z-50"
        disabled={isAnimating}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => navigate("next")}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 border-2 border-black rounded-full shadow-lg transition-colors disabled:opacity-50 z-50"
        disabled={isAnimating}
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
