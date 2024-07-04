import style from '../auth.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Signuppage = () => {
    return (
        <div className={style.signuppage}>
            <h1>Signup Page</h1>
            <form className={style.loginform} action="">
                <input className={style.logininput} placeholder='Name' type="name" />
                <input className={style.logininput} placeholder='Email' type="email" />
                <input className={style.logininput} placeholder='Phone Number' type="number" />
                <input className={style.logininput} placeholder='Password' type="password" />
                <input className={style.logininput} placeholder='Re-Password' type="password" />
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