"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const List = [
    { title: "Home", path: "#home" },
    { title: "Timeline", path: "#timelineSection" },
    { title: "Projects", path: "#projects" },
    { title: "About", path: "#about" },
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
  return (
    <div
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 flex w-max p-1.5 z-50 transition-all duration-500 bg-white/70 backdrop-blur-[3px] border border-white/50 shadow-md rounded-full"
    >
      <div className="flex items-center gap-1 px-1">
        {List.map((list) => (
          <Link
            key={list.title}
            href={list.path}
            className="relative px-5 py-2 rounded-full group"
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
  );
}
