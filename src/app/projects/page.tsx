import Image from 'next/image';
import style from '@/styles/projects.module.css'
import { GET } from '../api/projects/route';

const Projects = async () => {

    const projects = await GET()

    return (
        <div className={style.project}>
            {
                projects instanceof Array ?
                projects.map((value : any) => {
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
                }): <p>NO data</p>
            }
        </div>
    )
}

export default Projects;