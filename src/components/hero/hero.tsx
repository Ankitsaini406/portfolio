"use client";

import { useExperienceYears } from "@/hooks/useExperienceYears";
import { TECH_STACK } from "@/lib/data/tech-stack";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    // const experienceYears = useExperienceYears("2022-07-01");

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" }
            });

            // 1. Staggered Text (DO NOT hide LCP text)
            tl.from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 0.9,
                stagger: 0.08,
                clearProps: "transform"
            });

            // 2. Line Animation (transform only)
            tl.from(".hero-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.2,
                ease: "expo.out"
            }, "-=0.4");

            // 3. Stats
            tl.from(".hero-stat", {
                y: 20,
                opacity: 0,
                duration: 0.7,
                stagger: 0.08
            }, "-=0.8");

            // 4. Code Window (GPU safe)
            tl.from(".code-window", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-dvh flex flex-col justify-center overflow-x-hidden bg-(--color-background) pt-32 pb-12 lg:pt-20"
            id="home"
        >
            {/* --- Background Noise & Grid --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/svg/noise.svg')] mix-blend-overlay" />
                <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                {/* --- Left Column: Authority & Narrative --- */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                    {/* Availability Badge */}
                    <div className="hero-text mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-secondary/5 backdrop-blur-sm shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted">
                            Available for Hire
                        </span>
                    </div>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.95] mb-4 md:mb-6">
                        ANKIT SAINI
                    </h1>

                    <h2 className="hero-text text-xl md:text-3xl font-light text-secondary mb-8">
                        Senior Full-Stack Engineer <br className="hidden md:block" /> & System Architect.
                    </h2>

                    <div className="hero-line w-24 lg:w-full h-px bg-secondary/20 mb-8"></div>

                    <p className="hero-text text-base md:text-lg text-secondary max-w-md lg:max-w-xl leading-relaxed mb-10">
                        Translating complex business requirements into scalable, high-performance web and mobile solutions. Focused on clean architecture, type safety, and user-centric interaction design.
                    </p>

                    <div className="hero-text flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto group relative px-8 py-4 bg-foreground text-(--color-background) rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative font-semibold flex items-center justify-center gap-2">
                                View Selected Works <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <div className="flex gap-3 mt-4 sm:mt-0">
                            <SocialButton label="GitHub profile" href="https://github.com/Ankitsaini406" icon={<Github />} />
                            <SocialButton label="Linkedin profile" href="https://www.linkedin.com/in/web-ankit-saini/" icon={<Linkedin />} />
                            <SocialButton label="Gmail profile" href="mailto:as.ankitsaini406@gmail.com" icon={<Mail />} />
                        </div>
                    </div>

                    {/* Senior Level Stats */}
                    <div className="hero-text mt-12 w-full grid grid-cols-3 gap-4 md:gap-8 border-t lg:border-t-0 lg:border-l border-border/20 pt-8 lg:pt-0 lg:pl-6">
                        <div className="hero-stat flex flex-col items-center lg:items-start">
                            <p className="text-2xl md:text-3xl font-bold text-foreground">{3.5}+</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Years Exp.</p>
                        </div>
                        <div className="hero-stat flex flex-col items-center lg:items-start">
                            <p className="text-2xl md:text-3xl font-bold text-foreground">7+</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Projects</p>
                        </div>
                        <div className="hero-stat flex flex-col items-center lg:items-start">
                            <p className="text-2xl md:text-3xl font-bold text-foreground">100%</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Delivery</p>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Abstract Code Visual --- */}
                <div className="relative w-full h-full flex items-center justify-center lg:justify-end perspective-[1000px] mt-8 lg:mt-0">
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-100 aspect-square bg-foreground/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

                    {/* Code Window */}
                    <div className="code-window relative w-full max-w-85 md:max-w-md bg-(--color-background)/80 backdrop-blur-xl border border-(--grid-color) rounded-xl shadow-2xl overflow-hidden group hover:rotate-1 transition-transform duration-500">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-(--grid-color) bg-secondary/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <div className="ml-auto text-[10px] font-mono text-secondary">Ankit.tsx</div>
                        </div>

                        {/* Code Body */}
                        <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-loose text-secondary overflow-x-auto">
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">1</span>
                                <span className="text-purple-500">const</span> <span className="text-blue-500 pl-2">Developer</span> = <span className="text-foreground">{`{`}</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">2</span>
                                <span className="pl-4">name:</span> <span className="text-green-600 pl-2">&apos;Ankit Saini&apos;</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">3</span>
                                <span className="pl-4">skills:</span> <span className="text-foreground pl-2">[</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">4</span>
                                <span className="pl-8 text-orange-500">&apos;Next.js&apos;</span>, <span className="text-orange-500">&apos;Flutter&apos;</span>, <span className="text-orange-500">&apos;Database&apos;</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">5</span>
                                <span className="pl-4 text-foreground">]</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">6</span>
                                <span className="pl-4">hardWorker:</span> <span className="text-blue-500 pl-2">true</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">7</span>
                                <span className="pl-4">problemSolver:</span> <span className="text-blue-500 pl-2">true</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">8</span>
                                <span className="text-foreground">{`}`};</span>
                            </div>

                            {/* Blinking Cursor */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-green-500">{`>`}</span>
                                <span className="w-2.5 h-4 md:h-5 bg-secondary animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Infinite Tech Marquee --- */}
            <div className="mt-auto w-full border-t border-border bg-background/50 backdrop-blur-sm pt-8 pb-4 overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div className="marquee-track flex gap-8 md:gap-16 px-4 md:px-8">
                        {[...TECH_STACK, ...TECH_STACK].map(({ name, icon }, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 md:gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default shrink-0"
                            >
                                <Image
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <span className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

// --- Components & Data ---

const SocialButton = ({ href, label, icon }: { href: string, label: string, icon: React.ReactNode }) => (
    <Link
        href={href}
        aria-label={label}
        target="_blank"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border bg-background border-border flex items-center justify-center text-secondary hover:bg-foreground hover:text-(--color-background) hover:border-transparent transition-all duration-300 text-lg md:text-xl"
    >
        {icon}
    </Link>
);