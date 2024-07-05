import { userRegistrationSchema } from "@/lib/validation/uservalidation";

export default function registerUser() {

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phonenumber: event.target.phonenumber.value,
            password: event.target.password.value,
            re_password: event.target.re_password.value,
        };

        try {
            userRegistrationSchema.parse(formData);
            console.log(`Data is submit`);
        } catch (error) {
            console.log(`${error}`);
        }
    }
}