"use client"

import { useEffect, useState } from "react";
import { SessionUser } from "../types";

const getUserSession = async (): Promise<SessionUser | null> => {
    const res = await fetch('http://localhost:3000/api/users/signup', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // This ensures cookies are sent with the request
    });

    if (res.status === 401) {
        // Handle unauthorized access
        console.error('Unauthorized: No token found or invalid token');
        return null;
    }

    const data = await res.json();

    if (data.data === undefined) {
        return null;
    }

    const sessionData: SessionUser = {
        _id: data.data._id,
        name: data.data.name,
        email: data.data.email,
        phonenumber: data.data.phonenumber,
        password: data.data.password,
        re_password: data.data.re_password,
        isAdmin: data.data.isAdmin,
    };

    return sessionData;
};

const useUserSession = (): [SessionUser | null, boolean] => {
    const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getUserSession();
            setSessionUser(session);
            setLoading(false);
        };

        fetchSession();
    }, []);

    return [sessionUser, loading];
};

export default useUserSession;
