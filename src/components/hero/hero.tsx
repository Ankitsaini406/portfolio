"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaShopify, FaPhp, FaGithub, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Hero() {
    const lineRef = useRef<HTMLSpanElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            lineRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .fromTo(
                line1Ref.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
            .fromTo(
                line2Ref.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                subtitleRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.3"
            );
    }, []);

    useEffect(() => {
        // Add a custom cursor effect
        const cursor = document.createElement("div");
        cursor.className = "fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50";
        document.body.appendChild(cursor);

        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, { x: e.clientX - 8, y: e.clientY - 8, duration: 0.2 });
        });
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden backdrop-blur-[3px] z-10" id="home">
            {/* Main Content */}
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <h2 className="text-xl md:text-2xl font-medium text-secondary">
                        <span ref={lineRef} className="block">Hello, I&apos;m a</span>
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground overflow-hidden">
                        <span ref={line1Ref} className="block">Full-Stack</span>
                        <span ref={line2Ref} className="block mt-2">Developer</span>
                    </h1>
                    <p ref={subtitleRef} className="text-2xl md:text-3xl font-light">
                        <span className="text-accent">{"<"}</span>
                        <span className="text-foreground font-medium">
                            Crafting Digital Experiences
                        </span>
                        <span className="text-accent">{"/>"}</span>
                    </p>
                </div>

                {/* Tech Stack Card */}
                <div className="relative border border-accent rounded-2xl">
                    <div
                        className="glass-card rounded-2xl p-8 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            Tech Stack
                        </h3>
                        <div className="grid grid-cols-5 gap-6">
                            <TechIcon icon={<FaHtml5 />} name="HTML5" color="text-[#E34F26]" />
                            <TechIcon icon={<FaCss3Alt />} name="CSS3" color="text-[#1572B6]" />
                            <TechIcon icon={<IoLogoJavascript />} name="JavaScript" color="text-[#F7DF1E]" />
                            <TechIcon icon={<SiTypescript />} name="TypeScript" color="text-[#3178C6]" />
                            <TechIcon icon={<FaReact />} name="React" color="text-[#61DAFB]" />
                            <TechIcon icon={<RiNextjsFill />} name="Next.js" color="text-foreground" />
                            <TechIcon icon={<SiTailwindcss />} name="Tailwind" color="text-[#06B6D4]" />
                            <TechIcon icon={<RiFlutterFill />} name="Flutter" color="text-[#02569B]" />
                            <TechIcon icon={<SiMysql />} name="MySQL" color="text-[#4479A1]" />
                            <TechIcon icon={<FaPhp />} name="PHP" color="text-[#777BB4]" />
                            <TechIcon icon={<TbApi />} name="API" color="text-accent" />
                            <TechIcon icon={<FaShopify />} name="Shopify" color="text-[#7AB55C]" />
                            <TechIcon icon={<FaGithub />} name="GitHub" color="text-foreground" />
                            <TechIcon icon={<FaCode />} name="Clean Code" color="text-secondary-light" />
                        </div>
                    </div>
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

const TechIcon = ({ icon, name, color }: TechIconProps) => {
    const iconRef = useRef<HTMLDivElement>(null);

    const handleHover = () => {
        gsap.to(iconRef.current, { scale: 1.2, duration: 0.3 });
    };

    const handleHoverExit = () => {
        gsap.to(iconRef.current, { scale: 1, duration: 0.3 });
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div
                ref={iconRef}
                className={`text-3xl ${color} cursor-pointer`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
            >
                {icon}
            </div>
            <span className="text-xs">{name}</span>
        </div>
    );
};
