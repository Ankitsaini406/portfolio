"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const List = [
    { title: "Home", path: "/" },
    { title: "Timeline", path: "/timeline" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
  ];

  // 1. Magnetic Logo & Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo(navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
      );

      // Magnetic effect for Logo
      const logo = logoRef.current;
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = logo!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        gsap.to(logo, { x: x * 0.3, y: y * 0.3, duration: 0.4 });
      };
      const handleMouseLeave = () => {
        gsap.to(logo, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" });
      };

      logo?.addEventListener("mousemove", handleMouseMove);
      logo?.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => ctx.revert();
  }, []);

  // 2. Mobile Menu Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileMenuRef.current, { x: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
      gsap.fromTo(".mobile-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(mobileMenuRef.current, { x: "100%", opacity: 0, duration: 0.4, ease: "expo.in" });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 p-1.5 z-50 
                   bg-primary-bg/70 backdrop-blur-xl border border-secondary/20 shadow-2xl rounded-full"
      >
        <Link ref={logoRef} href="/" className="relative h-9 w-9 ml-1 group flex items-center justify-center">
          <Image src='/logo.png' width={56} height={56} alt="Logo" priority={false} className="rounded-full transition-transform" />
        </Link>

        <div className="flex items-center gap-1 px-2">
          {List.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.title}
                href={item.path}
                className="relative px-5 py-2 rounded-full transition-all duration-300 group overflow-hidden"
              >
                {/* Background Pill */}
                <span className={`absolute inset-0 transition-transform duration-500 ease-out rounded-full
                  ${isActive ? 'bg-accent translate-y-0' : 'bg-foreground/10 translate-y-full group-hover:translate-y-0'}`}
                />

                {/* Label: Fixed the coloring here */}
                <span className={`relative block font-bold text-[11px] uppercase tracking-[0.15em] transition-colors duration-300
                  ${isActive
                    ? 'text-(--color-background)' // Active text uses background color for contrast
                    : 'text-foreground group-hover:text-foreground'}`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="border-l border-secondary/20 ml-1 pl-2 pr-1">
          <ThemeSwitcher />
        </div>
      </nav>

      {/* --- Mobile Top Bar --- */}
      <div className="fixed top-0 left-0 w-full md:hidden z-50 p-4 flex justify-between items-center bg-background/80 backdrop-blur-lg border-b border-secondary/10">
        <div className="relative h-8 w-8">
          <Image src='/logo.png' width={56} height={56} alt="Logo" priority={false} className="rounded-full" />
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 overflow-hidden"
        >
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-background z-45 md:hidden flex flex-col items-center justify-center p-10 translate-x-full opacity-0"
      >
        {/* Subtle Background Text for a "Modern" look */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-secondary/5 pointer-events-none select-none">
          MENU
        </div>

        <div className="flex flex-col items-center gap-6 relative z-10">
          {List.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-link text-5xl font-black uppercase tracking-tighter text-foreground hover:italic transition-all"
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-10 mobile-link">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}