import Link from 'next/link';
import style from '../auth.module.css'
import handleLogin from './logindata';


const LoginPage = () => {
    return (
        <div className={style.loginpage}>
            <h1>Login Page</h1>
            <form className={style.loginform} onSubmit={(event) => handleLogin(event)}>
            <input className={style.logininput} placeholder='Email' type="email" name='email' />
                <input className={style.logininput} placeholder='Password' type="password" name='password' />
                <button className={style.loginbutton}>Login</button>
                <Link className={style.forgetlink} href={''}>Forget Your Password? </Link>
            </form>
        </div>
    )
}

export default LoginPage;