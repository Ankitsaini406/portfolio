import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import UserProfile from './page';
import connectToDatabase from '@/lib/mongoose/mongoose';
import UserModel from '@/lib/model/userModel';

interface Params extends ParsedUrlQuery {
    id: string;
}

interface UserProps {
    user: {
        name: string;
        email: string;
        // other user properties
    } | null;
}

const UserPage: React.FC<UserProps> = ({ user }) => {
    return <UserProfile user={user} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as Params;  // Cast context.params to Params type

    await connectToDatabase();

    const user = await UserModel.findById(id).lean();

    if (!user) {
        return {
            props: {
                user: null,
            },
        };
    }

    return {
        props: {
            user: {
                name: user.name,
                email: user.email,
                // add other user properties here
            },
        },
    };
};

export default UserPage;

