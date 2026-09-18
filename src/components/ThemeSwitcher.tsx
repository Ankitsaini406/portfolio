"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    if (theme === null) return <div className="w-16 h-8" />;

    return (
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 select-none">
                {theme}
            </span>
            
            <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="group relative flex items-center w-16 h-8 rounded-full bg-secondary/10 border border-border p-1 transition-colors hover:border-foreground/40 cursor-pointer"
            >
                {/* Visual Thumb */}
                <div
                    className={`absolute z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md pointer-events-none transition-all duration-300 ${
                        theme === "dark" ? "translate-x-8 bg-primary text-foreground" : "translate-x-0 bg-foreground text-background"
                    }`}
                >
                    {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
                </div>

                {/* Background Icons */}
                <div className="flex justify-between w-full px-1.5 text-secondary opacity-50 group-hover:opacity-80 transition-opacity">
                    <Moon size={12} />
                    <Sun size={12} />
                </div>
            </button>
        </div>
    );
}