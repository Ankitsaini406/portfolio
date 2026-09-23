import AboutSection from "@/app/about/AboutSection";
import FAQSection from "@/components/faq/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Ankit Saini | Senior Full-Stack Software Engineer & UI/UX Architect",

    description:
        "Learn more about Ankit Saini, a Full-Stack Engineer with 3.5+ years of experience building scalable web and mobile applications with Next.js, React, TypeScript, Flutter, Node.js, Firebase, and AWS.",

    keywords: [
        "About Ankit Saini",
        "Ankit Saini Full Stack Developer",
        "Ankit Saini React Developer",
        "Ankit Saini Next.js Developer",
        "Full Stack Developer India",
        "React Developer India",
        "Next.js Developer India",
    ],

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About Ankit Saini | Senior Full-Stack Engineer",
        description:
            "Discover Ankit Saini's background, credentials, technical principles, and production architecture portfolio.",
        url: "/about",
        type: "profile",
        images: [
            {
                url: "/icons/apple-touch-icon.png",
                width: 1200,
                height: 630,
                alt: "Ankit Saini - Full-Stack Developer",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Ankit Saini | Full-Stack Developer",
        description:
            "Senior Full-Stack Developer specializing in Next.js, React, Flutter, Node.js, Firebase, and AWS.",
        images: ["/icons/apple-touch-icon.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <>
            <AboutSection />
            <FAQSection />
        </>
    );
}