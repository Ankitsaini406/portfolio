"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const splashRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const name = "ANKIT SAINI";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // 1. Initial State: Hide content
      gsap.set(".char", { y: 100, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0 });

      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "expo.inOut",
      })
      .to(".char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "expo.out",
      }, "-=0.4")
      .to(".subtext", {
        opacity: 0.8,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6")
      // Brief pause for impact
      .to({}, { duration: 0.8 })
      // Exit Animation: The "Wipe"
      .to(".char", {
        y: -100,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "expo.in",
      })
      .to(lineRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: "expo.inOut",
      }, "-=0.5")
      .to(splashRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "none",
      });
    }, splashRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex items-center justify-center z-(--z-index-max) bg-(--color-background) overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <div ref={containerRef} className="relative flex flex-col items-center">
        {/* Name Reveal */}
        <div className="flex overflow-hidden pb-2">
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="char text-5xl md:text-8xl font-black tracking-tighter text-foreground inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Minimalist Progress Line */}
        <div 
          ref={lineRef} 
          className="w-full h-px bg-accent mt-4 mb-6 opacity-50" 
        />

        {/* Subtext */}
        <p className="subtext opacity-0 translate-y-4 text-xs md:text-sm font-mono uppercase tracking-[0.5em] text-secondary">
          Full-Stack Systems Engineer
        </p>
      </div>
    </div>
  );
}