import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

export function Header() {
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
                    <Link href="/registration" sx={{ mx: 1 }}>
                        Регистрация
                    </Link>

                    <Link href="/subscription" sx={{ mx: 1 }}>
                        Подписка
                    </Link>

                    <Link href="/tasks" sx={{ mx: 1 }}>
                        Задачи
                    </Link>

                    <Link href="/refExamples" sx={{ mx: 1 }}>
                        Примеры ref
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
