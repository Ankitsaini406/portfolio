import style from '../auth.module.css';

type LoginDetailsProps = {
    colorChange: () => void;
}

const LoginDetails: React.FC<LoginDetailsProps> = ({ colorChange }) => {
    return (
        <div className={style.signupdetails}>
            <h1>Welcome Back !</h1>
            <p className={style.text}>Enter your personal details to use all of site features</p>
            <button className={style.changebutton} onClick={colorChange}>Login</button>
        </div>
    )
}

export default LoginDetails;