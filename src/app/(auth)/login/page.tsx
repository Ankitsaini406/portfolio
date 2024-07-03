"use client";

import { useState } from "react";
import style from "../auth.module.css";
import Signuppage from "../signup/page";
import Login from "./Login";

const Loginpage = () => {
    const [change, setColor] = useState(false);

    const colorChange = () => {
        setColor(!change);
    };

    return (
        <div className={style.authpage}>
            <div className={style.login}>
            { change ? <Login /> : <button onClick={() => colorChange()}>Login Button</button>}
                
            </div>
            <div className={style.signup}>
            { change ? <button onClick={() => colorChange()}>Sign Button</button> : <Signuppage />}
            </div>
        </div>
    );
};

export default Loginpage;
