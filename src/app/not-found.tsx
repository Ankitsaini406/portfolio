"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Grid, Home, Mail } from "lucide-react";

export default function NotFound() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);

        const redirect = setTimeout(() => {
            router.push("/");
        }, 10000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [router]);

    return (
        <main className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden p-6">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('/svg/noise.svg')] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-foreground/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Typographic 404 */}
                    <div className="md:col-span-5 flex flex-col items-start md:items-end">
                        <h1 className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-foreground opacity-10">
                            404
                        </h1>
                        <div className="h-0.5 w-24 bg-foreground mt-4" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
                                LOST IN <br />
                                <span className="text-secondary italic font-light">SPACE.</span>
                            </h2>
                            <p className="text-lg text-secondary max-w-md leading-relaxed">
                                The architecture you are looking for does not exist or has been moved to a new coordinate.
                            </p>
                        </div>

                        {/* Navigation Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/" className="group flex items-center justify-between p-5 rounded-2xl bg-secondary/5 border border-border hover:border-foreground/30 transition-all">
                                <div className="flex items-center gap-3">
                                    <Home className="text-foreground" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-foreground">Return Home</span>
                                </div>
                                <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all text-foreground" />
                            </Link>

                            <Link href="/projects" className="group flex items-center justify-between p-5 rounded-2xl bg-secondary/5 border border-border hover:border-foreground/30 transition-all">
                                <div className="flex items-center gap-3">
                                    <Grid className="text-foreground" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-foreground">Projects</span>
                                </div>
                                <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all text-foreground" />
                            </Link>
                        </div>

                        {/* Redirect Bar */}
                        <div className="space-y-3 pt-8">
                            <div className="flex justify-between items-end text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">
                                <span>Auto-Redirecting</span>
                                <span>00:0{timeLeft}</span>
                            </div>
                            <div className="w-full h-px bg-border overflow-hidden">
                                <div
                                    className="h-full bg-foreground transition-all duration-1000 ease-linear"
                                    style={{ width: `${(timeLeft / 10) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div>
                            <Link href="mailto:as.ankitsaini406@gmail.com" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-foreground transition-colors">
                                <Mail className="w-4 h-4" /> Report Broken Link
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}