import style from '@/styles/admin.module.css';

const ProjectDetails = () => {
    return (
        <div className={style.projectdetails}>
            <div className={style.imgbox}>

            </div>
            <input className={style.inputbox} type="text" />
            <textarea className={`${style.inputbox} ${style.desbox}`} />
            <div className={style.btnflex}>
            <button className={`${style.submitbutton} ${style.cancolor}`}>Cancal</button>
            <button className={`${style.submitbutton} ${style.subcolor}`}>Submit</button>
            </div>
        </div>
    )
}

export default ProjectDetails;