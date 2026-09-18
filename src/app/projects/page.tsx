import { Metadata } from "next";
import ProjectSection from "./ProjectSection";

export const metadata: Metadata = {
    title: "Projects | Ankit Saini - Full-Stack Developer",

    description:
        "Explore Ankit Saini's portfolio of web and mobile projects built with Next.js, React, Flutter, Node.js, Firebase, AWS, Prisma, and modern full-stack technologies.",

    keywords: [
        // Personal / portfolio
        "Ankit Saini Projects",
        "Ankit Saini Portfolio",
        "Ankit Saini Developer Portfolio",
        "Ankit Saini Full Stack Projects",

        // Developer / project intent
        "Full Stack Developer Projects",
        "Full Stack Developer Portfolio",
        "Web Development Projects",
        "Mobile App Development Projects",
        "Software Development Projects",

        // Technology-specific
        "Next.js Projects",
        "React Projects",
        "Flutter Projects",
        "Node.js Projects",
        "Firebase Projects",
        "AWS Projects",
        "Prisma Projects",
        "TypeScript Projects",

        // Location-specific
        "Full Stack Developer Projects India",
        "React Developer Portfolio India",
        "Next.js Developer Portfolio India",
    ],

    alternates: {
        canonical: "/projects",
    },

    openGraph: {
        title: "Projects | Ankit Saini - Full-Stack Developer",
        description:
            "Explore web and mobile applications built by Ankit Saini using Next.js, React, Flutter, Node.js, Firebase, AWS, and modern full-stack technologies.",
        url: "/projects",
        type: "website",
        images: [
            {
                url: "/icons/apple-touch-icon.png",
                width: 512,
                height: 512,
                alt: "Ankit Saini - Full-Stack Developer Projects",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Projects | Ankit Saini - Full-Stack Developer",
        description:
            "Explore Ankit Saini's web and mobile development projects built with modern full-stack technologies.",
        images: ["/icons/apple-touch-icon.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <ProjectSection />;
}