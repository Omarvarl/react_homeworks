import { z } from 'zod';

const socialLinkSchema = z.object({
    value: z.string().min(1, 'Требуется ссылка'),
});

export const validationSchema = z
    .object({
        userName: z.string().min(1, 'Имя обязательно'),
        email: z
            .string()
            .min(1, 'Почта обязательна')
            .includes('@', { message: 'Должен быть знак "@"' }),
        password: z.string().min(6, 'Пароль должен содержать 6 символов'),
        confirmPassword: z
            .string()
            .min(6, 'Пароль должен содержать 6 символов'),
        socialLinks: z.array(socialLinkSchema),
    })
    .check((ctx) => {
        if (ctx.value.password !== ctx.value.confirmPassword) {
            ctx.issues.push({
                code: 'custom',
                message: 'Пароли должны совпадать',
                input: ctx.value,
                path: ['confirmPassword'],
            });
        }
    });
