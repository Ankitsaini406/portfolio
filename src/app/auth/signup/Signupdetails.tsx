import style from '@/styles/auth.module.css';

type SignupDetailsProps = {
    colorChange: () => void;
}

const SignupDetails: React.FC<SignupDetailsProps> = ({colorChange}) => {
    return (
        <div className={style.signupdetails}>
            <h1>Hello !</h1>
            <p className={style.text}>Register with your personal details to use all of site features</p>
            <button className={style.changebutton} onClick={colorChange}>Sign&nbsp;Up</button>
        </div>
    )
}

export default SignupDetails;