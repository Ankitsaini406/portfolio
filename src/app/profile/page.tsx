import React from 'react';

interface UserProps {
    user: {
        name: string;
        email: string;
        // other user properties
    } | null;
}

const UserProfile: React.FC<UserProps> = ({ user }) => {
    if (!user) {
        return (
            <div>
                <p>User data is not available.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            {/* other user details */}
        </div>
    );
};

export default UserProfile;
