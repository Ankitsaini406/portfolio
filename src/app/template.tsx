"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { getRouteDirection } from "@/lib/route-direction";

const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const direction = getRouteDirection(pathname);
        const yFrom = direction === "forward" ? 40 : -40;

        const ctx = gsap.context(() => {
            gsap.set(contentRef.current, {
                opacity: 0,
                y: reduced ? 0 : yFrom,
                scale: reduced ? 1 : 0.97,
                filter: reduced ? "none" : "blur(12px)",
            });

            gsap.set(overlayRef.current, {
                scaleY: 1,
                transformOrigin: direction === "forward" ? "bottom" : "top",
            });

            gsap.set(glowRef.current, { opacity: 0 });

            const tl = gsap.timeline({
                defaults: { ease: "power4.out" },
            });

            tl.to(overlayRef.current, {
                scaleY: 0,
                duration: reduced ? 0.4 : 1,
            })
                .to(
                    glowRef.current,
                    {
                        opacity: 0.3,
                        duration: 0.6,
                    },
                    "-=0.6"
                )
                .to(
                    contentRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: reduced ? 0.4 : 0.9,
                    },
                    "-=0.4"
                )
                .to(glowRef.current, {
                    opacity: 0,
                    duration: 0.8,
                });
        }, rootRef);

        return () => ctx.revert();
    }, [pathname]);

    return (
        <div
            ref={rootRef}
            className="relative min-h-screen overflow-hidden bg-background"
        >
            {/* Route Transition Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-50 pointer-events-none
                   bg-(--transition-overlay) origin-top"
            />

            {/* Ambient Glow */}
            <div
                ref={glowRef}
                className="fixed inset-0 z-40 pointer-events-none
                   bg-radial-[circle_at_center]
                   from-(--transition-glow)
                   via-transparent
                   to-transparent"
            />

            {/* Stream-safe Content */}
            <main
                ref={contentRef}
                className="relative z-10 will-change-transform"
            >
                {children}
            </main>

            {/* Subtle Grain */}
            <div
                className="fixed inset-0 z-0 pointer-events-none
                   opacity-[0.035]
                   bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
                   mix-blend-overlay"
            />
        </div>
    );
};

export default Template;