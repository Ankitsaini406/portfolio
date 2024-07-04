
type SignupDetailsProps = {
    colorChange: () => void;
}

const SignupDetails: React.FC<SignupDetailsProps> = ({colorChange}) => {
    return (
        <div>
            <h1>Hello !</h1>
            <p>Register with your personal details to use all of site features</p>
            <button onClick={colorChange}>Sign Up</button>
        </div>
    )
}

export default SignupDetails;