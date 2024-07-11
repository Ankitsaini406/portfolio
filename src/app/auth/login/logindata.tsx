import getSession from "@/lib/cookies/actions";
import { setCookie } from "nookies";
import toast from "react-hot-toast";


export default async function handleLogin(event: any) {

    event.preventDefault();

    const formData = {
        email: event.target.email.value,
        password: event.target.password.value,
    };

    try {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.message, { duration: 5000 });
            return;
        } else {
            const userCookie = data.token;
            // Store token in local storage or cokkies
            setCookie(null, 'token', userCookie, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            localStorage.setItem('token', userCookie);

            if (userCookie) {
                toast.success('Login successful!', { duration: 5000 });
                getSession();

                // Redirect after successful registration
                setTimeout(() => {
                    window.location.href = '/';
                },);
            }
        }

    } catch (error: any) {
        toast.error(error.response?.data?.message || `Login failed. Please try again.`);
    }
}