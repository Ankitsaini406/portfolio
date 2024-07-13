import style from './admin.module.css'
import { GET } from '../api/users/allusers/route'
import UserDetails from './UserDetails';

export default async function Admin() {

    const users = await GET();

    return (
        <div className={style.adminpage}>
            <div className={style.adminitem}>
                <button className={`${style.button} ${style.active}`}>Users</button>
                <button className={style.button}>Projects</button>
                <button className={style.button}>Timelines</button>
            </div>
            <div className={style.admindetails}>
                <UserDetails users={users} />
            </div>
        </div>
    )
}