
export type SessionUser = {
    _id?: string,
    name?: string,
    email?: string,
    phonenumber?: string,
    password?: string,
    re_password?: string,
    isAdmin?: boolean,
}

export const getSession = async (): Promise<SessionUser | null> => {
    const res = await fetch('/api/users/signup', {
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

    const sessionData: SessionUser = {
        _id: data.data.userId,
        name: data.data.name,
        email: data.data.email,
        phonenumber: data.data.phonenumber,
        password: data.data.password,
        re_password: data.data.re_password,
        isAdmin: data.data.isAdmin,
    };

    // Redirect after successful registration
    setTimeout(() => {
        window.location.href = '/';
    }, 1000);
    return sessionData;
}

export const login = async () => {}

export const logout = async () => { }