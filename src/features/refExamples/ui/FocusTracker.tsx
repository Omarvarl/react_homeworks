import { Button, Container, TextField, Typography } from '@mui/material';
import { FocusEvent, useRef } from 'react';

export function FocusTracker() {
    const firstInput = useRef<HTMLInputElement>(null);
    const secondInput = useRef<HTMLInputElement>(null);
    const count = useRef(0);

    const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
        if (event.relatedTarget) {
            count.current += 1;
            // eslint-disable-next-line no-console
            console.log(count.current);
        }
    };

    const handleFocusFirst = (): void => {
        firstInput.current?.focus();
    };

    return (
        <Container>
            <Typography variant="h6" sx={{ mb: 2 }}>
                FocusTracker
            </Typography>

            <Container
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}
            >
                <TextField
                    variant="outlined"
                    onFocus={handleFocus}
                    placeholder="Первое"
                    ref={firstInput}
                />

                <TextField
                    variant="outlined"
                    onFocus={handleFocus}
                    placeholder="Второе"
                    ref={secondInput}
                />
            </Container>

            <Button
                sx={{ mb: 2 }}
                variant="outlined"
                type="button"
                onClick={handleFocusFirst}
            >
                Сфокусировать на первом
            </Button>
        </Container>
    );
}
