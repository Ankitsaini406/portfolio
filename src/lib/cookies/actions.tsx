
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

    console.log('Request Headers:', res.headers);
    console.log('Response Status:', res.status);

    if (res.status === 401) {
        // Handle unauthorized access
        console.error('Unauthorized: No token found or invalid token');
        return null;
    }

    const data = await res.json();

    // Properly log the data
    console.log('this is console log data:', data);

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


export const login = async () => {}

export const logout = async () => { }