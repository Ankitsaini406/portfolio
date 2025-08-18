"use client";

import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {

    const container = useRef(null);
    const texts = useRef<(SVGTextPathElement | null)[]>([]);


    return (
        <div ref={container}>
            <svg viewBox="0 0 250 90">
                <path id="curve" fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                <text className="text-[6px] uppercase" fill="black">
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => { texts.current[i] = ref; }} href="#curve" startOffset={i * 40 + "%"}>Let&apos;s talk about your project</textPath>
                        })
                    }
                </text>
            </svg>

            <div className="bg-footer overflow-hidden">
                <div className="flex flex-col items-center gap-8 py-8 mt-4">
                    <div>
                        <Link
                            className="text-lg hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:as.ankitsaini406@gmail.com"
                        >
                            as.ankitsaini406@gmail.com
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/web-ankit-saini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-accent transition"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            href="https://github.com/Ankitsaini406"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-accent transition"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
