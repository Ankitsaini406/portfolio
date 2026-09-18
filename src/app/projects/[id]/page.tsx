import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
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
    Calendar,
    Globe,
    Code2,
} from "lucide-react";

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

    return (
        <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-foreground/5 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute inset-0 opacity-[0.025] bg-[url('/svg/noise.svg')] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Navigation Bar */}
                <div className="mb-10 flex items-center justify-between">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-secondary hover:text-foreground transition-colors px-4 py-2 rounded-full border border-border bg-secondary/5 hover:bg-secondary/15"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>All Projects</span>
                    </Link>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/5 text-[11px] font-mono text-muted">
                        <Sparkles className="w-3.5 h-3.5 text-foreground" />
                        <span>Case Study #{project.id.padStart(2, "0")}</span>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="space-y-6 mb-12">
                    <div className="flex flex-wrap items-center gap-2">
                        {project.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs font-mono tracking-wider rounded-full border border-border bg-secondary/5 text-foreground/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground uppercase leading-tight">
                        {project.name}
                    </h1>

                    <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed">
                        In-depth engineering breakdown, technology stack, and architectural decisions behind {project.name}.
                    </p>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md hover:scale-105"
                            >
                                <Globe className="w-4 h-4" />
                                <span>Visit Live Web</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1" />
                            </Link>
                        )}

                        {project.appLink && (
                            <Link
                                href={project.appLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/5 text-foreground font-bold text-xs uppercase tracking-wider hover:bg-secondary/15 transition-all hover:scale-105"
                            >
                                <Smartphone className="w-4 h-4" />
                                <span>Google Play Store</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Main Showcase Image */}
                <div className="relative w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden border border-border bg-secondary/5 shadow-2xl mb-16 group">
                    <Image
                        src={`/projects/${project.image}`}
                        alt={project.name}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Architecture & Engineering Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Left 2 Columns: Full Architecture Narrative */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
                                <Layers className="w-4 h-4 text-foreground" />
                                <span>System Architecture & Overview</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Engineering Specifications
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-secondary leading-relaxed text-base md:text-lg space-y-4 whitespace-pre-line">
                                {project.description}
                            </div>
                        </div>

                        {/* Engineering Highlights */}
                        <div className="p-6 md:p-8 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-4">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-foreground font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                Key Engineering Competencies Demonstrated
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-secondary">
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground font-bold">•</span>
                                    <span>Type-safe component & data modeling</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground font-bold">•</span>
                                    <span>Scalable cloud deployment & HTTPS security</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground font-bold">•</span>
                                    <span>Responsive multi-viewport interaction design</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground font-bold">•</span>
                                    <span>High-throughput REST / Backend API integration</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Project Meta Sidebar */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl border border-border bg-primary-bg/50 backdrop-blur-sm space-y-6">
                            <div>
                                <span className="block text-[11px] font-mono uppercase tracking-widest text-muted mb-1">
                                    Role & Domain
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
                                <div className="flex flex-col gap-2 mt-2">
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-medium text-foreground hover:underline inline-flex items-center gap-1.5"
                                        >
                                            <Globe className="w-3.5 h-3.5" />
                                            {project.link.replace(/^https?:\/\//, "")}
                                        </Link>
                                    )}
                                    {project.appLink && (
                                        <Link
                                            href={project.appLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-medium text-foreground hover:underline inline-flex items-center gap-1.5"
                                        >
                                            <Smartphone className="w-3.5 h-3.5" />
                                            Google Play Store Listing
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Back to Projects CTA Card */}
                        <div className="p-6 rounded-2xl border border-border bg-secondary/5 text-center space-y-3">
                            <h4 className="text-base font-bold text-foreground">
                                Want to see more works?
                            </h4>
                            <p className="text-xs text-secondary leading-relaxed">
                                Browse through mobile applications, full-stack systems, and web architectures.
                            </p>
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl border border-border text-xs font-bold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation: Previous & Next Project */}
                <div className="border-t border-border pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.id}`}
                            className="group flex flex-col p-6 rounded-2xl border border-border bg-secondary/5 hover:border-foreground/30 transition-all"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1 flex items-center gap-1.5">
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
                            className="group flex flex-col items-end text-right p-6 rounded-2xl border border-border bg-secondary/5 hover:border-foreground/30 transition-all sm:col-start-2"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1 flex items-center gap-1.5">
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
        </main>
    );
}
