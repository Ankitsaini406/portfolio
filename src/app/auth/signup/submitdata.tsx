import { userRegistrationSchema } from "@/lib/validation/uservalidation";
import { z } from 'zod';
import toast from "react-hot-toast";

export default async function handleSubmit(event: any) {

    event.preventDefault();

    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        phonenumber: event.target.phonenumber.value,
        password: event.target.password.value,
        re_password: event.target.re_password.value,
        isAdmin: false,
    };

    try {
        userRegistrationSchema.parse(formData);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User registered successfully:', data);

            toast.success('User successfully created!', {
                duration: 5000,
            });

            // Redirect after successful registration
            setTimeout(() => {
                window.location.href = '/auth';
            }, 1000);
        } else {
            const errorData = await response.json();
            console.error('Error registering user:', errorData);

            toast.error('Error registering user!', {
                duration: 5000,
            });
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Display validation errors
            error.errors.forEach((e) => {
                return toast.error(e.message.toString());
            });

            toast.error(`Please fill correct details!`, {
                duration: 5000,
            });
        }
    }
}