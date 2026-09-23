import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | Ankit Saini Portfolio",
    description: "Terms of service and intellectual property guidelines for visitors to Ankit Saini's professional portfolio.",
    alternates: {
        canonical: "/terms",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <main className="relative min-h-screen pt-36 pb-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/5 text-xs font-mono uppercase tracking-widest text-secondary">
                        <FileCheck className="w-3.5 h-3.5 text-foreground" />
                        <span>Site Governance</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-sm font-mono text-muted">
                        Effective Date: January 1, 2024 • Last Updated: September 23, 2026
                    </p>
                </div>

                <div className="space-y-8 text-secondary leading-relaxed text-sm md:text-base border-t border-border pt-8">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and viewing this website (<a href="https://ankitsaini.vercel.app" className="underline text-foreground">ankitsaini.vercel.app</a>), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue your use of the website.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">2. Intellectual Property Rights</h2>
                        <p>
                            All content on this site—including but not limited to written articles, case studies, project architectures, logos, code snippets, visual designs, and media—is the intellectual property of <strong>Ankit Saini</strong> unless otherwise credited.
                        </p>
                        <p>
                            Open-source software projects and libraries showcased on this website are distributed under their respective licenses (e.g., MIT, Apache 2.0) as documented in their corresponding GitHub repositories.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">3. Permitted Use</h2>
                        <p>
                            You may view, browse, and evaluate the materials on this site solely for personal, informational, recruitment, or professional evaluation purposes. You may not reproduce, distribute, or create derivative commercial works from proprietary portfolio content without prior written permission.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">4. Disclaimer of Warranties</h2>
                        <p>
                            This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. While I endeavor to keep information accurate and up to date, I do not warrant that all content is free from errors or omissions.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">5. Inquiries &amp; Legal Contact</h2>
                        <p>
                            For inquiries concerning project licensing, permissions, or terms, please contact:
                        </p>
                        <p className="font-mono text-sm text-foreground">
                            Email: <a href="mailto:as.ankitsaini406@gmail.com" className="underline">as.ankitsaini406@gmail.com</a> • <Link href="/contact" className="underline">Contact Page</Link>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
