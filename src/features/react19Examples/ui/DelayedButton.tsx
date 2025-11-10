import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from 'shared/ui';

export function DelayedButton() {
    const timeoutId = useRef<number>(undefined);

    // useEvent нет в 19 реакте. React compiler справляется.
    const handleClick = () => {
        window.clearTimeout(timeoutId.current);

        timeoutId.current = window.setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log('Done!');
        }, 2_000);
    };

    return (
        <Box sx={{ mb: '30px', textAlign: 'center' }}>
            <Typography variant="h6">DelayedButton</Typography>

            <Button label="Push" onClick={handleClick} />
        </Box>
    );
}
