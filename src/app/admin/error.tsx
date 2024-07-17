"use client";

import React from 'react';
import style from '@/styles/admin.module.css';

const ErrorComponent = ({ activeButton, error, setActiveButton } : {activeButton: any, error: any, setActiveButton: any}) => {
    return (
        <div className={style.adminpage}>
            <div className={style.adminitem}>
                <button
                    className={`${style.button} ${activeButton === 'Users' ? style.active : ''}`}
                    onClick={() => setActiveButton('Users')}
                >
                    Users
                </button>
                <button
                    className={`${style.button} ${activeButton === 'Projects' ? style.active : ''}`}
                    onClick={() => setActiveButton('Projects')}
                >
                    Projects
                </button>
                <button
                    className={`${style.button} ${activeButton === 'Timelines' ? style.active : ''}`}
                    onClick={() => setActiveButton('Timelines')}
                >
                    Timelines
                </button>
            </div>
            <div className={style.admindetails}>
                <div className={style.errorMessage}>
                    {error}
                </div>
            </div>
        </div>
    );
};

export default ErrorComponent;
