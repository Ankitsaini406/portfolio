import type { Metadata } from "next";
import TimelineSection from "./TimelineSection";

export const metadata: Metadata = {
    title: "Experience | Ankit Saini - Full-Stack Developer",

    description:
        "Explore Ankit Saini's professional experience as a Full-Stack Developer, including work with Next.js, React, Node.js, Flutter, Firebase, AWS, and scalable web and mobile applications.",

    keywords: [
        // Personal
        "Ankit Saini Experience",
        "Ankit Saini Work Experience",
        "Ankit Saini Professional Experience",
        "Ankit Saini Career",
        "Ankit Saini Full Stack Developer",

        // General
        "Full Stack Developer Experience",
        "Full Stack Developer Career",
        "Software Developer Experience",
        "Web Developer Experience",
        "React Developer Experience",
        "Next.js Developer Experience",

        // Technologies
        "Next.js Developer",
        "React Developer",
        "Node.js Developer",
        "Flutter Developer",
        "Firebase Developer",
        "AWS Developer",
        "TypeScript Developer",

        // Location
        "Full Stack Developer India",
        "React Developer India",
        "Next.js Developer India",
        "Flutter Developer India",
    ],

    alternates: {
        canonical: "/timeline",
    },

    openGraph: {
        title: "Experience & Timeline | Ankit Saini - Full-Stack Developer",

        description:
            "Explore Ankit Saini's professional journey, technical experience, and work building scalable web and mobile applications with modern full-stack technologies.",

        url: "/timeline",

        type: "profile",

        images: [
            {
                url: "/icons/apple-touch-icon.png",
                width: 512,
                height: 512,
                alt: "Ankit Saini - Professional Experience",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Experience & Timeline | Ankit Saini - Full-Stack Developer",

        description:
            "Explore Ankit Saini's professional journey and experience building web and mobile applications with Next.js, React, Node.js, Flutter, AWS, and Firebase.",

        images: ["/icons/apple-touch-icon.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function ExperiencePage() {
    return <TimelineSection />;
}