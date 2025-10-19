import {
    Controller,
    FormProvider,
    useFieldArray,
    useForm,
} from 'react-hook-form';
import { type FormValues } from '../model/types';
import { validationSchema } from '../model/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export function RegistrationForm() {
    const navigate = useNavigate();
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        socialLinks: [{ value: '' }],
    };
    const form = useForm<FormValues>({
        defaultValues: initialValues,
        mode: 'onChange',
        resolver: zodResolver(validationSchema),
    });

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isValid },
    } = form;

    const {
        fields: socialLinkValues,
        append: socialLinkAppend,
        remove: socialLinkRemove,
    } = useFieldArray({
        control,
        name: 'socialLinks',
    });

    const submitHandler = (data: FormValues) => {
        // eslint-disable-next-line no-console
        console.log(data);
        navigate('/');
    };

    return (
        <FormProvider {...form}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow: 'column',
                }}
                component="form"
                onSubmit={handleSubmit(submitHandler)}
            >
                <Typography variant="h4" sx={{ mb: 4 }}>
                    Регистрация
                </Typography>
                <Container maxWidth="sm">
                    <Controller
                        name="userName"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                sx={{ mb: 2 }}
                                fullWidth
                                label="Имя пользователя"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                sx={{ mb: 2 }}
                                fullWidth
                                label="Почта"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Пароль"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                sx={{ mb: 2 }}
                                type="password"
                            />
                        )}
                    />

                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                sx={{ mb: 2 }}
                                fullWidth
                                label="Подтверждение пароля"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                type="password"
                            />
                        )}
                    />
                    <Divider variant="middle" sx={{ mb: 4 }} />
                    {socialLinkValues.map((link, index) => (
                        <Box
                            key={link.id}
                            sx={{
                                display: 'flex',
                                mb: 2,
                                alignItems: 'flex-start',
                            }}
                        >
                            <Controller
                                name={`socialLinks.${index}.value` as const}
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        sx={{ mb: 2 }}
                                        fullWidth
                                        label={`Ссылка ${index + 1}`}
                                        variant="outlined"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                    />
                                )}
                            />

                            {!!index && (
                                <IconButton
                                    onClick={() => socialLinkRemove(index)}
                                    sx={{ ml: 2, mt: '12px' }}
                                    color="error"
                                    size="small"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )}
                        </Box>
                    ))}

                    <Button
                        onClick={() => socialLinkAppend({ value: '' })}
                        sx={{ mb: 4 }}
                        startIcon={<AddIcon />}
                        disabled={
                            Array.isArray(errors.socialLinks) &&
                            !!errors.socialLinks.length
                        }
                    >
                        Добавить ссылку
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{ mb: 2 }}
                            disabled={!isValid}
                            loading={isSubmitting}
                            variant="contained"
                            type="submit"
                        >
                            Отправить
                        </Button>
                    </Box>
                </Container>
            </Box>
        </FormProvider>
    );
}
