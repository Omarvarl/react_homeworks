/* eslint-disable no-console */
import { Box, Button, Typography } from '@mui/material';
import { ETooltipPosition, Tooltip, useConfirmDialog } from 'shared/ui';
import { useTheme } from '../api/useTheme';

export function PortalShowcaseForm() {
    const { showConfirmDialog, ConfirmDialogElement } = useConfirmDialog();
    const { theme, setTheme } = useTheme();

    const handleDelete = async () => {
        const confirmed = await showConfirmDialog({
            title: 'Удалить элемент?',
            description: 'Это действие необратимо.',
            theme,
        });

        if (confirmed) {
            console.log('Успешно удалено');
        }
    };

    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Tooltip
                content="Проверка"
                onClick={() => {
                    console.log('tooltipEvent');
                }}
                position={ETooltipPosition.RIGHT}
                theme={theme}
            >
                <Typography
                    sx={{ color: 'red' }}
                    onClick={() => {
                        console.log('parentEvent');
                    }}
                >
                    Проверка тултипа
                </Typography>
            </Tooltip>

            <Button
                sx={{ mt: '10px' }}
                variant="outlined"
                onClick={handleDelete}
            >
                Удалить
            </Button>

            <Button
                sx={{ mt: '10px' }}
                variant="outlined"
                onClick={handleChangeTheme}
            >
                Изменить тему
            </Button>

            {ConfirmDialogElement}
        </Box>
    );
}
