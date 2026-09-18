"use client";

import dynamic from "next/dynamic";

const SectionSkeleton = () => (
    <div className="w-full py-24 px-6 max-w-7xl mx-auto animate-pulse">
        <div className="flex flex-col items-center mb-12 space-y-3">
            <div className="h-4 w-28 bg-secondary/10 rounded-full" />
            <div className="h-10 w-64 bg-secondary/15 rounded-xl" />
            <div className="h-4 w-96 max-w-full bg-secondary/10 rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-72 rounded-2xl bg-secondary/5 border border-border" />
            ))}
        </div>
    </div>
);

const AboutSection = dynamic(() => import("../app/about/AboutSection"), {
    loading: () => <SectionSkeleton />,
});
const ProjectSection = dynamic(() => import("../app/projects/ProjectSection"), {
    loading: () => <SectionSkeleton />,
});
const TimelineSection = dynamic(() => import("../app/timeline/TimelineSection"), {
    loading: () => <SectionSkeleton />,
});

export default function LazySections() {
    return (
        <>
            <AboutSection />
            <ProjectSection />
            <TimelineSection />
        </>
    );
}
