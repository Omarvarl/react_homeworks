import { Button, Container, Typography } from '@mui/material';
import { useRef } from 'react';

interface ClickData {
    startTimestamp: number | null;
    clickCount: number;
}

export function ClickTimer() {
    const clickDataRef = useRef<ClickData>({
        startTimestamp: null,
        clickCount: 0,
    });

    const handleCLick = (): void => {
        if (clickDataRef.current.startTimestamp) {
            clickDataRef.current.clickCount += 1;

            // eslint-disable-next-line no-console
            console.log(
                `Время: ${Date.now() - clickDataRef.current.startTimestamp} мс, количество кликов: ${clickDataRef.current.clickCount}`,
            );
        } else {
            clickDataRef.current.startTimestamp = Date.now();
            clickDataRef.current.clickCount = 1;
        }
    };

    return (
        <Container>
            <Typography variant="h6" sx={{ mb: 2 }}>
                ClickTimer
            </Typography>

            <Button
                sx={{ mb: 2 }}
                variant="outlined"
                type="button"
                onClick={handleCLick}
            >
                Click
            </Button>
        </Container>
    );
}
