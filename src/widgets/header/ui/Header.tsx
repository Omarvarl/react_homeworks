import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import { useAuth } from 'features/auth';

export function Header() {
    const { accessToken } = useAuth();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar>
                <Link href={'/'} variant="button">
                    <Typography variant="h6" component="h6">
                        Главная
                    </Typography>
                </Link>

                <Box component="nav" sx={{ ml: 'auto' }}>
                    {accessToken ? (
                        <Link href="/profile" sx={{ mx: 1 }}>
                            Профиль
                        </Link>
                    ) : null}

                    <Link href="/public" sx={{ mx: 1 }}>
                        Публичная
                    </Link>

                    <Link href="/showcase" sx={{ mx: 1 }}>
                        PortalShowcase
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
