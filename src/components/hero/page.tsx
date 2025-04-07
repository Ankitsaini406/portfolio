"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaShopify,
    FaPhp,
    FaGithub,
    FaCode,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const bgRef = useRef(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        gsap.to(bgRef.current, {
            backgroundPosition: "200% center",
            repeat: -1,
            duration: 15,
            ease: "sine.inOut",
        });

        if (textRef.current) {
            gsap.from(textRef.current.querySelectorAll(".fade-in"), {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            });
        }

        const timeout = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div ref={bgRef} className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-primary text-foreground">
            <div className="absolute inset-0 overflow-hidden">
                {isVisible && (
                    <>
                        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent-light blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-dark blur-3xl"></div>
                    </>
                )}
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                <div ref={textRef} className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <h2 className="text-xl md:text-2xl font-medium text-secondary fade-in">Hello, I&apos;m a</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white fade-in">
                        <span className="block">Full-Stack</span>
                        <span className="block mt-2">Developer</span>
                    </h1>
                    <div className="fade-in">
                        <span className="text-2xl md:text-3xl font-light text-secondary-light">
                            <span className="text-accent">{"<"}</span>
                            <span className="text-white font-medium">Crafting digital experiences</span>
                            <span className="text-accent">{"/>"}</span>
                        </span>
                    </div>
                    <motion.div className="flex gap-6 mt-8 fade-in">
                        <motion.button className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
                            View Projects
                        </motion.button>
                        <motion.button className="px-6 py-3 border-2 border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all hover:-translate-y-1">
                            Contact Me
                        </motion.button>
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
                        <motion.div className="grid grid-cols-5 gap-8">
                            <TechIcon icon={<FaHtml5 />} name="HTML5" color="text-[#E34F26]" />
                            <TechIcon icon={<FaCss3Alt />} name="CSS3" color="text-[#1572B6]" />
                            <TechIcon icon={<IoLogoJavascript />} name="JavaScript" color="text-[#F7DF1E]" />
                            <TechIcon icon={<SiTypescript />} name="TypeScript" color="text-[#3178C6]" />
                            <TechIcon icon={<FaReact />} name="React" color="text-[#61DAFB]" />
                            <TechIcon icon={<RiNextjsFill />} name="Next.js" color="text-white" />
                            <TechIcon icon={<SiTailwindcss />} name="Tailwind" color="text-[#06B6D4]" />
                            <TechIcon icon={<RiFlutterFill />} name="Flutter" color="text-[#02569B]" />
                            <TechIcon icon={<SiMysql />} name="MySQL" color="text-[#4479A1]" />
                            <TechIcon icon={<FaPhp />} name="PHP" color="text-[#777BB4]" />
                            <TechIcon icon={<TbApi />} name="API" color="text-accent" />
                            <TechIcon icon={<FaShopify />} name="Shopify" color="text-[#7AB55C]" />
                            <TechIcon icon={<FaGithub />} name="GitHub" color="text-white" />
                            <TechIcon icon={<FaCode />} name="Clean Code" color="text-secondary-light" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

interface TechIconProps {
    icon: React.ReactNode;
    name: string;
    color: string;
}

const TechIcon = ({ icon, name, color }: TechIconProps) => (
    <motion.div className="flex flex-col items-center justify-center gap-2">
        <div className={`text-3xl ${color} hover:scale-110 transition-all duration-300`}>{icon}</div>
        <span className="text-xs text-white/70">{name}</span>
    </motion.div>
);
