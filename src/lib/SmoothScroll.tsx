"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        import("lenis").then((LenisModule) => {
            const Lenis = LenisModule.default;

            const lenis = new Lenis({
                lerp: 0.1,
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            });

            lenisRef.current = lenis;

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        }).catch(error => {
            console.error("Failed to load Lenis:", error);
        });
    }, []);

    return <div>{children}</div>;
}