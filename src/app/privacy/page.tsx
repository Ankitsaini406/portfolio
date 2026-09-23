import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Ankit Saini Portfolio",
    description: "Privacy policy and data collection transparency guidelines for Ankit Saini's personal portfolio website.",
    alternates: {
        canonical: "/privacy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen pt-36 pb-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/5 text-xs font-mono uppercase tracking-widest text-secondary">
                        <Shield className="w-3.5 h-3.5 text-foreground" />
                        <span>Trust &amp; Transparency</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm font-mono text-muted">
                        Effective Date: January 1, 2024 • Last Updated: September 23, 2026
                    </p>
                </div>

                <div className="space-y-8 text-secondary leading-relaxed text-sm md:text-base border-t border-border pt-8">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">1. Overview</h2>
                        <p>
                            This Privacy Policy outlines how Ankit Saini (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) handles information gathered through this portfolio website (<a href="https://ankitsaini.vercel.app" className="underline text-foreground">ankitsaini.vercel.app</a>). I respect your privacy and am committed to transparency regarding any data collected during your visit.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">2. Information Collected</h2>
                        <p>
                            This website operates with minimal data collection:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Voluntarily Provided Information:</strong> When you contact me via email or submit a form on the <Link href="/contact" className="underline text-foreground">Contact page</Link>, I receive the details you choose to provide (such as your name, email address, and project requirements).
                            </li>
                            <li>
                                <strong>Technical &amp; Analytics Data:</strong> Standard server logs and privacy-preserving performance telemetry (such as browser type, page views, and Core Web Vitals) may be processed to monitor website reliability and uptime. No invasive tracking cookies or cross-site tracking tools are used.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">3. How Information is Used</h2>
                        <p>
                            Any information you share is used strictly to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to inquiries, job opportunities, or collaboration proposals.</li>
                            <li>Deliver and maintain optimal site performance and security.</li>
                            <li>Comply with legitimate legal and regulatory obligations.</li>
                        </ul>
                        <p>
                            I never sell, rent, or monetize your personal information or contact details with third-party marketers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">4. Third-Party Services &amp; Hosting</h2>
                        <p>
                            This website is deployed on Vercel and may link to external platforms (such as GitHub, LinkedIn, or project demonstration links). These external sites maintain their own privacy practices, and I encourage you to review their respective policies.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">5. Contact Information</h2>
                        <p>
                            If you have questions or requests regarding your personal information, please reach out directly:
                        </p>
                        <p className="font-mono text-sm text-foreground">
                            Email: <a href="mailto:as.ankitsaini406@gmail.com" className="underline">as.ankitsaini406@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
