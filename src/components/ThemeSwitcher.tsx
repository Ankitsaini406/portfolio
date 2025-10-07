"use client";

import { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import gsap from "gsap";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const btnRef = useRef<HTMLButtonElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (storedTheme) setTheme(storedTheme);
        document.documentElement.classList.add(storedTheme || "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);

        if (btnRef.current && colorRef.current) {
            // Timeline for rotation, scale, and gradient slide
            const tl = gsap.timeline();
            tl.to(btnRef.current, {
                rotation: 360,
                scale: 1.3,
                duration: 0.5,
                ease: "power2.out",
            })
                .to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.inOut" })
                .fromTo(
                    colorRef.current,
                    { xPercent: -100 },
                    { xPercent: 0, duration: 0.7, ease: "power2.out" },
                    "<" // start at same time as scale down
                );
        }
    };

    return (
        <button
            ref={btnRef}
            onClick={toggleTheme}
            className="cursor-pointer flex items-center justify-center transition-transform duration-300"
            aria-label="Toggle Theme"
        >

            {/* Icon */}
            <div className="relative z-10 text-2xl">
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </div>
        </button>
    );
}
