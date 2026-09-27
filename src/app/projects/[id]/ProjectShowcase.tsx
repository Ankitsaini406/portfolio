
import Image from "next/image";
import Link from "next/link";
import { Lock, ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
    project: {
        id: string;
        name: string;
        image: string;
        link?: string;
        appLink?: string;
    };
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {

    // Close modal on Escape key

    const displayUrl = project.link
        ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
        : `${project.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.app`;

    return (
        <section className="mb-14" aria-label="Project Visual Showcase">
            {/* Showcase Window Frame */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl md:rounded-3xl border border-border bg-primary-bg/70 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-foreground/30">
                {/* Browser Window Header */}
                <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-border bg-secondary/5">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-xs" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-xs" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-xs" />
                    </div>

                    {/* Simulated URL Bar */}
                    <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border text-[11px] font-mono text-muted shadow-inner truncate">
                        <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{displayUrl}</span>
                    </div>

                    {/* Window Actions */}
                    <div className="flex items-center gap-2">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-muted hover:text-foreground transition-colors px-2.5 py-1 rounded-md hover:bg-secondary/10"
                                title="Open Live Website"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span className="hidden md:inline">Visit</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Showcase Stage (Balanced, fitted, no cropped/broken image) */}
                <div
                    className="relative w-full h-70 sm:h-90 md:h-105 flex items-center justify-center p-4 sm:p-6 md:p-8 cursor-pointer group overflow-hidden bg-radial from-secondary/5 via-background/40 to-background/90"
                    title="Click to view full image"
                >
                    {/* Ambient Glow matching project artwork */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Image
                            src={`/projects/${project.image}`}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 850px"
                            aria-hidden="true"
                            className="object-cover blur-3xl opacity-20 dark:opacity-25 scale-125"
                        />
                    </div>

                    {/* Subtle dot matrix grid */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(currentColor 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                        }}
                    />

                    {/* The Contained Image (Entire image fitted perfectly, no cropping) */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <Image
                            src={`/projects/${project.image}`}
                            alt={project.name}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 850px"
                            className="object-contain p-2 sm:p-4 drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* Footer Bar of Showcase Frame */}
                <div className="px-4 sm:px-6 py-2.5 border-t border-border bg-secondary/5 flex items-center justify-between text-[11px] font-mono text-muted">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>High-Resolution Showcase Asset</span>
                    </span>
                    <span className="text-secondary/70">100% Aspect Ratio Preserved</span>
                </div>
            </div>
        </section>
    );
}
