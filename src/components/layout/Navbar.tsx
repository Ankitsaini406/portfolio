"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const List = [
    { title: "Home", path: "/" },
    { title: "Timeline", path: "/timeline" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
  ];

  useEffect(() => {
    if (navRef.current) {
      // Hide initially
      gsap.set(navRef.current.querySelectorAll("a"), { opacity: 0, y: -20 });

      // Animate in with stagger
      gsap.to(navRef.current.querySelectorAll("a"), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5, // Delay after page load
      });
    }
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Animation for mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        // Open animation
        gsap.to(mobileMenuRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(mobileMenuRef.current.querySelectorAll("a"), {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.1,
        });
      } else {
        // Close animation
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(mobileMenuRef.current.querySelectorAll("a"), {
          opacity: 0,
          y: -10,
          duration: 0.2,
        });
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex w-max p-1.5 z-50 transition-all duration-500 bg-white/70 backdrop-blur-[3px] border border-white/50 shadow-md rounded-full"
      >
        <Link href="/" className="relative h-10 w-10 aspect-square">
          <Image src='/logo.png' alt="Logo" fill className="rounded-full" />
        </Link>
        <div className="flex items-center gap-1 px-1">
          {List.map((list) => (
            <Link
              key={list.title}
              href={list.path}
              className="relative px-5 py-2 rounded-full group"
              onClick={handleLinkClick}
            >
              <span
                className="block font-medium text-sm uppercase tracking-wider mix-blend-difference bg-blend-difference
                          group-hover:text-red-600 transition-colors duration-300"
              >
                {list.title}
              </span>

              {/* Hover indicator */}
              <span className="absolute inset-0 rounded-full pointer-events-none" />

              {/* Active indicator (shows on route match) */}
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-2 bg-red-600 rounded-full opacity-0
                              group-hover:opacity-100 group-hover:w-6 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-4 md:hidden z-50 flex w-full px-5 justify-between items-center bg-white/70 backdrop-blur-[3px] border border-white/50 shadow-md rounded-full">
        <div className="relative h-15 aspect-square">
          <Image src='/logo.png' alt="Logo" fill className="rounded-full" />
        </div>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="w-12 h-12 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100 my-1"
              }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        style={{ opacity: 0 }}
      >
        <div className="relative w-24 h-24 mb-8">
          <Image src='/logo.png' alt="Logo" fill className="rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-6">
          {List.map((list) => (
            <Link
              key={list.title}
              href={list.path}
              className="relative px-8 py-4 rounded-full group text-white text-xl font-medium"
              onClick={handleLinkClick}
              style={{ opacity: 0, transform: "translateY(-10px)" }}
            >
              <span className="block uppercase tracking-wider transition-colors duration-300 group-hover:text-red-400">
                {list.title}
              </span>

              {/* Active indicator (shows on route match) */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-2 bg-red-500 rounded-full opacity-0
                            group-hover:opacity-100 group-hover:w-16 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}