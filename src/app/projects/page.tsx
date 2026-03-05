"use client";

import Image from "next/image";
import { Projectsdetial } from "@/lib/types/types";
import { projects } from "@/lib/data/projects";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function Projects() {
    const sortedProjects = [...projects].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen py-20 px-6 md:px-12"
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
                    My Projects
                </h2>
                <p className="text-muted mt-3 text-sm md:text-base">
                    Scroll to explore my work
                </p>
            </div>

            {/* Project Grid */}
            <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                {sortedProjects.map((project: Projectsdetial) => (
                    <article
                        key={project.id}
                        /* The magic math: we calculate exact widths minus the gap sizes so they fit perfectly in rows of 2 or 3 */
                        className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.666rem)] group flex flex-col border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/30"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                /* Changed hover to group-hover for a better UX */
                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 uppercase tracking-wider">
                                    {project.name}
                                </h3>
                                <p className="text-secondary text-sm line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-sm hover:text-foreground/50 transition-colors"
                                >
                                    View Project <LinkIcon className="text-lg" />
                                </Link>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
