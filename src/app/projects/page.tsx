import Image from 'next/image';
import style from './projects.module.css'
import ProjectsDetails from '@/lib/project';

const Projects = () => {
    return (
        <div className={style.project}>
            {
                ProjectsDetails.map((project) => {
                    return (
                        <div key={project.name} className={style.projectbox}>
                    <div className={style.imagecontainor}>
                    <div className={style.imagebox}>
                    {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                    </div>
                </div>
                <div className={style.projectdetails}>
                    <h1 className={style.projectname}>{project.name}</h1>
                    <p className={style.projecttext}>{project.discription}</p>
                </div>
            </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;