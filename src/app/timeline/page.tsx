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
  };
  index: number;
};

const ModernTimelineCard = ({ value, index }: ModernTimelineCard) => (
  <div className="timeline-item relative">
    <div className="lg:hidden absolute left-0 top-8 w-3 h-3 rounded-full bg-[var(--color-accent)]" />

    <div className="ml-8 lg:ml-0 group relative backdrop-blur-sm">
      <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary-bg)]/50 border border-[var(--color-secondary-light)]" />
      <div className="relative p-6 lg:p-8 rounded-2xl border border-[var(--color-secondary-light)] hover:border-[var(--color-foreground)] transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)]">{value.name}</h3>
            <p className="text-sm text-[var(--color-secondary)] font-medium mt-1">{value.jobtitle}</p>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-foreground text-background">
            <span className="text-lg font-bold">{value.name.charAt(0)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 text-xs text-[var(--color-secondary)]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{value.joinDate} — {value.endDate}</span>
        </div>

        <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-4">{value.work}</p>

        <div className="flex flex-wrap gap-2">
          {getSkillsForJob(value.jobtitle).map((skill, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full border border-[var(--color-secondary-light)] text-[var(--color-foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm shadow-lg bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--color-secondary-light)]">
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
      gsap.fromTo(titleRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

      gsap.fromTo(
        '.timeline-line',
        { height: 0 },
        {
          height: '100%',
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        },
      );

      gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        gsap.fromTo(
          item as Element,
          { opacity: 0, x: window.innerWidth >= 1024 ? direction : -50, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item as Element,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      gsap.to(sectionRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32" id="timelineSection">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div ref={titleRef} className="relative text-center mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-secondary)]">
          Career Journey
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Working Experience
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-foreground)] to-transparent mx-auto mt-6" />
      </div>

      <div ref={timelineRef} className="relative max-w-7xl mx-auto px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[var(--color-secondary-light)] hidden lg:block">
          <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-accent-light)] via-[var(--color-foreground)] to-[var(--color-accent-light)]" />
        </div>

        <div className="absolute left-4 top-0 w-[2px] h-full bg-[var(--color-secondary-light)] lg:hidden">
          <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-accent-light)] via-[var(--color-foreground)] to-[var(--color-accent-light)]" />
        </div>

        <div className="space-y-12 lg:space-y-20">
          {timelines.map((value, index) => (
            <div
              key={`${value.name}-${index}`}
              className={`relative flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                <div className="relative">
                  <div className="w-6 h-6 bg-[var(--color-background)] border-4 border-[var(--color-foreground)] rounded-full shadow-xl" />
                  <div className="absolute inset-0 w-6 h-6 bg-[var(--color-foreground)] rounded-full animate-ping opacity-20" />
                </div>
              </div>

              <div className="hidden lg:block lg:w-1/2" />
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <ModernTimelineCard value={value} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-24 text-center">
        <p className="text-[var(--color-secondary)] font-mono text-sm">
          • {getUniqueCompanies()} Companies • Full Stack Development
        </p>
      </div>
    </section>
  );
}

interface SkillsMap {
  [jobtitle: string]: string[];
}

function getSkillsForJob(jobtitle: string): string[] {
  const skillsMap: SkillsMap = {
    'Full Stack Developer': ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
    'SDE-HTML': ['HTML5', 'CSS3', 'Shopify', 'Flutter', 'Responsive Design'],
    'Flutter Devloper': ['Flutter', 'Dart', 'MySQL', 'Laravel', 'API Development'],
    'Junior Devloper': ['HTML', 'CSS', 'Flutter', 'Firebase', 'MySQL'],
  };
  return skillsMap[jobtitle] || ['Development'];
}

function getUniqueCompanies() {
  return new Set(timelines.map((t) => t.name)).size;
}
