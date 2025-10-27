"use client";

import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/navigation";

export default function NotFound() {

    const router = useRouter();
    useEffect(() => {
        const t = setTimeout(() => {
            router.push("/");
        }, 8000);
        return () => clearTimeout(t);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-background shadow-foreground/10 shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                <div className="flex items-start gap-6">
                    <div className="text-6xl font-extrabold text-foreground">404</div>
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground/80">Page not found</h2>
                        <p className="mt-2 text-foreground/50">
                            Sorry, I couldn’t find the page you were looking for. You can go back to the homepage or check out my projects.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <Link href="/" className="px-4 py-2 bg-background text-foreground rounded-md">Home</Link>
                            <Link href="/#projects" className="px-4 py-2 border rounded-md">Projects</Link>
                            <Link href="mailto:as.ankitsaini406@gmail.com" className="px-4 py-2">Contact</Link>
                        </div>

                        <div className="mt-4 text-sm text-foreground/40">
                            Or try searching the site: <code className="bg-foreground/10 px-2 py-1 rounded">/search</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
