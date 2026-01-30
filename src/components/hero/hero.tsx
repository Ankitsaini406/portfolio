"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
    FaHtml5, FaCss3Alt, FaReact, FaShopify, FaPhp, FaGithub,
    FaArrowRight, FaLinkedinIn, FaDocker, FaAws
} from "react-icons/fa";
import { IoLogoJavascript, IoMail } from "react-icons/io5";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript, SiTailwindcss, SiPostgresql, SiRedis, SiGraphql } from "react-icons/si";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Staggered Text Reveal
            tl.fromTo(".hero-text",
                { y: 50, opacity: 0, rotateX: 10 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.1 }
            );

            // 2. Line Separator Expansion
            tl.fromTo(".hero-line",
                { scaleX: 0, transformOrigin: "left" },
                { scaleX: 1, duration: 1.5, ease: "expo.out" },
                "-=0.5"
            );

            // 3. Stats Fade In
            tl.fromTo(".hero-stat",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                "-=1"
            );

            // 4. Abstract Code Window Entrance
            tl.fromTo(".code-window",
                { y: 40, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" },
                "-=1"
            );

            // Infinite Marquee Animation
            const marqueeContent = marqueeRef.current?.querySelector(".marquee-content");
            if (marqueeContent) {
                gsap.to(marqueeContent, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 30,
                    ease: "linear",
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-(--color-background) pt-24 pb-12"
            id="home"
        >
            {/* --- Background Grid (Subtle & Professional) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">

                {/* --- Left Column: Authority & Narrative --- */}
                <div className="flex flex-col items-start">

                    {/* Availability Badge */}
                    <div className="hero-text mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-color-secondary">
                            Available for Hire
                        </span>
                    </div>

                    <h1 className="hero-text text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9] mb-6">
                        ANKIT SAINI
                    </h1>

                    <h2 className="hero-text text-2xl sm:text-3xl font-light text-secondary mb-8">
                        Senior Full-Stack Engineer <br /> & System Architect.
                    </h2>

                    <div className="hero-line w-full h-px bg-secondary/20 mb-8"></div>

                    <p className="hero-text text-lg text-secondary max-w-xl leading-relaxed mb-10">
                        Translating complex business requirements into scalable, high-performance web and mobile solutions. Focused on clean architecture, type safety, and user-centric interaction design.
                    </p>

                    <div className="hero-text flex flex-wrap gap-5">
                        <Link
                            href="/projects"
                            className="group relative px-8 py-4 bg-foreground text-(--color-background) rounded-full overflow-hidden transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative font-semibold flex items-center gap-2">
                                View Selected Works <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <div className="flex gap-3">
                            <SocialButton href="https://github.com/Ankitsaini406" icon={<FaGithub />} />
                            <SocialButton href="https://www.linkedin.com/in/web-ankit-saini/" icon={<FaLinkedinIn />} />
                            <SocialButton href="mailto:as.ankitsaini406@gmail.com" icon={<IoMail />} />
                        </div>
                    </div>

                    {/* Senior Level Stats */}
                    <div className="hero-text mt-12 grid grid-cols-3 gap-8 border-l-2 border-secondary/20 pl-6">
                        <div className="hero-stat">
                            <p className="text-3xl font-bold text-foreground">3.5+</p>
                            <p className="text-xs uppercase tracking-wider text-secondary">Years Exp.</p>
                        </div>
                        <div className="hero-stat">
                            <p className="text-3xl font-bold text-foreground">7+</p>
                            <p className="text-xs uppercase tracking-wider text-secondary">Projects</p>
                        </div>
                        <div className="hero-stat">
                            <p className="text-3xl font-bold text-foreground">100%</p>
                            <p className="text-xs uppercase tracking-wider text-secondary">Delivery</p>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Abstract Code Visual --- */}
                <div className="relative w-full h-full flex items-center justify-center lg:justify-end perspective-[1000px]">
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-foreground/5 blur-[80px] rounded-full pointer-events-none" />

                    {/* Code Window */}
                    <div className="code-window relative w-full max-w-md bg-(--color-background)/80 backdrop-blur-xl border border-(--grid-color) rounded-xl shadow-2xl overflow-hidden group hover:rotate-1 transition-transform duration-500">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-(--grid-color) bg-secondary/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <div className="ml-auto text-[10px] font-mono text-secondary">Ankit.tsx</div>
                        </div>

                        {/* Code Body */}
                        <div className="p-6 font-mono text-sm leading-loose text-secondary">
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">1</span>
                                <span className="text-purple-500">const</span> <span className="text-blue-500 pl-2">Developer</span> = <span className="text-foreground">{`{`}</span>
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">2</span>
                                <span className="pl-4">name:</span> <span className="text-green-600 pl-2">&apos;Ankit Saini&apos;</span>,
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">3</span>
                                <span className="pl-4">skills:</span> <span className="text-foreground pl-2">[</span>
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">4</span>
                                <span className="pl-8 text-orange-500">&apos;Architecture&apos;</span>, <span className="text-orange-500">&apos;Next.js&apos;</span>, <span className="text-orange-500">&apos;Flutter&apos;</span>
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">5</span>
                                <span className="pl-4 text-foreground">]</span>,
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">6</span>
                                <span className="pl-4">hardWorker:</span> <span className="text-blue-500 pl-2">true</span>,
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">7</span>
                                <span className="pl-4">problemSolver:</span> <span className="text-blue-500 pl-2">true</span>
                            </div>
                            <div className="flex">
                                <span className="w-6 text-secondary/30 select-none">8</span>
                                <span className="text-foreground">{`}`};</span>
                            </div>

                            {/* Blinking Cursor */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-green-500">{`>`}</span>
                                <span className="w-2.5 h-5 bg-secondary animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Infinite Tech Marquee --- */}
            <div className="mt-auto w-full border-t border-secondary/10 bg-(--color-background)/50 backdrop-blur-sm pt-8 pb-4 overflow-hidden">
                <div ref={marqueeRef} className="relative flex w-full overflow-hidden">
                    <div className="marquee-content flex gap-16 min-w-full px-8">
                        {/* Doubled list for seamless loop */}
                        {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                            <div key={index} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
                                <span className="text-2xl" style={{ color: tech.color }}>{tech.icon}</span>
                                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Components & Data ---

const SocialButton = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <Link
        href={href}
        target="_blank"
        className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-foreground hover:text-(--color-background) hover:border-transparent transition-all duration-300"
    >
        {icon}
    </Link>
);

const TECH_STACK = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <RiNextjsFill />, color: "#000000" }, // Black in light, White in dark via CSS class ideally, but hex is fixed
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Flutter", icon: <RiFlutterFill />, color: "#02569B" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
];