import { z } from 'zod';

export const userRegistrationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phonenumber: z.string().min(3, "Phone number is required").max(10, "Phone number max leanth is 10 charactres"),
    password: z.string().min(3, "Paswword must be at least 8 charactres"),
    re_password: z.string().min(3, "Paswword must be at least 8 charactres"),
    isAdmin: z.boolean().optional(),
}).refine((data) => data.password === data.re_password, {
    message: "Passwords don't match",
});

type TUserRegistrationSchema = z.infer<typeof userRegistrationSchema>;

export const userLoginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Paswword must be at least 8 charactres"),
});