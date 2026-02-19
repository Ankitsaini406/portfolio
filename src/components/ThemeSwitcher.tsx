"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    // Initial state set to null to avoid hydration mismatch
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    // 1. Initialize Theme (System Preference + LocalStorage)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    // 2. Handle Animation on Change
    useEffect(() => {
        if (!thumbRef.current || theme === null) return;

        gsap.to(thumbRef.current, {
            x: theme === "dark" ? 32 : 0, // Slide the thumb
            backgroundColor: theme === "dark" ? "var(--color-primary)" : "var(--color-foreground)",
            duration: 0.5,
            ease: "expo.out",
        });

        // Sublte rotation for the icons
        gsap.fromTo(".theme-icon", 
            { rotate: -90, opacity: 0, scale: 0.5 },
            { rotate: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
        );

    }, [theme]);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    if (theme === null) return <div className="w-16 h-8" />; // Placeholder to prevent layout shift

    return (
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 select-none">
                {theme}
            </span>
            
            <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="group relative flex items-center w-16 h-8 rounded-full bg-white/5 border border-white/10 p-1 transition-colors hover:border-primary/50 cursor-pointer"
            >
                {/* Visual Thumb/Slider */}
                <div
                    ref={thumbRef}
                    className="absolute z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-lg pointer-events-none"
                >
                    <div className={`theme-icon ${theme === "dark" ? 'text-foreground' : 'text-background bg-foreground' } `}>
                        {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
                    </div>
                </div>

                {/* Background Icons (Stationary) */}
                <div className="flex justify-between w-full px-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Moon size={12} />
                    <Sun size={12} />
                </div>
            </button>
        </div>
    );
}