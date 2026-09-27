import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
    ArrowLeft,
    ArrowRight,
    ExternalLink,
    Layers,
    Smartphone,
    Sparkles,
    CheckCircle2,
    Globe,
    ShieldCheck,
    Cpu,
    Server,
    Code2,
    ChevronRight,
} from "lucide-react";
import ProjectShowcase from "./ProjectShowcase";

type PageProps = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: "Project Not Found | Ankit Saini",
        };
    }

    return {
        title: `${project.name} | System Architecture & Case Study - Ankit Saini`,
        description: project.description.slice(0, 160) + "...",
        openGraph: {
            title: `${project.name} - Case Study | Ankit Saini`,
            description: project.description.slice(0, 160) + "...",
            url: `/projects/${project.id}`,
            images: [
                {
                    url: `/projects/${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: project.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.name} - Case Study | Ankit Saini`,
            description: project.description.slice(0, 160) + "...",
            images: [`/projects/${project.image}`],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;
    const projectIndex = projects.findIndex((p) => p.id === id);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject =
        projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    // Helper to format long unstructured description text into readable paragraphs
    const formatDescription = (text: string) => {
        if (text.includes("\n")) {
            return text.split("\n").filter((p) => p.trim().length > 0);
        }
        // If single large paragraph with sentences, split every ~2-3 sentences for readability
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        if (sentences.length <= 2) return [text];

        const chunks: string[] = [];
        let current = "";
        sentences.forEach((sentence, idx) => {
            current += sentence + " ";
            if ((idx + 1) % 2 === 0 || idx === sentences.length - 1) {
                chunks.push(current.trim());
                current = "";
            }
        });
        return chunks;
    };

    const descriptionParagraphs = formatDescription(project.description);

    return (
        <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-6xl h-125 bg-foreground/5 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute inset-0 opacity-[0.025] bg-[url('/svg/noise.svg')] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Top Navigation Bar & Meta Header */}
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-secondary hover:text-foreground transition-all px-4 py-2 rounded-full border border-border bg-secondary/5 hover:bg-secondary/15"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>All Projects</span>
                    </Link>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/5 text-[11px] font-mono text-muted">
                            <Sparkles className="w-3.5 h-3.5 text-foreground" />
                            <span>Case Study #{project.id.padStart(2, "0")}</span>
                        </div>
                </div>

                {/* Hero Header */}
                <div className="space-y-6 mb-12 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        {project.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs font-mono tracking-wider rounded-full border border-border bg-secondary/5 text-foreground/80 hover:border-foreground/40 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground uppercase leading-[1.08]">
                        {project.name}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl leading-relaxed">
                        In-depth engineering breakdown, technology stack, and architectural decisions behind {project.name}.
                    </p>

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md hover:scale-105 active:scale-95"
                            >
                                <Globe className="w-4 h-4" />
                                <span>Visit Live Web</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                            </Link>
                        )}

                        {project.appLink && (
                            <Link
                                href={project.appLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/5 text-foreground font-bold text-xs uppercase tracking-wider hover:bg-secondary/15 transition-all hover:scale-105 active:scale-95"
                            >
                                <Smartphone className="w-4 h-4" />
                                <span>Google Play Store</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                            </Link>
                        )}

                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-mono text-muted hover:text-foreground transition-colors"
                        >
                            <span>Browse gallery</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* Showcase Stage (Balanced, fitted to true size, entire image visible) */}
                <ProjectShowcase project={project} />

                {/* Architecture & Engineering Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 mb-20">
                    {/* Left 2 Columns: Full Architecture Narrative & Competencies */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Specifications Section */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
                                <Layers className="w-4 h-4 text-foreground" />
                                <span>System Architecture & Overview</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Engineering Specifications
                            </h2>

                            <div className="space-y-4 text-secondary leading-relaxed text-base md:text-lg">
                                {descriptionParagraphs.map((para, idx) => (
                                    <p key={idx} className="leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* 4 Architectural Competency Pillars */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-foreground font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                Key Engineering Competencies Demonstrated
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground">
                                        <Code2 className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground">
                                        Type-Safe Component Architecture
                                    </h4>
                                    <p className="text-xs text-muted leading-relaxed">
                                        Rigorous static type safety, reusable UI components, and maintainable state flows.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground">
                                        Cloud Security & Protocol Integrity
                                    </h4>
                                    <p className="text-xs text-muted leading-relaxed">
                                        End-to-end HTTPS encryption, secure data transmission, and reliable server-side security.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground">
                                        <Cpu className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground">
                                        Multi-Viewport Interaction Design
                                    </h4>
                                    <p className="text-xs text-muted leading-relaxed">
                                        Adaptive fluid layouts ensuring native-feeling responsiveness across mobile, tablet, and desktop.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground">
                                        High-Throughput API Integration
                                    </h4>
                                    <p className="text-xs text-muted leading-relaxed">
                                        Optimized asynchronous REST/GraphQL client queries with caching, error resilience, and fast latency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Project Meta Sidebar */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-6">
                            <div>
                                <span className="block text-[11px] font-mono uppercase tracking-widest text-muted mb-1">
                                    Engineering Role
                                </span>
                                <span className="text-base font-semibold text-foreground">
                                    Full-Stack Development & Architecture
                                </span>
                            </div>

                            <div className="border-t border-border pt-4">
                                <span className="block text-[11px] font-mono uppercase tracking-widest text-muted mb-2">
                                    Technologies Employed
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags?.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 text-xs font-mono rounded-md border border-border bg-secondary/5 text-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-border pt-4">
                                <span className="block text-[11px] font-mono uppercase tracking-widest text-muted mb-1">
                                    Platform Links
                                </span>
                                <div className="flex flex-col gap-2.5 mt-2">
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-medium text-foreground hover:underline inline-flex items-center gap-1.5 group"
                                        >
                                            <Globe className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                                            <span className="truncate">
                                                {project.link.replace(/^https?:\/\//, "")}
                                            </span>
                                            <ExternalLink className="w-3 h-3 text-muted" />
                                        </Link>
                                    )}
                                    {project.appLink && (
                                        <Link
                                            href={project.appLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-medium text-foreground hover:underline inline-flex items-center gap-1.5 group"
                                        >
                                            <Smartphone className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                                            <span>Google Play Store</span>
                                            <ExternalLink className="w-3 h-3 text-muted" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Inquire / Hire CTA Card */}
                        <div className="p-6 rounded-2xl border border-border bg-secondary/5 space-y-4">
                            <div className="space-y-1">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                                    Collaborate
                                </span>
                                <h4 className="text-base font-bold text-foreground">
                                    Need a similar system?
                                </h4>
                            </div>
                            <p className="text-xs text-secondary leading-relaxed">
                                Let&apos;s engineer scalable web architectures, cross-platform mobile apps, or high-throughput backend services.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                                Contact Ankit Saini
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation: Previous & Next Project */}
                <div className="border-t border-border pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.id}`}
                            className="group flex flex-col p-6 rounded-2xl border border-border bg-secondary/5 hover:border-foreground/30 hover:bg-secondary/10 transition-all"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1.5 flex items-center gap-1.5">
                                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                Previous Project
                            </span>
                            <span className="text-lg font-bold text-foreground uppercase tracking-tight">
                                {prevProject.name}
                            </span>
                        </Link>
                    ) : (
                        <div className="hidden sm:block" />
                    )}

                    {nextProject && (
                        <Link
                            href={`/projects/${nextProject.id}`}
                            className="group flex flex-col items-end text-right p-6 rounded-2xl border border-border bg-secondary/5 hover:border-foreground/30 hover:bg-secondary/10 transition-all sm:col-start-2"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1.5 flex items-center gap-1.5">
                                Next Project
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-lg font-bold text-foreground uppercase tracking-tight">
                                {nextProject.name}
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
