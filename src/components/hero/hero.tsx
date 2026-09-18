import { TECH_STACK } from "@/lib/data/tech-stack";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative min-h-dvh 2xl:min-h-4/5 flex flex-col justify-center overflow-x-hidden gap-5 pt-32 pb-12 lg:pt-20"
            id="home"
        >
            {/* --- Background Noise & Grid --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/svg/noise.svg')] mix-blend-overlay" />
                <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                {/* --- Left Column: Authority & Narrative --- */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                    {/* Availability Badge */}
                    <div 
                        className="animate-fade-in-up mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-secondary/5 backdrop-blur-sm shadow-sm"
                        style={{ animationDelay: "100ms" }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted">
                            Available for Hire
                        </span>
                    </div>

                    <h1 
                        className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.95] mb-4 md:mb-6"
                        style={{ animationDelay: "200ms" }}
                    >
                        ANKIT SAINI
                    </h1>

                    <h2 
                        className="animate-fade-in-up text-xl md:text-3xl font-light text-secondary mb-8"
                        style={{ animationDelay: "300ms" }}
                    >
                        Senior Full-Stack Engineer <br className="hidden md:block" /> & System Architect.
                    </h2>

                    <div 
                        className="animate-fade-in-up w-24 lg:w-full h-px bg-secondary/20 mb-8"
                        style={{ animationDelay: "400ms" }}
                    />

                    <p 
                        className="animate-fade-in-up text-base md:text-lg text-secondary max-w-md lg:max-w-xl leading-relaxed mb-10"
                        style={{ animationDelay: "500ms" }}
                    >
                        Translating complex business requirements into scalable, high-performance web and mobile solutions. Focused on clean architecture, type safety, and user-centric interaction design.
                    </p>

                    <div 
                        className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                        style={{ animationDelay: "600ms" }}
                    >
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto group relative px-7 py-3.5 bg-foreground text-background rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative font-semibold flex items-center justify-center gap-2 text-sm">
                                View Selected Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto group px-6 py-3.5 border border-border bg-secondary/5 rounded-full hover:border-foreground/50 hover:scale-105 transition-all text-sm font-semibold flex items-center justify-center gap-2 text-foreground shadow-sm hover:shadow-md"
                        >
                            <FileText className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
                            <span>Resume</span>
                        </Link>

                        <div className="flex gap-2.5 mt-2 sm:mt-0">
                            <SocialButton label="GitHub profile" href="https://github.com/Ankitsaini406" icon={<Github />} />
                            <SocialButton label="Linkedin profile" href="https://www.linkedin.com/in/web-ankit-saini/" icon={<Linkedin />} />
                            <SocialButton label="Gmail profile" href="mailto:as.ankitsaini406@gmail.com" icon={<Mail />} />
                        </div>
                    </div>

                    {/* Senior Level Stats */}
                    <div 
                        className="animate-fade-in-up mt-12 w-full grid grid-cols-3 gap-4 md:gap-8 border-t lg:border-t-0 lg:border-l border-border/20 pt-8 lg:pt-0 lg:pl-6"
                        style={{ animationDelay: "700ms" }}
                    >
                        <div className="flex flex-col items-center lg:items-start group cursor-default">
                            <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">3.5+</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Years Exp.</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start group cursor-default">
                            <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">11+</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Projects</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start group cursor-default">
                            <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">100%</p>
                            <p className="text-[10px] uppercase tracking-wider text-secondary">Delivery</p>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Abstract Code Visual --- */}
                <div 
                    className="animate-fade-in-up relative w-full h-full flex items-center justify-center lg:justify-end perspective-[1000px] mt-8 mb-10 lg:mb-0 lg:mt-0"
                    style={{ animationDelay: "400ms" }}
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-100 aspect-square bg-foreground/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

                    {/* Code Window with Float animation */}
                    <div className="code-window animate-float relative w-full max-w-85 md:max-w-md bg-background/80 backdrop-blur-xl border border-(--grid-color) rounded-xl shadow-2xl overflow-hidden group hover:rotate-1 transition-transform duration-500">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-(--grid-color) bg-secondary/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <div className="ml-auto text-[10px] font-mono text-secondary">Ankit.tsx</div>
                        </div>

                        {/* Code Body */}
                        <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-loose text-secondary overflow-x-auto">
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">1</span>
                                <span className="text-purple-500">const</span> <span className="text-blue-500 pl-2">Developer</span> = <span className="text-foreground">{`{`}</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">2</span>
                                <span className="pl-4">name:</span> <span className="text-green-600 pl-2">&apos;Ankit Saini&apos;</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">3</span>
                                <span className="pl-4">skills:</span> <span className="text-foreground pl-2">[</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">4</span>
                                <span className="pl-8 text-orange-500">&apos;Next.js&apos;</span>, <span className="text-orange-500">&apos;Flutter&apos;</span>, <span className="text-orange-500">&apos;Database&apos;</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">5</span>
                                <span className="pl-4 text-foreground">]</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">6</span>
                                <span className="pl-4">hardWorker:</span> <span className="text-blue-500 pl-2">true</span>,
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">7</span>
                                <span className="pl-4">problemSolver:</span> <span className="text-blue-500 pl-2">true</span>
                            </div>
                            <div className="flex whitespace-nowrap">
                                <span className="w-6 text-secondary/30 select-none">8</span>
                                <span className="text-foreground">{`}`};</span>
                            </div>

                            {/* Blinking Cursor */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-green-500">{`>`}</span>
                                <span className="w-2.5 h-4 md:h-5 bg-secondary animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Infinite Tech Marquee --- */}
            <div className="mt-auto w-full border-t border-border bg-background/50 backdrop-blur-sm pt-8 pb-4 overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div className="marquee-track flex gap-8 md:gap-16 px-4 md:px-8">
                        {[...TECH_STACK, ...TECH_STACK].map(({ name, icon }, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 md:gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default shrink-0"
                            >
                                <Image
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <span className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

// --- Components & Data ---

const SocialButton = ({ href, label, icon }: { href: string, label: string, icon: React.ReactNode }) => {
    const isExternal = href.startsWith("http");
    return (
        <Link
            href={href}
            aria-label={label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border bg-background border-border flex items-center justify-center text-secondary hover:bg-foreground hover:text-(--color-background) hover:border-transparent transition-all duration-300 text-lg md:text-xl"
        >
            {icon}
        </Link>
    );
};