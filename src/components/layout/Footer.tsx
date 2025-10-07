"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

  return (
    <footer
      className="relative w-full border-t border-white/10 bg-gradient-to-b 
                 from-gray-900 via-gray-950 to-black text-gray-200 
                 overflow-hidden transition-colors duration-700"
    >
      {/* Glowing radial background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />

      {/* Footer Content */}
      <div className="footer-content relative flex flex-col items-center justify-center gap-6 py-10 text-center px-4 z-10">
        {/* Email */}
        <Link
          href="mailto:as.ankitsaini406@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          as.ankitsaini406@gmail.com
        </Link>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <SocialIcon
            href="https://www.linkedin.com/in/web-ankit-saini/"
            label="LinkedIn"
            glow="from-blue-500 to-cyan-400"
          >
            <FaLinkedinIn />
          </SocialIcon>

          <SocialIcon
            href="https://github.com/Ankitsaini406"
            label="GitHub"
            glow="from-purple-500 to-pink-500"
          >
            <FaGithub />
          </SocialIcon>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-8">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white/80">
            Ankit Saini
          </span>{" "}
          • Designed & Crafted with ❤️.
        </p>
      </div>
    </footer>
  );
}

// Social Icon Component with Glow Effect
function SocialIcon({
  href,
  label,
  glow,
  children,
}: {
  href: string;
  label: string;
  glow: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative p-3.5 rounded-full backdrop-blur-md 
                 border border-white/10 bg-white/5 hover:bg-white/10
                 transition-all duration-500 flex items-center justify-center text-xl text-white
                 hover:scale-110`}
    >
      {children}
      <span
        className={`absolute -z-10 inset-0 rounded-full opacity-0 group-hover:opacity-70 
                    bg-gradient-to-r ${glow} blur-md transition-opacity duration-500`}
      />
    </Link>
  );
}
