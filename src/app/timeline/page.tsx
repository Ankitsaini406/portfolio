'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelines } from '@/lib/data/timelines';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type ModernTimelineCard = {
    value: {
        name: string;
        jobtitle: string;
        joinDate: string;
        endDate: string;
        work: string;
    },
    index: number;
}

// Modern Timeline Card Component
const ModernTimelineCard = ({ value, index }: ModernTimelineCard ) => (
    <div className="timeline-item relative">
        {/* Mobile Timeline Dot */}
        <div className="lg:hidden absolute left-0 top-8 w-3 h-3 bg-gray-900 rounded-full" />
        
        {/* Card with Glassmorphism Effect */}
        <div className="ml-8 lg:ml-0 group relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl" />
            <div className="relative p-6 lg:p-8 border border-gray-200/50 rounded-2xl hover:border-gray-300 transition-all duration-300">
                {/* Header with Company Logo Placeholder */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{value.name}</h3>
                        <p className="text-sm text-gray-600 font-medium mt-1">{value.jobtitle}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">
                            {value.name.charAt(0)}
                        </span>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{value.joinDate} — {value.endDate}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {value.work}
                </p>

                {/* Technologies/Skills */}
                <div className="flex flex-wrap gap-2">
                    {getSkillsForJob(value.jobtitle).map((skill, i) => (
                        <span 
                            key={i}
                            className="text-xs px-3 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Index Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-mono text-sm shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>
        </div>
    </div>
);

export default function Timeline() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title on load
            gsap.fromTo(titleRef.current, 
                { 
                    opacity: 0, 
                    y: -30 
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    ease: "power3.out" 
                }
            );

            // Animate timeline line (for desktop)
            gsap.fromTo(".timeline-line",
                { 
                    height: 0 
                },
                {
                    height: "100%",
                    duration: 2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1
                    }
                }
            );

            // Animate each timeline item
            gsap.utils.toArray(".timeline-item").forEach((item, index) => {
                const direction = index % 2 === 0 ? -100 : 100;
                
                gsap.fromTo(item as Element,
                    { 
                        opacity: 0,
                        x: window.innerWidth >= 1024 ? direction : -50, // Different animation for mobile
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item as Element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Parallax effect for the entire section
            gsap.to(sectionRef.current, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white" 
            id="timelineSection"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Header */}
            <div ref={titleRef} className="relative text-center mb-20">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
                    Career Journey
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mt-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Working Experience
                </h1>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mt-6" />
            </div>

            {/* Timeline Container */}
            <div ref={timelineRef} className="relative max-w-7xl mx-auto px-4">
                {/* Center Line for Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-200 hidden lg:block">
                    <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400" />
                </div>

                {/* Mobile Timeline Line */}
                <div className="absolute left-4 top-0 w-[2px] h-full bg-gray-200 lg:hidden">
                    <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400" />
                </div>

                {/* Timeline Items */}
                <div className="space-y-12 lg:space-y-20">
                    {timelines.map((value, index) => (
                        <div
                            key={`${value.name}-${index}`}
                            className={`relative flex flex-col lg:flex-row items-center 
                                ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Desktop Timeline Dot */}
                            <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                                <div className="relative">
                                    <div className="w-6 h-6 bg-white border-4 border-gray-900 rounded-full shadow-xl" />
                                    <div className="absolute inset-0 w-6 h-6 bg-gray-900 rounded-full animate-ping opacity-20" />
                                </div>
                            </div>

                            {/* Empty Space for Desktop */}
                            <div className="hidden lg:block lg:w-1/2" />

                            {/* Card Container */}
                            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                <ModernTimelineCard value={value} index={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA or Summary */}
            <div className="relative mt-24 text-center">
                <p className="text-gray-500 font-mono text-sm">
                    • {getUniqueCompanies()} Companies • Full Stack Development
                </p>
            </div>
        </section>
    );
}

interface SkillsMap {
    [jobtitle: string]: string[];
}

// Helper function to extract skills based on job title
function getSkillsForJob(jobtitle: string): string[] {
    const skillsMap: SkillsMap = {
        "Full Stack Developer": ["React", "Node.js", "PostgreSQL", "Next.js"],
        "SDE-HTML": ["HTML5", "CSS3", "Shopify", "Flutter", "Responsive Design"],
        "Flutter Devloper": ["Flutter", "Dart", "MySQL", "Laravel", "API Development"],
        "Junior Devloper": ["HTML", "CSS", "Flutter", "Firebase", "MySQL"]
    };
    return skillsMap[jobtitle] || ["Development"];
}

// Helper function to count unique companies
function getUniqueCompanies() {
    return new Set(timelines.map(t => t.name)).size;
}