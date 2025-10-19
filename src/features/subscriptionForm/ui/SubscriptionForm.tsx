import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useActionState } from 'react';
import { FormState } from '../model/types';

export function SubscriptionForm() {
    async function handleSubmit(prevState: FormState, formData: FormData) {
        await new Promise((res) => setTimeout(res, 1000)); // Симуляция задержки
        const email = formData.get('email');

        if (!email) {
            return { success: false, error: 'Почта обязательна' };
        }

        return { success: true };
    }
    const [state, formAction, isPending] = useActionState(handleSubmit, {
        success: false,
        error: undefined,
    });

    return (
        <Box
            action={formAction}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'column',
            }}
            component="form"
        >
            <Typography variant="h4" sx={{ mb: 4 }}>
                Подписка
            </Typography>

            {state.success ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }} color="success">
                        Вы подписаны
                    </Typography>
                </Box>
            ) : (
                <Container maxWidth="sm">
                    <TextField
                        name="email"
                        sx={{ mb: 2 }}
                        fullWidth
                        label="Почта"
                        variant="outlined"
                        error={!!state?.error}
                        helperText={state.error}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{ mb: 2 }}
                            disabled={isPending || state.success}
                            loading={isPending}
                            variant="contained"
                            type="submit"
                        >
                            Отправить
                        </Button>
                    </Box>
                </Container>
            )}
        </Box>
    );
}
