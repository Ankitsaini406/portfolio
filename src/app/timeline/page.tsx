"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelines } from "@/lib/data/timelines";
import { Laptop, Layers, Server, Smartphone } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const getRoleIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("mobile") || t.includes("flutter")) return <Smartphone />;
  if (t.includes("backend") || t.includes("node")) return <Server />;
  if (t.includes("lead") || t.includes("senior")) return <Layers />;
  return <Laptop />;
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Initial Setup (Prevent FOUC - Flash of Unstyled Content)
      gsap.set(".timeline-card", { opacity: 0, y: 50, filter: "blur(10px)" });
      gsap.set(".timeline-date", { opacity: 0, x: -20 });
      gsap.set(".timeline-number", { opacity: 0, scale: 0.5 });

      // 2. Animate the Center Line (Draws down as you scroll)
      gsap.fromTo(".center-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1, // Smooth scrubbing
          }
        }
      );

      // 3. Loop through each row to animate items
      const rows = gsap.utils.toArray(".timeline-row");

      rows.forEach((row: any) => {
        const card = row.querySelector(".timeline-card");
        const dateDesktop = row.querySelector(".timeline-date-desktop");
        const dateMobile = row.querySelector(".timeline-date-mobile");
        const number = row.querySelector(".timeline-number");
        const dot = row.querySelector(".timeline-dot");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%", // Starts when top of row hits 80% of viewport height
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          }
        });

        // The sequence
        tl.to(dot, { scale: 1.5, duration: 0.3, ease: "back.out(1.7)" })
          .to(dot, { scale: 1, duration: 0.3 }) // Pulse effect
          .to(
            [card, dateDesktop, dateMobile, number].filter(Boolean),
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-32 overflow-hidden">

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="font-mono text-sm tracking-widest text-secondary uppercase">Professional Journey</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-foreground">Experience.</h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">

          {/* The Active Line (Absolute Positioned in Center) */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0">
            <div className="center-line w-full h-full bg-linear-to-b from-secondary via-foreground to-secondary" />
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-16 md:gap-32">
            {timelines.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-row relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* 1. Empty Side / Date Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:px-12 flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                    <div className="timeline-date-desktop hidden md:block">
                      <span className="font-mono text-xs uppercase tracking-widest text-secondary opacity-70">
                        {item.joinDate} — {item.endDate}
                      </span>
                      <div className="text-6xl font-black text-muted mt-2">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* 2. The Dot (Center Anchor) */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 flex items-center justify-center z-20">
                    <div className="timeline-dot w-4 h-4 rounded-full bg-background border-2 border-foreground shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
                  </div>

                  {/* 3. Content Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:px-12 mt-2 md:mt-0`}>

                    {/* Mobile Date (Visible only on mobile) */}
                    <div className="timeline-date-mobile md:hidden mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                        {item.joinDate} — {item.endDate}
                      </span>
                    </div>

                    {/* The Card */}
                    <div className="timeline-card bg-primary-bg border border-(--grid-color) p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-foreground">
                          {getRoleIcon(item.jobtitle)}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.jobtitle}</h3>
                          <p className="text-sm font-medium text-secondary">@ {item.name}</p>
                        </div>
                      </div>

                      <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
                        {item.work}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {getSkillsForJob(item.jobtitle).map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-[10px] font-mono border border-(--grid-color) rounded-md text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Utils ---
function getSkillsForJob(jobtitle: string): string[] {
  const t = jobtitle.toLowerCase();
  if (t.includes('senior') || t.includes('lead')) return ['Architecture', 'Leadership', 'Scalability'];
  if (t.includes('flutter')) return ['Flutter', 'Dart', 'iOS', 'Android'];
  if (t.includes('full stack')) return ['React', 'Next.js', 'Node.js', 'DB'];
  return ['Development', 'UI/UX', 'API'];
}