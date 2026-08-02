"use client";

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("../app/about/AboutSection"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading About...</div>,
});
const ProjectSection = dynamic(() => import("../app/projects/ProjectSection"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading Projects...</div>,
});
const TimelineSection = dynamic(() => import("../app/timeline/TimelineSection"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading Timeline...</div>,
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
