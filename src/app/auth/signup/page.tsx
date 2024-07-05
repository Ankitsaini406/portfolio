import { userRegistrationSchema } from '@/lib/validation/uservalidation';
import style from '../auth.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { z } from 'zod';

type TUserRegistrationSchema = z.infer<typeof userRegistrationSchema>;

const Signuppage = () => {

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phonenumber : event.target.phonenumber.value,
            password: event.target.password.value,
            re_password: event.target.re_password.value,
            isAdmin : false,
        };

        try {
            userRegistrationSchema.parse(formData);
            console.log(`Data is submit`);
        } catch (error) {
            console.log(`${error}`);
        }
    }

    return (
        <div className={style.signuppage}>
            <h1>Signup Page</h1>
            <form className={style.loginform} onSubmit={(event) => handleSubmit(event)}>
                <input className={style.logininput} placeholder='Name' name='name' type="name" />
                <input className={style.logininput} placeholder='Email' name='email' type="email" />
                <input className={style.logininput} placeholder='Phone Number' name='phonenumber' type="number" />
                <input className={style.logininput} placeholder='Password' name='password' type="password" />
                <input className={style.logininput} placeholder='Re-Password' name='re_password' type="password" />
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