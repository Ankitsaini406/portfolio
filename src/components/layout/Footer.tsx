"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {

    const container = useRef(null);
    const texts = useRef<(SVGTextPathElement | null)[]>([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })
    const [translateOffset, setTranslateOffset] = useState(-300);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setTranslateOffset(-200);
            } else if (width < 1024) {
                setTranslateOffset(-350);
            } else {
                setTranslateOffset(-700);
            }
        };

        handleResize(); // set on first load
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], [translateOffset, 0]);

    useEffect(() => {
        scrollYProgress.on('change', e => {
            texts.current.forEach((text, i) => {
                text?.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [scrollYProgress])


    return (
            <div ref={container}>
                <svg viewBox="0 0 250 90">
                    <path id="curve" fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                    <text className="text-[6px] uppercase" fill="white">
                        {
                            [...Array(3)].map((_, i) => {
                                return <textPath key={i} ref={ref => { texts.current[i] = ref; }} href="#curve" startOffset={i * 40 + "%"}>Let&apos;s talk about your project</textPath>
                            })
                        }
                    </text>
                </svg>

            <div className="bg-gray-900 overflow-hidden">
                <motion.div style={{y}} className="flex flex-col items-center gap-8 py-8 mt-4">
                <div>
                    <a
                        className="text-white text-lg hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:as.ankitsaini406@gmail.com"
                        >
                        as.ankitsaini406@gmail.com
                    </a>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://www.linkedin.com/in/web-ankit-saini/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-gray-400 transition"
                        >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        href="https://github.com/Ankitsaini406"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-gray-400 transition"
                        >
                        <FaGithub />
                    </Link>
                </div>
                        </motion.div>
            </div>
            </div>
    );
};
