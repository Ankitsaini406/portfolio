
import Image from 'next/image';
import { Projectsdetial } from '@/lib/types/types';
import { projects } from '@/lib/data/projects';

export default function Projects() {
    return (
        <div className="max-w-[1200px] mx-auto py-20 px-4" id="projects">
            {projects.map((project: Projectsdetial) => (
                <div key={project._id} className="p-4 border rounded-lg mb-4 shadow-md">
                    <div className="relative w-[210px] aspect-square border rounded-lg overflow-hidden cursor-pointer float-left mr-8 mb-4 sm:mr-6 sm:mb-3">
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
                        <h1 className="text-2xl font-bold text-[var(--main-color)]">{project.name}</h1>
                        <p className="text-lg text-[var(--text-color)] first-letter:text-4xl first-letter:mr-2 first-letter:text-[var(--black-color)]">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
