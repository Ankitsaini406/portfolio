"use client";

import Image from 'next/image';
import style from '@/styles/projects.module.css'
import { useEffect, useState } from 'react';
import { Projectsdetial } from '@/lib/types/allTypes';
import Loading from './loading';

const Projects = () => {

    const [projects, setProjects] = useState<Projectsdetial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                const data = await res.json();
                if (data.success) {
                    setProjects(data.data);
                } else {
                    console.error(data.error);
                }

            } catch (error) {
                return (
                    <div>
                        <h1>{`Error : ${error}`}</h1>
                    </div>
                )
            } 
            finally {
                setLoading(false);
            }

        };
        fetchProjects();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div className={style.project}>
            {
                // projects instanceof Array ?
                    projects.map((value: any) => {
                        return (
                            <div key={value.name} className={style.projectbox}>
                                <div className={style.imagecontainor}>
                                    <div className={style.imagebox}>
                                        {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                                    </div>
                                </div>
                                <div className={style.projectdetails}>
                                    <h1 className={style.projectname}>{value.name}</h1>
                                    <p className={style.projecttext}>{value.discription}</p>
                                </div>
                            </div>
                        )
                    }) 
                    // : <p>NO data</p>
            }
        </div>
    )
}

export default Projects;