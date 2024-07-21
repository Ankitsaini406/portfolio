"use client";

import React, { useState } from 'react';
import UserDetails from '../../components/admin/users/UserDetails';
import style from '@/styles/admin.module.css';
import useUsers from '@/lib/hook/useUsers';
import ProjectDetails from '../../components/admin/project/ProjectDetails';
import TimelineDetails from '../../components/admin/timeline/TimelineDetails';
import Loading from './loading';
import ErrorComponent from './error';

const Admin = () => {
    const { users, loading, error, deleteUser } = useUsers();
    const [activeButton, setActiveButton] = useState('Users');

    if (loading) {
        return <Loading activeButton={activeButton} setActiveButton={setActiveButton} />;
    }

    if (error) {
        return <div>Error : ${error}</div>
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
            <div className={style.admindetails}>
                {activeButton === 'Users' ? (
                    <UserDetails users={users} onDelete={deleteUser} />
                ) : activeButton === 'Projects' ? (
                    <ProjectDetails />
                ) : (
                    <TimelineDetails />
                )}
            </div>
        </div>
    );
};

export default Admin;
