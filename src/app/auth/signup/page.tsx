"use client"

import style from '@/styles/auth.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import handleSubmit from './submitdata';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const Signuppage = () => {

    const [visibale, setVisibale] = useState(false);
    const [revisibale, setReVisibale] = useState(false);

    const changePass = () => {
        setVisibale(!visibale);
    }

    const reChangePass = () => {
        setReVisibale(!revisibale);
    }

    return (
        <div className={style.signuppage}>
            <h1>Signup Page</h1>
            <form className={style.loginform} onSubmit={(event) => handleSubmit(event)}>
                <input className={style.logininput} placeholder='Name' name='name' type="name" />
                <input className={style.logininput} placeholder='Email' name='email' type="email" />
                <input className={style.logininput} placeholder='Phone Number' name='phonenumber' type="number" />
                <label className={style.lableName}>
                <input className={style.logininput} style={{ width: '-webkit-fill-available'}} placeholder='Password' name='password' type={visibale ? "text" : "password"} />
                <span className={style.passicon} onClick={changePass}>{visibale ? <VisibilityIcon /> :<VisibilityOffIcon />}</span>
                </label>
                <label className={style.lableName}>
                <input className={style.logininput} style={{ width: '-webkit-fill-available'}} placeholder='Re-Password' name='re_password' type={revisibale ? "text" : "password"} />
                <span className={style.passicon} onClick={reChangePass}>{revisibale ? <VisibilityIcon /> :<VisibilityOffIcon />}</span>
                </label>
                <button className={style.loginbutton}>Sign&nbsp;Up</button>
                <p>Or</p>
                <div className={style.icon}>
                <GitHubIcon className={style.socialIcon}/>
                <GoogleIcon className={style.socialIcon}/>
                </div>
            </form>
        </div>
    )
}

export default Signuppage;