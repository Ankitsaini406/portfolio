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
        }
        toast.success('Login successful!', { duration: 5000 });

        // Store token in local storage or cokkies
        setCookie(null, 'token', data.data, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });
        localStorage.setItem('token', data.data);

        // Redirect after successful registration
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);

    } catch (error: any) {
        toast.error(error.response?.data?.message || `Login failed. Please try again.`);
    }
}