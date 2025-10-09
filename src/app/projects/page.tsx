"use client";

import Image from "next/image";
import { Projectsdetial } from "@/lib/types/types";
import { projects } from "@/lib/data/projects";
import { BiLink } from "react-icons/bi";
import Link from "next/link";

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
                <p className="text-gray-400 mt-3 text-sm md:text-base">
                    Scroll to explore my work
                </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {sortedProjects.map((project: Projectsdetial) => (
                    <article
                        key={project.id}
                        className="group border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/30"
                    >
                        {/* Image */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                fill
                                sizes="cover"
                                className="object-cover transition-transform duration-700 group-hover:scale-110 "
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col justify-between h-[220px]">
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
                                    className="mt-4 inline-flex items-center gap-2 text-sm hover:text-foreground/50 transition-colors"
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
