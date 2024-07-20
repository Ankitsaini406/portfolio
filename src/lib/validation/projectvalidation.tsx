import { z } from 'zod';

export const projectRegistrationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    description: z.string().min(500, "Description is required"),
});

type TProjectRegistrationSchema = z.infer<typeof projectRegistrationSchema>;
