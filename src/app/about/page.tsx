"use client";

import { useMemo } from "react";
import Image from 'next/image';
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function About() {
    const experienceYears = useMemo(() => {
        const startDate = new Date("2022-07-01");
        const now = new Date();
        const monthsDiff =
            (now.getFullYear() - startDate.getFullYear()) * 12 +
            now.getMonth() -
            startDate.getMonth();
        const years = monthsDiff / 12;
        return years < 1 ? "<1" : years.toFixed(1).replace(/\.0$/, "");
    }, []);

    return (
        <section
            id="about"
            className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12"
            >
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 rounded-lg shadow-sm">
                        <FaCode className="text-accent text-xl" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Web / App Developer
                        </span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
                    >
                        Hi, I&apos;m Ankit{" "}
                        <span className="inline-block animate-waving-hand origin-[70%_70%]">👋</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        className="text-xl text-gray-400"
                    >
                        Your dedicated web & app developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="text-base sm:text-lg leading-relaxed max-w-[700px] text-gray-300"
                    >
                        Passionate <strong>Web</strong> and <strong>Mobile</strong> Developer with{" "}
                        <strong>{experienceYears} years</strong> of hands-on experience crafting high-quality digital solutions. I specialize in developing responsive, scalable, and SEO-optimized applications using cutting-edge technologies such as <strong className="text-background bg-foreground">Next.js</strong>, <strong className="text-background bg-foreground">React.js</strong>, and <strong className="text-background bg-foreground">AWS</strong> for cloud infrastructure. I build performant cross-platform applications using <strong className="text-background bg-foreground">Flutter</strong>, integrating seamlessly with <strong className="text-background bg-foreground">Prisma</strong> and <strong className="text-background bg-foreground">Firebase</strong> for database management and real-time communication. My expertise spans building robust backend systems using both <strong className="text-background bg-foreground">MySQL</strong> and <strong className="text-background bg-foreground">MongoDB</strong>, alongside API integrations to deliver smooth and intuitive user experiences. With extensive experience in utilizing <strong className="text-background bg-foreground">Firebase</strong> for secure authentication and real-time data handling, I am dedicated to delivering high-quality, maintainable code and ensuring top-tier user experience. I thrive in collaborative environments, continuously learning and staying ahead of technology trends to deliver innovative, reliable, and efficient solutions.
                    </motion.p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-[300px] h-[450px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/images/myimage.jpg"
                            alt="Ankit Saini"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
