"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(callback: () => void) {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "class"],
    });
    window.addEventListener("storage", callback);
    return () => {
        observer.disconnect();
        window.removeEventListener("storage", callback);
    };
}

function getSnapshot(): "light" | "dark" {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
    return "dark";
}

export default function ThemeSwitcher() {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

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