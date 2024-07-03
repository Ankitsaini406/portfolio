

type LoginDetailsProps = {
    colorChange: () => void;
}

const LoginDetails: React.FC<LoginDetailsProps> = ({ colorChange }) => {
    return (
        <div>
            <h1>Login Details</h1>
            <button onClick={colorChange}>Login Button</button>
        </div>
    )
}

export default LoginDetails;