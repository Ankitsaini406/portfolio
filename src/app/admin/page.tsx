"use client";

import { useEffect, useState } from 'react';
import style from './admin.module.css';
import UserDetails from './UserDetails';
import useUsers from '@/lib/hook/useUsers';

export default function Admin() {
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
                <UserDetails users={users} onDeleteUser={deleteUser}/>
            </div>
        </div>
    );
}
