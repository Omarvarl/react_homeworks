import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { useAuth } from 'features/auth/api/useAuth';
import { TLoginFormValues } from '../model/types';
import { loginFormValidatorSchema } from '../model/loginFormValidator';
import { useAuthMutation } from '../api/authApi';

export function LoginForm() {
    const [auth, { isLoading }] = useAuthMutation();
    const navigate = useNavigate();
    const { login } = useAuth();
    const form = useForm<TLoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        resolver: zodResolver(loginFormValidatorSchema),
    });
    const {
        formState: { errors, isValid, isSubmitted },
        control,
        handleSubmit,
    } = form;

    const submitHandler = async (formValues: TLoginFormValues) => {
        try {
            const response = await auth(formValues);

            login({
                accessToken: response.data?.accessToken,
            });

            navigate('/profile');
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    return (
        <FormProvider {...form}>
            <Box component="form" onSubmit={handleSubmit(submitHandler)}>
                <Typography variant="h2" align="center" sx={{ mb: 6 }}>
                    Аутентификация
                </Typography>
                <Container
                    sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                    }}
                    maxWidth="sm"
                >
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                type="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                label="Email"
                                sx={{ mb: 2 }}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                type="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                label="Password"
                                sx={{ mb: 2 }}
                            />
                        )}
                    />
                    <Button
                        disabled={isSubmitted && !isValid}
                        loading={isLoading}
                        type="submit"
                        variant="contained"
                    >
                        Вход
                    </Button>
                </Container>
            </Box>
        </FormProvider>
    );
}
