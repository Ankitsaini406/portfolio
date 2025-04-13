"use client"

import Image from 'next/image';
import { Projectsdetial } from '@/lib/types/types';
import { projects } from '@/lib/data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className="max-w-[1200px] mx-auto py-20 px-4" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 text-white"
            >
                My Projects
            </motion.h2>
            {projects.map((project: Projectsdetial) => (
                <motion.div
                    key={project._id}
                    className="p-4 border border-gray-700 rounded-lg mb-8 shadow-lg bg-gray-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className="relative w-[210px] aspect-square border border-gray-700 rounded-lg overflow-hidden cursor-pointer float-left mr-8 mb-4 sm:mr-6 sm:mb-3">
                        <div className="absolute inset-0">
                            <Image 
                                className="w-full h-full object-contain bg-white"
                                width={1000} height={1000} 
                                src={`/projects/${project.image}`} 
                                alt={project.name} 
                            />
                        </div>
                    </div>
                    <div className="text-justify">
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white"
                        >
                            {project.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg text-white first-letter:text-4xl first-letter:mr-2 first-letter:text-white"
                        >
                            {project.description}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
