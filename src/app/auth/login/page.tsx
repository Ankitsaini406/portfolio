"use client"

import Link from 'next/link';
import style from '../auth.module.css'
import handleLogin from './logindata';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';


const LoginPage = () => {

    const [visibale, setVisibale] = useState(false);

    const changePass = () => {
        setVisibale(!visibale);
    }

    return (
        <div className={style.loginpage}>
            <h1>Login Page</h1>
            <form className={style.loginform} onSubmit={(event) => handleLogin(event)}>
            <input className={style.logininput} placeholder='Email' type="email" name='email' />
            <label className={style.lableName}>
                <input className={style.logininput} style={{ width: '-webkit-fill-available'}} placeholder='Password' type={visibale ? "text" : "password"} name='password' />
                <span className={style.passicon} onClick={changePass}>{visibale ? <VisibilityIcon /> :<VisibilityOffIcon />}</span>
            </label>
                <button className={style.loginbutton}>Login</button>
                <Link className={style.forgetlink} href={''}>Forget Your Password? </Link>
            </form>
        </div>
    )
}

export default LoginPage;