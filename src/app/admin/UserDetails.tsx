import React from 'react';
import style from './admin.module.css';

const UserDetails = ({ users, onDelete }: { users: any[], onDelete: (id: string) => void }) => {

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
        event.preventDefault();
        onDelete(id);
    };

    return (
        <table className={style.contacttable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                    <th>Action</th>
                    <th>Admin</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(users) ? (
                    users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.re_password}</td>
                            <td>
                                <button onClick={(event) => handleDelete(event, user._id)} className={style.deletebtn}>
                                    Delete
                                </button>
                            </td>
                            <td>{user.isAdmin ? <p>Admin</p> : <p>User</p>}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6}>No User Found!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserDetails;
