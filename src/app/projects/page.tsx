import Image from 'next/image';
import style from './projects.module.css'

const Projects = () => {
    return (
        <div className={style.project}>
            <div className={style.projectbox}>
                <div className={style.imagecontainor}>
                    <div className={style.imagebox}>
                    {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                    </div>
                </div>
                <div className={style.projectdetails}>
                    <h1 className={style.projectname}>Shri Umeshsons</h1>
                    <p className={style.projecttext}>This project is make in Flutter. Client need to app and web app for his store he need to the app and web application</p>
                </div>
            </div>
            <div className={style.projectbox}>
                <div className={style.imagecontainor}>
                    <div className={style.imagebox}>
                    {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                    </div>
                </div>
                <div className={style.projectdetails}>
                    <h1 className={style.projectname}>Shri Umeshsons</h1>
                    <p className={style.projecttext}>This project is make in Flutter. Client need to app and web app for his store he need to the app and web application</p>
                </div>
            </div>
            <div className={style.projectbox}>
                <div className={style.imagecontainor}>
                    <div className={style.imagebox}>
                    {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                    </div>
                </div>
                <div className={style.projectdetails}>
                    <h1 className={style.projectname}>Shri Umeshsons</h1>
                    <p className={style.projecttext}>This project is make in Flutter. Client need to app and web app for his store he need to the app and web application</p>
                </div>
            </div>
            <div className={style.projectbox}>
                <div className={style.imagecontainor}>
                    <div className={style.imagebox}>
                    {/* <Image className={style.projectimg} width={1000} height={1000} src='' alt='Project'></Image> */}
                    </div>
                </div>
                <div className={style.projectdetails}>
                    <h1 className={style.projectname}>Shri Umeshsons</h1>
                    <p className={style.projecttext}>This project is make in Flutter. Client need to app and web app for his store he need to the app and web application</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;