import Link from 'next/link';
import style from '../auth.module.css'


const LoginPage = () => {
    return (
        <div className={style.loginpage}>
            <h1>Login Page</h1>
            <form className={style.loginform} action="">
                <input className={style.logininput} placeholder='email' type="email" />
                <input className={style.logininput} placeholder='password' type="password" />
                <button className={style.loginbutton}>Login</button>

                <Link className={style.forgetlink} href={''}>Forget Your Password? </Link>
            </form>
        </div>
    )
}

export default LoginPage;