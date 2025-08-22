"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import gsap from "gsap";

const ScrollButton = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                scale: 0.9,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
        }
    };

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    useEffect(() => {
        if (buttonRef.current) {
            if (isVisible) {
                gsap.killTweensOf(buttonRef.current);
                gsap.to(buttonRef.current, {
                    duration: 0.5,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: "back.out(1.7)"
                });

            } else {
                if (animationRef.current) {
                    animationRef.current.kill();
                }
                gsap.to(buttonRef.current, {
                    duration: 0.3,
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                    ease: "power2.in"
                });
            }
        }
    }, [isVisible]);

    return (
        <button
            ref={buttonRef}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-50 cursor-pointer opacity-0 scale-50 translate-y-24 group"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
                transform: "translateY(100px) scale(0.5)",
                opacity: 0
            }}
        >

            {/* Button background */}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-accent transition-all duration-300 hover:bg-accent-dark">
                <FaArrowUp className="text-white text-lg transform group-hover:scale-110 transition-transform duration-300" />
            </div>
        </button>
    );
};

export default ScrollButton;