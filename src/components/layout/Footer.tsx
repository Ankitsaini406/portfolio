"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Check, Clock, Copy, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

export default function Footer() {
    const [time, setTime] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("as.ankitsaini406@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
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
        return () => clearInterval(interval);
    }, []);

    return (
        <footer
            className="relative w-full bg-background pt-24 pb-8 overflow-hidden border-t border-border"
        >
            {/* Background Marquee using CSS */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] flex items-end pb-20 overflow-hidden">
                <div className="marquee-track flex whitespace-nowrap will-change-transform">
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
                    <div className="max-w-2xl space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground">
                                READY TO <br />
                                <span className="text-foreground/20">EVOLVE?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-secondary font-light max-w-md">
                                Currently accepting high-impact projects, engineering collaborations, and senior full-stack roles.
                            </p>
                        </div>

                        {/* Interactive Email Pill & Quick Copy */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="mailto:as.ankitsaini406@gmail.com"
                                className="group relative inline-flex flex-col md:flex-row items-start md:items-center gap-5 p-1"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border bg-foreground text-background flex items-center justify-center text-2xl md:text-3xl group-hover:scale-105 group-hover:bg-background group-hover:text-foreground group-hover:border-foreground transition-all duration-300">
                                    <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Start a conversation</p>
                                    <p className="text-xl md:text-3xl font-medium tracking-tight border-b border-border group-hover:border-foreground transition-colors text-foreground">
                                        as.ankitsaini406@gmail.com
                                    </p>
                                </div>
                            </Link>

                            <button
                                onClick={handleCopyEmail}
                                aria-label="Copy email address"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/5 hover:bg-secondary/10 transition-colors text-xs font-mono text-secondary hover:text-foreground cursor-pointer"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-green-500" />
                                        <span className="text-green-500">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy Email</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Meta Data Area (Right Side) */}
                    <div className="flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto">
                        {/* Social Stack */}
                        <div className="flex flex-wrap gap-4">
                            <SocialButton label="GitHub profile" href="https://github.com/Ankitsaini406" icon={<Github />} />
                            <SocialButton label="Linkedin profile" href="https://www.linkedin.com/in/web-ankit-saini/" icon={<Linkedin />} />
                            <SocialButton label="Gmail profile" href="mailto:as.ankitsaini406@gmail.com" icon={<Mail />} />
                        </div>

                        {/* Local Metadata */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 text-left lg:text-right">
                            <div className="space-y-2">
                                <div className="flex items-center lg:justify-end gap-2 text-foreground">
                                    <Clock className="animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Local Time</span>
                                </div>
                                <p className="text-2xl font-mono text-foreground">{time}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center lg:justify-end gap-2 text-foreground">
                                    <MapPin />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
                                </div>
                                <p className="text-lg text-secondary">India — Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Utility Bar --- */}
                <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                        <p suppressHydrationWarning>
                            © {new Date().getFullYear()} ALL RIGHTS RESERVED
                        </p>
                        <span className="hidden md:block w-1 h-1 bg-border rounded-full" />
                        <p>DEVELOPED BY ANKIT</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[11px] font-mono uppercase tracking-widest text-secondary">
                        <Link href="/contact" className="hover:text-foreground transition-colors">
                            Contact
                        </Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="https://github.com/Ankitsaini406" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/web-ankit-saini/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold hover:underline transition-all">
                            Resume ↗
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
    return (
        <Link
            aria-label={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center text-xl text-foreground hover:border-foreground/40 hover:scale-105 transition-all duration-300 bg-secondary/5 backdrop-blur-md"
        >
            {icon}
        </Link>
    );
}