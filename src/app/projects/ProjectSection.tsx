"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Projectsdetial } from "@/lib/types/types";
import { projects } from "@/lib/data/projects";
import Link from "next/link";
import { ExternalLink, Layers, Smartphone, Sparkles, X } from "lucide-react";

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Projectsdetial | null>(null);

    const sortedProjects = [...projects].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedProject(null);
            }
        };
        if (selectedProject) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen py-20 px-6 md:px-12"
        >
            {/* Title & Narrative */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-secondary/5 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-foreground" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-secondary">
                        Featured Portfolio
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-foreground">
                    Selected Works
                </h2>
                <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
                    Production systems, mobile applications, and high-performance web platforms engineered with modern full-stack architectures.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {sortedProjects.map((project: Projectsdetial) => (
                    <article
                        key={project.id}
                        className="group flex flex-col bg-primary-bg/50 border border-border rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:border-foreground/40 hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <div
                            onClick={() => setSelectedProject(project)}
                            className="relative w-full h-52 overflow-hidden cursor-pointer bg-secondary/5"
                        >
                            <Image
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                            {/* Subtle diagonal shine effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                {/* Tech Badges */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider rounded-md border border-border bg-secondary/5 text-secondary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-0.5 text-[10px] font-mono text-muted">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-foreground">
                                    {project.name}
                                </h3>
                                <p className="text-secondary text-sm line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Actions Bar */}
                            <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2.5">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Read Architecture →
                                </button>

                                <div className="flex items-center gap-2">
                                    {project.appLink && (
                                        <Link
                                            href={project.appLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View on Google Play"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground px-3 py-1.5 rounded-full border border-border bg-secondary/5 hover:bg-foreground hover:text-background transition-all"
                                        >
                                            <Smartphone className="w-3 h-3" /> App
                                        </Link>
                                    )}

                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground px-3 py-1.5 rounded-full border border-border bg-secondary/5 hover:bg-foreground hover:text-background transition-all"
                                        >
                                            Live <ExternalLink className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* In-Depth Project Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 transition-all duration-300 scale-100 animate-in zoom-in-95"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close modal"
                            className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border flex items-center justify-center text-secondary hover:text-foreground hover:bg-secondary/10 transition-colors cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Modal Image */}
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-border bg-secondary/5">
                            <Image
                                src={`/projects/${selectedProject.image}`}
                                alt={selectedProject.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Title & Tags */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {selectedProject.tags?.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary/5 text-secondary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                                {selectedProject.name}
                            </h3>
                        </div>

                        {/* Full Architecture Narrative */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary">
                                <Layers className="w-4 h-4 text-foreground" />
                                <span>Architecture & Engineering Overview</span>
                            </div>
                            <p className="text-secondary text-base leading-relaxed whitespace-pre-line">
                                {selectedProject.description}
                            </p>
                        </div>

                        {/* Footer Links */}
                        {(selectedProject.link || selectedProject.appLink) && (
                            <div className="pt-4 border-t border-border flex flex-wrap justify-end gap-3">
                                {selectedProject.appLink && (
                                    <Link
                                        href={selectedProject.appLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/5 text-foreground font-semibold text-sm hover:bg-secondary/15 transition-colors"
                                    >
                                        <Smartphone className="w-4 h-4" /> Google Play Store
                                    </Link>
                                )}

                                {selectedProject.link && (
                                    <Link
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
                                    >
                                        Visit Live Web <ExternalLink className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}