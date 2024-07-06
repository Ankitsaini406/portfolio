import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
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
            toast.error(data.meaasge, { duration: 5000 });
            return;
        }
        toast.success('Login successful!', { duration: 5000 });

        // Store token in local storage or cokkies
        localStorage.setItem('token', data.token);

        // Redirect after successful registration
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);

    } catch (error: any) {
        toast.error(error.response?.data?.message || `Login failed. Please try again.`);
    }
}