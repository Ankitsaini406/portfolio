"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { FiArrowLeft, FiHome, FiGrid, FiMail } from "react-icons/fi";

export default function NotFound() {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        // 1. Redirect logic with countdown
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);

        const redirect = setTimeout(() => {
            router.push("/");
        }, 10000);

        // 2. Glitch & Entrance Animation
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "expo.out",
            });

            // Subtle glitch loop
            const glitch = () => {
                gsap.to(".glitch-text", {
                    skewX: () => Math.random() * 10 - 5,
                    x: () => Math.random() * 6 - 3,
                    duration: 0.1,
                    onComplete: () => {
                        gsap.set(".glitch-text", { skewX: 0, x: 0 });
                    },
                    delay: Math.random() * 3 + 2,
                });
                setTimeout(glitch, 4000);
            };
            glitch();
        }, containerRef);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
            ctx.revert();
        };
    }, [router]);

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen bg-(--color-background) flex items-center justify-center overflow-hidden p-6"
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('/svg/noise.svg')] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Typographic 404 */}
                    <div className="md:col-span-5 flex flex-col items-start md:items-end">
                        <h1 className="glitch-text text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-foreground opacity-10">
                            404
                        </h1>
                        <div className="h-0.5 w-24 bg-primary mt-4 reveal" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <h2 className="reveal text-4xl md:text-6xl font-black tracking-tight text-foreground">
                                LOST IN <br />
                                <span className="text-primary italic font-light">SPACE.</span>
                            </h2>
                            <p className="reveal text-lg text-secondary max-w-md leading-relaxed">
                                The architecture you are looking for does not exist or has been moved to a new coordinate.
                            </p>
                        </div>

                        {/* Navigation Grid */}
                        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/" className="group flex items-center justify-between p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-primary/40 transition-all">
                                <div className="flex items-center gap-3">
                                    <FiHome className="text-primary" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Return Home</span>
                                </div>
                                <FiArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                            </Link>

                            <Link href="/#projects" className="group flex items-center justify-between p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-primary/40 transition-all">
                                <div className="flex items-center gap-3">
                                    <FiGrid className="text-primary" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Projects</span>
                                </div>
                                <FiArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                            </Link>
                        </div>

                        {/* Redirect Bar */}
                        <div className="reveal space-y-3 pt-8">
                            <div className="flex justify-between items-end text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60">
                                <span>Auto-Redirecting</span>
                                <span>00:0{timeLeft}</span>
                            </div>
                            <div className="w-full h-px bg-white/10 overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-1000 ease-linear"
                                    style={{ width: `${(timeLeft / 10) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="reveal">
                            <Link href="mailto:as.ankitsaini406@gmail.com" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-foreground transition-colors">
                                <FiMail /> Report Broken Link
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}