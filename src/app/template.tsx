"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Template = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "expo.inOut" }
            });

            // Set initial states
            gsap.set(contentRef.current, {
                opacity: 0,
                y: 30,
                scale: 0.98,
                filter: "blur(10px)"
            });

            tl.to(overlayRef.current, {
                scaleY: 0,
                duration: 1.2,
                transformOrigin: "top",
            })
                .to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    // Slight overlap with the overlay animation for smoothness
                }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* The Transition Curtain 
                Using Tailwind v4 variable syntax for background
            */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-50 bg-(--color-foreground) pointer-events-none"
            />

            {/* Content Wrapper */}
            <div ref={contentRef} className="will-change-transform">
                {children}
            </div>

            {/* Subtle Background Grain 
                This stays static while content moves, adding "Senior" texture
            */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}

export default Template;