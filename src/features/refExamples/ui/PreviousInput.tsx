import { Container, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export function PreviousInput() {
    const [value, setValue] = useState('');
    const prevValue = useRef('');

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Container>
            <Typography variant="h6" sx={{ mb: 2 }}>
                PreviousInput
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                helperText={`Предыдущее значение: ${prevValue.current}`}
                onChange={handleChange}
                value={value}
            />
        </Container>
    );
}
