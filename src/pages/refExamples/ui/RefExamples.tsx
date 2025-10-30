import { Box } from '@mui/material';
import { ClickTimer } from 'features/refExamples';
import { DebouncedLogger } from 'features/refExamples';
import { FocusTracker } from 'features/refExamples';
import { PreviousInput } from 'features/refExamples';
import { WebSocketLogger } from 'features/refExamples';

export function RefExamples() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                width: '50%',
            }}
        >
            <ClickTimer />

            <PreviousInput />

            <FocusTracker />

            <DebouncedLogger />

            <WebSocketLogger />
        </Box>
    );
}
