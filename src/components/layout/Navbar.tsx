"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const List = [
    { title: "Home", path: "/" },
    { title: "Timeline", path: "/timeline" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
    { title: "Resume", path: "/resume.pdf", external: true },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 p-1.5 z-50 
                   bg-primary-bg/80 backdrop-blur-xl border border-border shadow-2xl rounded-full transition-all"
      >
        <Link href="/" className="relative h-9 w-9 ml-1 group flex items-center justify-center hover:scale-110 transition-all duration-300">
          <Image src='/logo.png' width={56} height={56} alt="Logo" priority={false} className="rounded-full group-hover:rotate-12 transition-transform duration-300" />
        </Link>

        <div className="flex items-center gap-1 px-2">
          {List.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.title}
                href={item.path}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative px-4 py-2 rounded-full transition-all duration-300 group overflow-hidden"
              >
                {/* Background Pill */}
                <span className={`absolute inset-0 transition-transform duration-300 ease-out rounded-full
                  ${isActive ? 'bg-foreground translate-y-0' : 'bg-foreground/10 translate-y-full group-hover:translate-y-0'}`}
                />

                {/* Label */}
                <span className={`relative block font-bold text-[11px] uppercase tracking-[0.15em] transition-colors duration-300
                  ${isActive
                    ? 'text-background'
                    : 'text-foreground group-hover:text-foreground'}`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="border-l border-border ml-1 pl-2 pr-1">
          <ThemeSwitcher />
        </div>
      </nav>

      {/* --- Mobile Top Bar --- */}
      <div className="fixed top-0 left-0 w-full md:hidden z-50 p-4 flex justify-between items-center bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="relative h-8 w-8">
          <Image src='/logo.png' width={56} height={56} alt="Logo" priority={false} className="rounded-full" />
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 overflow-hidden cursor-pointer"
        >
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-background z-45 md:hidden flex flex-col items-center justify-center p-10 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-secondary/5 pointer-events-none select-none">
          MENU
        </div>

        <div className="flex flex-col items-center gap-6 relative z-10">
          {List.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-foreground hover:italic transition-all"
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-8">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}