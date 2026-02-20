"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("../app/about/page"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading About...</div>,
});
const Projects = dynamic(() => import("../app/projects/page"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading Projects...</div>,
});
const Timeline = dynamic(() => import("../app/timeline/page"), {
    loading: () => <div className="h-40 flex items-center justify-center">Loading Timeline...</div>,
});

export default function LazySections() {
    return (
        <>
            <About />
            <Projects />
            <Timeline />
        </>
    );
}
