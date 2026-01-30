"use client";

import React, { useRef, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Reveal content on scroll
            gsap.from(".footer-reveal", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                }
            });

            // 2. Infinite Marquee Background
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "none",
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative w-full border-t border-secondary/10 bg-background overflow-hidden pt-24 pb-12"
        >
            {/* --- Background Elements --- */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-40">
                {/* Animated Marquee Text */}
                <div ref={marqueeRef} className="absolute bottom-10 whitespace-nowrap flex">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-[12vw] font-black uppercase tracking-tighter text-secondary/5 px-10">
                            Get In Touch — Let&apos;s Work —
                        </span>
                    ))}
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--color-primary-bg)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-end">

                    {/* Left Side: Call to Action */}
                    <div className="footer-reveal space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.9]">
                                Have an idea? <br />
                                <span className="text-secondary/40 italic font-light">Let&apos;s talk.</span>
                            </h2>
                            <p className="text-secondary text-lg max-w-sm leading-relaxed">
                                I am currently open to freelance design and full-stack development opportunities.
                            </p>
                        </div>

                        {/* Large Contact Pill */}
                        <Link
                            href="mailto:as.ankitsaini406@gmail.com"
                            className="inline-flex items-center gap-4 group transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                <FiArrowUpRight />
                            </div>
                            <div>
                                <span className="block text-xs font-black uppercase tracking-[0.2em] text-secondary/60">Email Me</span>
                                <span className="text-2xl md:text-3xl font-semibold border-b-2 border-transparent group-hover:border-accent transition-all">
                                    as.ankitsaini406@gmail.com
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side: Socials & Location */}
                    <div className="footer-reveal flex flex-col items-start lg:items-end gap-10">
                        <div className="flex gap-4">
                            <SocialButton
                                href="https://www.linkedin.com/in/web-ankit-saini/"
                                icon={<FaLinkedinIn />}
                                label="LinkedIn"
                            />
                            <SocialButton
                                href="https://github.com/Ankitsaini406"
                                icon={<FaGithub />}
                                label="GitHub"
                            />
                            <SocialButton
                                href="mailto:as.ankitsaini406@gmail.com"
                                icon={<SiGmail />}
                                label="Gmail"
                            />
                        </div>

                        <div className="text-left lg:text-right space-y-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-secondary/40">Local Time</p>
                            <p className="text-foreground font-mono">
                                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} IST
                            </p>
                            <p className="text-sm text-secondary font-medium">India — Remote</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Credits Line */}
                <div className="footer-reveal mt-32 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">
                        <p>© {new Date().getFullYear()} Ankit Saini</p>
                        <span className="w-1 h-1 bg-secondary/20 rounded-full" />
                        <p>Built with Passion</p>
                    </div>

                    <div className="flex gap-8 items-center">
                        {["Projects", "Timeline", "About"].map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- High-Performance Social Button ---

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const x = (clientX - (rect.left + rect.width / 2)) * 0.5;
            const y = (clientY - (rect.top + rect.height / 2)) * 0.5;
            gsap.to(buttonRef.current, { x, y, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    return (
        <Link
            ref={buttonRef}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-14 h-14 rounded-full bg-primary-bg border border-secondary/10 flex items-center justify-center text-xl text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors duration-300 shadow-sm"
            aria-label={label}
        >
            <span className="relative z-10 transition-transform group-hover:scale-110">
                {icon}
            </span>
        </Link>
    );
}