"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FiArrowUpRight, FiClock, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [time, setTime] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        // 1. Dynamic Clock logic
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);

        const ctx = gsap.context(() => {
            // 2. Entrance Animation
            gsap.from(".footer-reveal", {
                y: 100,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });

            // 3. Optimized Marquee
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "none",
            });
        }, footerRef);

        return () => {
            ctx.revert();
            clearInterval(interval);
        };
    }, [pathname]);

    return (
        <footer
            ref={footerRef}
            className="relative w-full bg-(--color-background) pt-24 pb-8 overflow-hidden border-t border-white/5"
        >
            {/* Background Marquee - Using Clamp for Fluid Typography */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] flex items-end pb-20">
                <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-[clamp(8rem,15vw,20rem)] font-black uppercase tracking-tighter px-10">
                            ANKIT SAINI — LET&apos;S CONNECT —
                        </span>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0">

                    {/* Brand & CTA Area */}
                    <div className="footer-reveal max-w-2xl space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground">
                                READY TO <br />
                                <span className="text-foreground/20">EVOLVE?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md">
                                Currently accepting high-impact projects and engineering collaborations.
                            </p>
                        </div>

                        {/* Interactive Email Pill */}
                        <Link
                            href="mailto:as.ankitsaini406@gmail.com"
                            className="group relative inline-flex flex-col md:flex-row items-start md:items-center gap-6 p-1"
                        >
                            <div className="w-20 h-20 rounded-full border bg-foreground text-background flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-background group-hover:text-foreground group-hover:border-foreground transition-all duration-500">
                                <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Start a conversation</p>
                                <p className="text-2xl md:text-4xl font-medium tracking-tight border-b border-white/10 group-hover:border-primary transition-colors">
                                    as.ankitsaini406@gmail.com
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Meta Data Area (Right Side) */}
                    <div className="footer-reveal flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto">
                        {/* Social Stack */}
                        <div className="flex flex-wrap gap-4">
                            <SocialButton label="GitHub profile" href="https://github.com/Ankitsaini406" icon={<FaGithub />} />
                            <SocialButton label="Linkedin profile" href="https://www.linkedin.com/in/web-ankit-saini/" icon={<FaLinkedinIn />} />
                            <SocialButton label="Gmail profile" href="mailto:as.ankitsaini406@gmail.com" icon={<IoMail />} />
                        </div>

                        {/* Local Metadata */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 text-left lg:text-right">
                            <div className="space-y-2">
                                <div className="flex items-center lg:justify-end gap-2 text-foreground">
                                    <FiClock className="animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Local Time</span>
                                </div>
                                <p className="text-2xl font-mono text-foreground">{time}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center lg:justify-end gap-2 text-foreground">
                                    <FiMapPin />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
                                </div>
                                <p className="text-lg text-muted-foreground">India — Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Utility Bar --- */}
                <div className="footer-reveal mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
                        <p suppressHydrationWarning>
                            © {new Date().getFullYear()} ALL RIGHTS RESERVED
                        </p>
                        <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                        <p>DEVELOPED BY ANKIT</p>
                    </div>

                    {/* <div className="flex items-center gap-10">
                        {["GitHub", "LinkedIn", "Resume"].map((item) => (
                            <Link 
                                key={item} 
                                href="#" 
                                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground/50 transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

// --- High-Performance Magnetic Social Button ---

function SocialButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(element, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleLeave = () => {
            gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
        };

        element.addEventListener("mousemove", handleMove);
        element.addEventListener("mouseleave", handleLeave);
        return () => {
            element.removeEventListener("mousemove", handleMove);
            element.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <Link
            ref={ref}
            aria-label={label}
            href={href}
            className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center text-xl text-foreground hover:border-primary/50 transition-colors bg-white/2 backdrop-blur-md"
        >
            {icon}
        </Link>
    );
}