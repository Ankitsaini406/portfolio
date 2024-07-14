"use client"

import React from 'react';
import UserDetails from './UserDetails';
import style from './admin.module.css';
import useUsers from '@/lib/hook/useUsers';

const Admin = () => {
    const { users, loading, error, deleteUser } = useUsers();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={style.adminpage}>
            <div className={style.adminitem}>
                <button className={`${style.button} ${style.active}`}>Users</button>
                <button className={style.button}>Projects</button>
                <button className={style.button}>Timelines</button>
            </div>
            <div className={style.admindetails}>
                <UserDetails users={users} onDelete={deleteUser} />
            </div>
        </div>
    );
};

export default Admin;
