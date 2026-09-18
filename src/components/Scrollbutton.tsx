"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollButton = () => {
  const progressRef = useRef<SVGCircleElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // SVG Configuration
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      progressRef.current.style.strokeDashoffset = `${circumference}px`;
    }

    const updateProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;

      if (scrollCurrent > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (progressRef.current && scrollTotal > 0) {
        const progress = Math.min(Math.max(scrollCurrent / scrollTotal, 0), 1);
        const dashoffset = circumference - progress * circumference;
        progressRef.current.style.strokeDashoffset = `${dashoffset}px`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 z-50 group flex items-center justify-center cursor-pointer transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
    >
      {/* Container for SVG and Icon */}
      <div className="relative w-full h-full flex items-center justify-center rounded-full bg-background border border-border shadow-2xl transition-transform duration-300 group-hover:scale-110">
        {/* Progress Ring SVG */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 44 44"
        >
          {/* Track Circle (faint) */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary opacity-20"
          />
          {/* Progress Circle (fills up) */}
          <circle
            ref={progressRef}
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground transition-all duration-75"
            strokeLinecap="round"
          />
        </svg>

        {/* The Arrow Icon */}
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center rounded-full">
          <div className="text-foreground text-sm md:text-base group-hover:-translate-y-0.5 transition-transform">
            <ArrowUp className="w-5 h-5" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ScrollButton;