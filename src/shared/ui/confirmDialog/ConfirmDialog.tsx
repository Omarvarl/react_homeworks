import { Box, Button, Container, Typography } from '@mui/material';
import { TConfirmDialog } from 'shared/model';

interface IProps {
    content: TConfirmDialog;
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export function ConfirmDialog({
    content,
    isVisible,
    onConfirm,
    onCancel,
}: IProps) {
    return isVisible ? (
        <Box
            sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                top: '20%',
                left: '50%',
                backgroundColor:
                    content.theme === 'light' ? 'antiquewhite' : '#161616',
                color: content.theme === 'light' ? 'black' : 'white',
                borderRadius: '20px',
                padding: '20px',
                translate: '-50%',
            }}
        >
            <Typography variant="h4">{content?.title}</Typography>

            <Typography sx={{ mb: '30px' }}>{content?.description}</Typography>

            <Container>
                <Button variant="contained" onClick={onConfirm}>
                    Подтвердить
                </Button>

                <Button sx={{ ml: '10px' }} onClick={onCancel}>
                    Отменить
                </Button>
            </Container>
        </Box>
    ) : null;
}
