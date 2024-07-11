import { destroyCookie } from "nookies";
import toast from "react-hot-toast";

export type SessionUser = {
    _id?: string,
    name?: string,
    email?: string,
    phonenumber?: string,
    password?: string,
    re_password?: string,
    isAdmin?: boolean,
}

export default async function getSession(): Promise<SessionUser | null> {
    const res = await fetch('http://localhost:3000/api/users/signup', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // This ensures cookies are sent with the request
    });

    if (res.status === 401) {
        // Handle unauthorized access
        toast.error('Unauthorized: No token found or invalid token');
        return null;
    }

    const data = await res.json();

    // Properly log the data
    toast.success(`Congratulations ${data.data.name}`);

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
}


export const login = async () => { }

export const logout = async () => {
    const cookies = document.cookie.split(";");

    cookies.forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });

    destroyCookie(null, 'token');
    destroyCookie(null, 'perf_dv6Tr4n');
    localStorage.clear();
    sessionStorage.clear();

    setTimeout(() => {
        window.location.href = '/';
    },);
}