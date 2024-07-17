"use client";

import { useState } from "react";
import style from '@/styles/auth.module.css';
import Signuppage from "./signup/page";
import LoginPage from "./login/page";
import LoginDetails from "./login/Logindetails";
import SignupDetails from "./signup/Signupdetails";

const AuthPage = () => {
    const [change, setColor] = useState(false);

    const colorChange = () => {
        setColor(!change);
    };

    return (
        <div className={style.authpage}>
            <div className={`${style.login} ${change ? `${style.active} ${style.togleleft}` : style.togleleft}`}>
            { change ? <LoginDetails colorChange={colorChange}/> : <LoginPage />}
                
            </div>
            <div className={`${style.signup} ${change ? style.togleright : `${style.active} ${style.togleright}`}`}>
            { change ? <Signuppage /> : <SignupDetails colorChange={colorChange}/>}
            </div>
        </div>
    );
};

export default AuthPage;
