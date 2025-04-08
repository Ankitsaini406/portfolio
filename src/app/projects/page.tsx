"use client";

import Image from 'next/image';
import style from '@/styles/projects.module.css'
import { Projectsdetial } from '@/lib/types/types';
import { projects } from '@/lib/data/projects';

export default function Projects() {

    return (
        <div className={style.project} id="projects">
            {
                // projects instanceof Array ?
                projects.map((project: Projectsdetial) => {
                    return (
                        <div key={project._id} className={style.projectbox}>
                            <div className={style.imagecontainor}>
                                <div className={style.imagebox}>
                                    <Image className={style.projectimg} width={1000} height={1000} src={`/projects/${project.image}`} alt={project.name}></Image>
                                </div>
                            </div>
                            <div className={style.projectdetails}>
                                <h1 className={style.projectname}>{project.name}</h1>
                                <p className={style.projecttext}>{project.description}</p>
                            </div>
                        </div>
                    )
                })
                // : <p>NO data</p>
            }
        </div>
    )
}