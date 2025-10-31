/* eslint-disable no-console */
import { Container, TextField, Typography } from '@mui/material';
import { ChangeEvent, useRef } from 'react';

export function DebouncedLogger() {
    const timeoutId = useRef<number>(undefined);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        window.clearTimeout(timeoutId.current);

        timeoutId.current = window.setTimeout(() => {
            console.log(event.target.value);
        }, 1_000);
    };

    return (
        <Container>
            <Typography variant="h6" sx={{ mb: 2 }}>
                DebouncedLogger
            </Typography>

            <TextField variant="outlined" onChange={handleChange} />
        </Container>
    );
}
