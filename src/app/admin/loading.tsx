"use client";

import style from '@/styles/admin.module.css';

const Loading = ({ activeButton , setActiveButton}: { activeButton: any, setActiveButton: any}) => {

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={style.adminpage}>
            <div className={style.adminitem}>
            <button
                    className={`${style.button} ${activeButton === 'Users' ? style.active : ''}`}
                    onClick={() => handleButtonClick('Users')}
                >
                    Users
                </button>
                <button
                    className={`${style.button} ${activeButton === 'Projects' ? style.active : ''}`}
                    onClick={() => handleButtonClick('Projects')}
                >
                    Projects
                </button>
                <button
                    className={`${style.button} ${activeButton === 'Timelines' ? style.active : ''}`}
                    onClick={() => handleButtonClick('Timelines')}
                >
                    Timelines
                </button>
            </div>
            <div className={style.admindetails}>
                <h1>Loading...</h1>
            </div>
        </div>
    );
}

export default Loading;