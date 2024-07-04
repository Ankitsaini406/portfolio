import Link from 'next/link';
import style from '../auth.module.css'


const LoginPage = () => {
    return (
        <div className={style.loginpage}>
            <h1>Login Page</h1>
            <form className={style.loginform} action="">
            <input className={style.logininput} placeholder='Email' type="email" />
                <input className={style.logininput} placeholder='Password' type="password" />
                <button className={style.loginbutton}>Login</button>
                <Link className={style.forgetlink} href={''}>Forget Your Password? </Link>
            </form>
        </div>
    )
}

export default LoginPage;