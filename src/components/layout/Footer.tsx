"use client";

import React, { useRef, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLAnchorElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const copyrightRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate footer content on enter
            gsap.fromTo(contentRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Floating animation for social icons
            gsap.to(socialRef.current?.children || [],
                {

                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );

            // Pulse animation for heart
            gsap.to(".heart-pulse", {
                scale: 1.2,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

            // Background glow animation
            gsap.to(".bg-glow", {
                opacity: 0.3,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative w-full"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="bg-glow absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Main content */}
            <div
                ref={contentRef}
                className="relative flex flex-col items-center justify-center gap-8 py-16 px-4 z-10 max-w-7xl mx-auto"
            >
                {/* Contact heading */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Let&apos;s Build Something Amazing
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Get in touch to start your next project
                    </p>
                </div>

                {/* Email with modern design */}
                <Link
                    ref={emailRef}
                    href="mailto:as.ankitsaini406@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card border border-border rounded-2xl px-8 py-4
                     hover:border-primary/50 hover:bg-accent/50 transition-all duration-500
                     hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SiGmail className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute -inset-3 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Contact me at</p>
                            <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                                as.ankitsaini406@gmail.com
                            </p>
                        </div>
                        <FaEnvelope className="text-lg group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                </Link>

                {/* Social Icons */}
                <div ref={socialRef} className="flex gap-6 mt-4">
                    <SocialIcon
                        href="https://www.linkedin.com/in/web-ankit-saini/"
                        label="LinkedIn"
                        icon={FaLinkedinIn}
                    />

                    <SocialIcon
                        href="https://github.com/Ankitsaini406"
                        label="GitHub"
                        icon={FaGithub}
                    />
                </div>

                {/* Copyright with modern design */}
                <div
                    ref={copyrightRef}
                    className="text-center space-y-4 mt-8 pt-8 w-full"
                >
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-foreground">
              Ankit Saini
            </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="flex items-center gap-1">
              Crafted with{" "}
                            <FaHeart className="heart-pulse text-red-500 mx-1" />{" "}
                            and passion
            </span>
                    </p>

                    {/* Additional info */}
                    <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
                        Full-Stack Developer specializing in modern web technologies,
                        responsive design, and scalable applications.
                    </p>
                </div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </footer>
    );
}

// Enhanced Social Icon Component
function SocialIcon({
                        href,
                        label,
                        icon: Icon
                    }: {
    href: string;
    label: string;
    icon: React.ElementType;
}) {

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group relative p-4 rounded-2xl backdrop-blur-md 
                 border border-border bg-card/50 hover:bg-accent/50
                 transition-all duration-500 flex items-center justify-center 
                 text-xl text-foreground hover:text-primary
                 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20`}
        >
            <Icon className="relative z-10" />

        </Link>
    );
}