import Link from 'next/link'
import style from './admin.module.css'

export default async function Admin() {
    return (
        <div className={style.adminpage}>
            <div className={style.adminitem}>
                <button className={`${style.button} ${style.active}`}>Users</button>
                <button className={style.button}>Projects</button>
                <button className={style.button}>Timelines</button>
            </div>
            <div className={style.admindetails}></div>
        </div>
    )
}