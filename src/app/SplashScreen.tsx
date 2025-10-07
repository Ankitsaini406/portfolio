
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const splashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate text from bottom to top, one by one
      tl.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subTextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        // Hold for a second
        .to({}, { duration: 0.5 })
        // Fade out the entire splash
        .to(splashRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete,
        });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
    >
      <h1 ref={textRef} className="text-5xl font-bold tracking-wide mb-3">
        Ankit Saini
      </h1>
      <p ref={subTextRef} className="text-lg opacity-80">
        Frontend Developer & Designer
      </p>
    </div>
  );
}
