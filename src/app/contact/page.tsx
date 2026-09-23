import ContactForm from "./ContactForm";
import { ContactPageSchema, PersonSchema } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Ankit Saini | Hire Full-Stack Developer & UI/UX Architect",
    description:
        "Get in touch with Ankit Saini for full-stack engineering roles, Next.js architecture consulting, and high-performance web/mobile development.",
    keywords: [
        "Contact Ankit Saini",
        "Hire Ankit Saini",
        "Hire Full Stack Developer",
        "Hire Next.js Developer India",
        "Hire React Developer",
        "Software Engineering Consultant",
    ],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Ankit Saini | Full-Stack Developer & Architect",
        description:
            "Available for senior engineering positions, technical consulting, and high-impact web and mobile projects.",
        url: "/contact",
        type: "profile",
        images: [
            {
                url: "/icons/apple-touch-icon.png",
                width: 1200,
                height: 630,
                alt: "Contact Ankit Saini",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Ankit Saini | Full-Stack Developer",
        description:
            "Inquire about full-stack web and mobile engineering collaborations.",
        images: ["/icons/apple-touch-icon.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen pt-36 pb-24 px-6 overflow-hidden">
            {/* Structured Schema */}
            <ContactPageSchema />
            <PersonSchema />

            {/* Ambient background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/svg/noise.svg')] mix-blend-overlay" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary/5 text-xs font-mono uppercase tracking-widest text-secondary">
                        <span>Get In Touch</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                        Let&apos;s Build Something <br />
                        <span className="text-secondary">Exceptional.</span>
                    </h1>

                    <p className="text-base md:text-lg text-secondary leading-relaxed">
                        Currently available for senior full-stack roles, architecture consulting, and selective enterprise engineering projects.
                    </p>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}
