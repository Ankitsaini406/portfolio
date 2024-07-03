
type SignupDetailsProps = {
    colorChange: () => void;
}

const SignupDetails: React.FC<SignupDetailsProps> = ({colorChange}) => {
    return (
        <div>
            <h1>Signup Details</h1>
            <button onClick={colorChange}>Sign Button</button>
        </div>
    )
}

export default SignupDetails;