"use client";

import { useMemo, useRef, useEffect } from "react";
import Image from 'next/image';
import { FaCode, FaRocket, FaMobile, FaCloud, FaDatabase, FaServer,  FaLeaf } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);

    const experienceYears = useMemo(() => {
        const startDate = new Date("2022-07-01");
        const now = new Date();
        const monthsDiff =
            (now.getFullYear() - startDate.getFullYear()) * 12 +
            now.getMonth() -
            startDate.getMonth();
        const years = monthsDiff / 12;
        return years < 1 ? "<1" : years.toFixed(1).replace(/\.0$/, "");
    }, []);

    const techStack = [
        { icon: FaRocket, name: "Next.js" },
        { icon: FaMobile, name: "React.js" },
        { icon: FaCloud, name: "AWS" },
        { icon: FaLeaf, name: "Flutter" },
        { icon: FaServer, name: "Firebase" },
        { icon: FaDatabase, name: "MongoDB" }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text content
            gsap.fromTo(textRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate image with scale and rotation
            gsap.fromTo(imageRef.current,
                { scale: 0.8, rotation: -5, opacity: 0 },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate tech badges
            gsap.fromTo(badgesRef.current?.children || [],
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.8)",
                    scrollTrigger: {
                        trigger: badgesRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Floating animation for image
            gsap.to(imageRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-muted/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20 relative z-10">
                {/* Text Section */}
                <div ref={textRef} className="w-full lg:w-1/2 space-y-8">
                    <div
                        className="inline-flex items-center gap-3 border border-border bg-card/50 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30"
                    >
                        <FaCode className="text-xl" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Web & App Developer
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Hi, I&apos;m{" "}
                            <span>
                                Ankit
                            </span>{" "}
                            <span className="inline-block animate-waving-hand origin-[70%_70%]">👋</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                            Your dedicated{" "}
                            <span className="font-semibold">
                                Full-Stack Developer
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3" ref={badgesRef}>
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 bg-card border border-border px-4 py-2 backdrop-blur-lg shadow-sm hover:shadow-md rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                            >
                                <tech.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm font-medium transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="font-bold text-lg">{experienceYears}</span>
                            </div>
                            <div>
                                <p className="text-lg font-semibold ">Years of Experience</p>
                                <p className="text-muted-foreground text-sm">Building digital solutions</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                Passionate <strong>Full-Stack Developer</strong> with{" "}
                                <strong>{experienceYears} years</strong> of hands-on experience crafting high-quality digital solutions. I specialize in developing responsive, scalable, and SEO-optimized applications using cutting-edge technologies.
                            </p>

                            <p className="text-lg leading-relaxed">
                                My expertise spans <strong>frontend development</strong> with React.js and Next.js, <strong>cross-platform mobile apps</strong> with Flutter, and <strong>robust backend systems</strong> using AWS, Firebase, and modern databases.
                            </p>

                            <p className="text-lg leading-relaxed">
                                I thrive in collaborative environments, continuously learning and staying ahead of technology trends to deliver innovative, reliable, and efficient solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        {/* Animated border gradient */}
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-1000 group-hover:duration-300"></div>

                        {/* Main image container */}
                        <div className="relative w-[320px] h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border backdrop-blur-sm bg-card/50">
                            <Image
                                src="/images/myimage.jpg"
                                alt="Ankit Saini"
                                fill
                                className="object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Gradient overlay for better text contrast */}
                            <div className="absolute inset-0 rounded-2xl" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm animate-pulse delay-1000"></div>

                        {/* Experience badge on image */}
                        <div className="absolute bg-background -bottom-6 -right-6 px-4 py-2 rounded-xl shadow-lg border border-border">
                            <div className="text-center">
                                <div className="font-bold text-2xl">{experienceYears}+</div>
                                <div className="text-xs uppercase tracking-wider">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}