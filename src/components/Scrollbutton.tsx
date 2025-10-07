"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import gsap from "gsap";

const ScrollButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top animation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 0.9, yoyo: true, repeat: 1, duration: 0.3, ease: "power2.inOut" }
      );
    }
  };

  // Visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show / hide animation
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    gsap.killTweensOf(btn);
    if (isVisible) {
      gsap.to(btn, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(btn, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [isVisible]);

  // Continuous rotation of gradient ring
  useEffect(() => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 6,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-50 cursor-pointer opacity-0 scale-90 translate-y-24 group backdrop-blur-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
      style={{ transform: "translateY(100px) scale(0.9)", opacity: 0 }}
    >
      {/* Rotating gradient ring */}
      <div
        ref={ringRef}
        className="absolute inset-0 rounded-full p-[2px] blur-[1px]"
      ></div>


      {/* Icon */}
      <div className="relative flex items-center justify-center w-full h-full">
        <FaArrowUp
          className="text-lg transition-colors duration-300 group-hover:scale-110"
        />
      </div>
    </button>
  );
};

export default ScrollButton;
