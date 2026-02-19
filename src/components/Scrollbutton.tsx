"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ScrollButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // SVG Configuration
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  // 1. Scroll Progress Logic & Visibility
  useEffect(() => {
    // Set initial state
    if (progressRef.current) {
      progressRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      progressRef.current.style.strokeDashoffset = `${circumference}`;
    }

    const updateProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;
      
      // Calculate visibility
      if (scrollCurrent > 300) {
        if (!isVisible) setIsVisible(true);
      } else {
        if (isVisible) setIsVisible(false);
      }

      // Calculate Progress Offset
      if (progressRef.current && scrollTotal > 0) {
        const progress = scrollCurrent / scrollTotal;
        const dashoffset = circumference - progress * circumference;
        
        // Use GSAP for smooth stroke update
        gsap.to(progressRef.current, {
          strokeDashoffset: dashoffset,
          duration: 0.1,
          ease: "none"
        });
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [circumference, isVisible]);

  // 2. Button Entrance/Exit Animation
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    if (isVisible) {
      gsap.to(btn, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power4.out",
      });
    } else {
      gsap.to(btn, {
        y: 60,
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isVisible]);

  // 3. Hover Animation (Arrow Loop)
  const handleMouseEnter = () => {
    if (!arrowRef.current) return;
    
    // Animate current arrow up and out, then reset from bottom
    const tl = gsap.timeline();
    
    tl.to(arrowRef.current, {
      y: "-150%",
      duration: 0.3,
      ease: "power2.in"
    })
    .set(arrowRef.current, { y: "150%" }) // Instant jump to bottom
    .to(arrowRef.current, {
      y: "0%",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleMouseEnter(); // Trigger animation on click too
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 z-50 group flex items-center justify-center cursor-pointer mix-blend-difference"
      style={{ transform: "translateY(60px)", opacity: 0 }}
    >
      {/* Container for SVG and Icon */}
      <div className="relative w-full h-full flex items-center justify-center rounded-full bg-(--color-background) shadow-2xl transition-transform duration-300 group-hover:scale-110">
        
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
            className="text-color-secondary opacity-20"
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
            className="text-foreground transition-all"
            strokeLinecap="round"
          />
        </svg>

        {/* The Arrow Icon */}
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center rounded-full">
            <div ref={arrowRef} className="text-foreground text-sm md:text-base">
                <ArrowUp />
            </div>
        </div>

      </div>
    </button>
  );
};

export default ScrollButton;