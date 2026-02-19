"use client";

import { useRef, useLayoutEffect } from "react";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useExperienceYears } from "@/hooks/useExperienceYears";
import { Cloud, Database, Leaf, Rocket, Server, Smartphone } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const experienceYears = useExperienceYears("2022-07-01");

    // Tech Stack Data
    const techStack = [
        { icon: Rocket, name: "Next.js" },
        { icon: Smartphone, name: "React" },
        { icon: Cloud, name: "AWS" },
        { icon: Leaf, name: "Flutter" },
        { icon: Server, name: "Firebase" },
        { icon: Database, name: "Mongo" }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Staggered Text Reveal
            const textElements = contentRef.current?.querySelectorAll(".reveal-text");
            gsap.fromTo(textElements || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 75%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // 2. Stats Counter Animation
            const stats = gsap.utils.toArray(".stat-counter");
            stats.forEach((stat: any) => {
                const target = parseFloat(stat.getAttribute("data-target"));
                gsap.to(stat, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 0.1 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 85%",
                    }
                });
            });

            // 3. Image Float Animation (Preserving your original float logic)
            gsap.to(imageWrapperRef.current, {
                y: -20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative w-full min-h-screen py-24 px-6 md:px-12 bg-background overflow-hidden flex items-center"
        >
            {/* Ambient Background Noise/Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/svg/noise.svg')] mix-blend-overlay" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">

                {/* --- LEFT COLUMN: Narrative & Stats --- */}
                <div ref={contentRef} className="order-2 lg:order-1 flex flex-col justify-center">

                    {/* Badge */}
                    <div className="reveal-text w-fit mb-6 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-secondary">
                            Full-Stack Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="reveal-text text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-8">
                        Engineering <br />
                        <span className="text-secondary">Scalable Solutions.</span>
                    </h2>

                    {/* Narrative */}
                    <div className="reveal-text space-y-6 text-lg text-secondary leading-relaxed max-w-xl">
                        <p>
                            I don&apos;t just write code; I architect systems. With <strong className="text-foreground">{experienceYears}+ years</strong> of production experience, I bridge the gap between complex backend logic and pixel-perfect frontend design.
                        </p>
                        <p>
                            Specializing in the <strong>React/Next.js</strong> ecosystem and <strong>Flutter</strong> mobile architecture, I build products that are robust, SEO-optimized, and ready to scale.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="reveal-text mt-12 pt-8 border-t border-secondary/20 grid grid-cols-3 gap-6">
                        <div>
                            <span className="block text-3xl font-bold text-foreground">
                                <span className="stat-counter" data-target={experienceYears}>0</span>+
                            </span>
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-foreground">
                                <span className="stat-counter" data-target="7">0</span>+
                            </span>
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Projects</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-foreground">100%</span>
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Commitment</span>
                        </div>
                    </div>

                    {/* Tech Stack Strip */}
                    <div className="reveal-text mt-10 flex flex-wrap gap-4">
                        {techStack.map((tech, i) => (
                            <div key={i} className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-secondary/10 hover:border-foreground/30 transition-colors cursor-default">
                                <tech.icon className="text-foreground group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-medium text-secondary">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT COLUMN: Image (Your Specific Code) --- */}
                <div ref={imageWrapperRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">

                    {/* START: Your Exact Image Code Block */}
                    <div className="relative group">
                        {/* Animated border gradient */}
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-1000 group-hover:duration-300 bg-foreground"></div>

                        {/* Main image container */}
                        <div className="relative w-[320px] h-120 rounded-2xl overflow-hidden shadow-2xl border border-(--grid-color) backdrop-blur-sm bg-background/50">
                            <Image
                                src="/images/myimage.jpg"
                                alt="Ankit Saini"
                                fill
                                className="object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Gradient overlay for better text contrast */}
                            <div className="absolute inset-0 rounded-2xl" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>

                        {/* Decorative elements (Colors updated to vars) */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-foreground/30 rounded-full blur-sm animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full blur-sm animate-pulse delay-1000"></div>

                        {/* Experience badge on image */}
                        <div className="absolute bg-background -bottom-6 -right-6 px-4 py-2 rounded-xl shadow-lg border border-(--grid-color)">
                            <div className="text-center">
                                <div className="font-bold text-2xl text-foreground">{experienceYears}+</div>
                                <div className="text-xs uppercase tracking-wider text-secondary">Years</div>
                            </div>
                        </div>
                    </div>
                    {/* END: Your Exact Image Code Block */}

                </div>
            </div>
        </section>
    );
}

/*

                        <div className="relative w-[320px] h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border backdrop-blur-sm bg-card/50">
                            <Image
                                src="/images/myimage.jpg"
                                alt="Ankit Saini"
                                fill
                                className="object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            <div className="absolute inset-0 rounded-2xl" />

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </div>

*/