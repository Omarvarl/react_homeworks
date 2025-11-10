import { Box } from '@mui/material';
import {
    ActionStateWithReducer,
    DelayedButton,
    FormWithAsyncSave,
    TodoListOptimistic,
} from 'features/react19Examples';

export function React19ExamplesPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <DelayedButton />

            <FormWithAsyncSave />

            <TodoListOptimistic />

            <ActionStateWithReducer />
        </Box>
    );
}
