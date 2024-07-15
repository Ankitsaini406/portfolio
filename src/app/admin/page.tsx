"use client"

import React, { useState } from 'react';
import UserDetails from './UserDetails';
import style from './admin.module.css';
import useUsers from '@/lib/hook/useUsers';
import ProjectDetails from './ProjectDetails';
import TimelineDetails from './TimelineDetails';

const Admin = () => {
    const { users, loading, error, deleteUser } = useUsers();
    const [activeButton, setActiveButton] = useState('Users');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
            <div className={style.admindetails}>{
                activeButton === 'Users' ?
                    <UserDetails users={users} onDelete={deleteUser} /> : activeButton === 'Projects' ? <ProjectDetails /> : <TimelineDetails />}
            </div>
        </div>
    );
};

export default Admin;
