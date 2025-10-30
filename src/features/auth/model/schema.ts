import { z } from 'zod';

export const authInfoSchema = z.object({
    accessToken: z.string().optional(),
});
