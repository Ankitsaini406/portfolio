import Image from 'next/image';
import Link from 'next/link';
import { 
    Award,
    Cloud, 
    Code2, 
    Cpu, 
    Database, 
    ExternalLink, 
    GraduationCap, 
    Layers, 
    Leaf, 
    Rocket, 
    Server, 
    ShieldCheck, 
    Smartphone, 
    Zap 
} from "lucide-react";
import { PersonSchema, ProfilePageSchema } from "@/components/seo/JsonLd";

export default function AboutSection() {
    const techStack = [
        { icon: Rocket, name: "Next.js", url: "https://nextjs.org" },
        { icon: Smartphone, name: "React", url: "https://react.dev" },
        { icon: Code2, name: "TypeScript", url: "https://www.typescriptlang.org" },
        { icon: Cloud, name: "AWS", url: "https://aws.amazon.com" },
        { icon: Leaf, name: "Flutter", url: "https://flutter.dev" },
        { icon: Server, name: "Firebase", url: "https://firebase.google.com" },
        { icon: Database, name: "MongoDB", url: "https://www.mongodb.com" },
        { icon: Database, name: "PostgreSQL", url: "https://www.postgresql.org" }
    ];

    const principles = [
        {
            title: "Performance & Core Web Vitals",
            description: "Targeting 100/100 Lighthouse metrics with React Server Components, server-side caching, responsive image optimization, and sub-second Largest Contentful Paint (LCP).",
            icon: Zap
        },
        {
            title: "End-to-End Type Safety & Clean Architecture",
            description: "Employing strict TypeScript contracts, modular layer boundaries, and self-documenting codebases that scale across distributed team environments without regressions.",
            icon: ShieldCheck
        },
        {
            title: "Scalable Cloud & Database Engineering",
            description: "Designing reliable cloud infrastructures across AWS (S3, Lambda, CloudFront) and Firebase with normalized schemas, efficient indexing, and minimal latency.",
            icon: Layers
        },
        {
            title: "User-Centric UI/UX Craftsmanship",
            description: "Translating sophisticated product specifications into intuitive, accessible (WCAG 2.1 compliant), and responsive interfaces with fluid micro-interactions.",
            icon: Cpu
        }
    ];

    return (
        <section
            id="about"
            className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center border-t border-border"
            aria-labelledby="about-heading"
        >
            {/* SEO Structured Data */}
            <PersonSchema />
            <ProfilePageSchema />

            {/* Ambient Background Noise/Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/svg/noise.svg')] mix-blend-overlay" />

            <div className="max-w-7xl mx-auto w-full z-10 space-y-20">

                {/* --- TOP GRID: Narrative, Credentials & Image --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LEFT COLUMN: Narrative & Credentials --- */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">

                        {/* Badge */}
                        <div className="w-fit mb-6 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
                                Verified Software Engineer Profile
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 id="about-heading" className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-8">
                            Engineering <br />
                            <span className="text-secondary">Scalable Digital Systems.</span>
                        </h2>

                        {/* Direct Answer & Core Bio */}
                        <div className="space-y-5 text-base md:text-lg text-secondary leading-relaxed max-w-xl">
                            <p>
                                <strong className="text-foreground">Ankit Saini</strong> is a Senior Full-Stack Engineer and UI/UX Architect with over <strong className="text-foreground">3.5 years of industry experience</strong> designing, developing, and shipping resilient digital products. Based in India, Ankit bridges deep backend logic with state-of-the-art interactive frontends.
                            </p>
                            <p>
                                Holding a <strong className="text-foreground">Bachelor of Computer Applications (BCA)</strong> from <a href="https://ggi.ac.in/" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-border hover:decoration-foreground transition-colors font-medium">Gulzar Group of Institutes</a> (2016 – 2019), Ankit specializes in the modern React and Next.js ecosystem, robust TypeScript architectures, serverless cloud functions on AWS, and cross-platform mobile apps via Flutter.
                            </p>
                            <p>
                                Over his career, Ankit has successfully delivered <strong>11+ production web and mobile platforms</strong> across fintech, SaaS platforms, and enterprise internal tooling, consistently maintaining <strong>99.9% uptime</strong> and industry-leading Core Web Vitals scores.
                            </p>
                        </div>

                        {/* Professional Credentials & Education Chips */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                            <div className="p-4 rounded-xl border border-border bg-secondary/5 flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted">Education</h3>
                                    <p className="text-sm font-semibold text-foreground">BCA (2016 – 2019)</p>
                                    <p className="text-xs text-secondary">
                                        <a href="https://ggi.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline transition-colors">
                                            Gulzar Group of Institutes ↗
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl border border-border bg-secondary/5 flex items-start gap-3">
                                <Award className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted">Core Focus</h3>
                                    <p className="text-sm font-semibold text-foreground">Full-Stack Architecture</p>
                                    <p className="text-xs text-secondary">Next.js, TypeScript, AWS, Mobile</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="mt-10 pt-8 border-t border-secondary/20 grid grid-cols-4 gap-4">
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-foreground">3.5+</span>
                                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-foreground">11+</span>
                                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Projects</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-foreground">99.9%</span>
                                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Uptime</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-foreground">100</span>
                                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-secondary">Perf. Score</span>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Image & Experience Badge --- */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Animated border gradient */}
                            <div className="absolute -inset-4 rounded-3xl blur-lg opacity-20 group-hover:opacity-35 transition-all duration-1000 group-hover:duration-300 bg-foreground animate-pulse-slow"></div>

                            {/* Main image container */}
                            <div className="relative w-full max-w-[320px] h-120 rounded-2xl overflow-hidden shadow-2xl border border-(--grid-color) backdrop-blur-sm bg-background/50">
                                <Image
                                    src="/images/myimage.jpg"
                                    alt="Ankit Saini - Full-Stack Developer and System Architect"
                                    width={478}
                                    height={837}
                                    priority
                                    loading="eager"
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                                    quality={80}
                                    className="object-cover rounded-2xl will-change-transform transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>

                            {/* Experience badge */}
                            <div className="absolute bg-background -bottom-6 -right-6 px-4 py-2 rounded-xl shadow-lg border border-(--grid-color)">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-foreground">3.5+</div>
                                    <div className="text-xs uppercase tracking-wider text-secondary">Years Exp.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MIDDLE SECTION: Architectural Principles (E-E-A-T & Quality Signals) --- */}
                <div className="pt-8 border-t border-border">
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                        <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                            Core Engineering Principles &amp; Methodology
                        </h3>
                        <p className="text-sm md:text-base text-secondary">
                            Every software application is built following proven software engineering patterns to ensure maintainability, resilience, and rapid iteration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {principles.map((principle, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-2xl border border-border bg-secondary/5 hover:border-foreground/30 transition-all space-y-3"
                            >
                                <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center bg-background text-foreground">
                                    <principle.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">{principle.title}</h4>
                                <p className="text-sm text-secondary leading-relaxed">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- BOTTOM SECTION: Authoritative Toolchain & Citations --- */}
                <div className="pt-8 border-t border-border space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-foreground tracking-tight">Production Tech Stack</h3>
                            <p className="text-xs text-secondary">Official frameworks and standards utilized across production environments.</p>
                        </div>
                        <Link 
                            href="/contact"
                            className="text-xs font-semibold uppercase tracking-wider text-foreground hover:underline inline-flex items-center gap-1.5"
                        >
                            Discuss a project with Ankit &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {techStack.map((tech, i) => (
                            <a
                                key={i}
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-3.5 rounded-xl border border-border bg-secondary/5 hover:border-foreground/40 hover:bg-secondary/10 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <tech.icon className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                                </div>
                                <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
