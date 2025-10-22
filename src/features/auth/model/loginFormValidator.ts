import { z } from 'zod';

export const loginFormValidatorSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});
