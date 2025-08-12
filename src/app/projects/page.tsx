"use client"

import Image from 'next/image';
import { Projectsdetial } from '@/lib/types/types';
import { projects } from '@/lib/data/projects';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import Link from 'next/link';

export default function Projects() {
    const sortedProjects = [...projects].sort((a, b) => Number(b.id) - Number(a.id));

    return (
        <section className="max-w-7xl mx-auto py-24 px-6" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                    My Projects
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Explore my latest work and creative solutions
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProjects.map((project: Projectsdetial) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -5 }}
                        className="group relative rounded-2xl bg-gradient-to-b from-gray-900 to-gray-950 p-1 overflow-hidden border border-gray-800 shadow-xl"
                    >
                        <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
                            <Image
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <div className="flex gap-2">
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                        >
                                            <BiLink className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                            {/* <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags?.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div> */}
                        </div>

                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_at_50%_120px,#3b82f640_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}