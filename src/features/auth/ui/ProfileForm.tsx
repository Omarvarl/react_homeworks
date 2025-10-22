import { Box, Button, Typography } from '@mui/material';
import { useGetUserQuery } from '../api/authApi';
import { useAuth } from '../api/useAuth';
import { useNavigate } from 'react-router';

export function ProfileForm() {
    const navigate = useNavigate();
    const { accessToken, logout } = useAuth();
    const { data, isFetching } = useGetUserQuery(accessToken || '');

    const handleLogout = (): void => {
        logout();
        navigate('/login', { replace: true });
    };

    return isFetching ? (
        <div>Загрузка...</div>
    ) : (
        <Box sx={{ textAlign: 'center' }}>
            <Typography>{data?.name}</Typography>

            <Button
                sx={{ marginTop: 1 }}
                onClick={handleLogout}
                variant="outlined"
            >
                Выйти
            </Button>
        </Box>
    );
}
