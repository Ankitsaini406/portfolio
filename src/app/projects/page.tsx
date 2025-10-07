"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Projectsdetial } from "@/lib/types/types";
import { projects } from "@/lib/data/projects";
import { BiLink } from "react-icons/bi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const sortedProjects = [...projects].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Calculate total scrollable width
            const projects = scrollRef.current?.children;
            if (!projects) return;

            const totalScrollWidth = Array.from(projects).reduce((total, project) => {
                return total + project.scrollWidth;
            }, 0);

            const movementDistance = -(totalScrollWidth - window.innerWidth);

            gsap.fromTo(sectionRef.current, {
                x: 0
            }, {
                x: movementDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: "top top",
                    end: `+=${totalScrollWidth}`,
                    scrub: true, // Use boolean for smoother default
                    pin: true,
                    anticipatePin: 1 // Makes pinning smoother
                }
            });
        }, sectionRef); // Use the component's root ref for cleanup

        return () => ctx.revert(); // Proper cleanup
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative h-[100vh] w-fit flex flex-row items-center gap-16 px-24"
        >
            {/* Title */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
                    My Projects
                </h2>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                    Scroll to explore my work
                </p>
            </div>

            {/* Horizontal Scroll Area */}
            <div
                ref={scrollRef}
                className="relative h-[100vh] w-[800vw] flex flex-row items-center gap-16 px-24"
            >
                {sortedProjects.map((project: Projectsdetial) => (
                    <article
                        key={project.id}
                        className="project-card relative w-[500px] flex-shrink-0"
                    >
                        {/* Image */}
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col justify-between h-[240px]">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 uppercase tracking-wider">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                                >
                                    View Project <BiLink className="text-lg" />
                                </Link>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
