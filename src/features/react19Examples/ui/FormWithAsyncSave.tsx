import { useActionState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

enum EStatus {
    IDLE = 'idle',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface IFormState {
    status: EStatus;
    text: string | undefined;
}

export function FormWithAsyncSave() {
    const handleSave = async (
        _previousState: IFormState,
        formData: FormData,
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 1_000));

        return {
            status: EStatus.SUCCESS,
            text: formData.get('inputText')?.toString() || '',
        };
    };

    const [state, formAction, isPending] = useActionState(handleSave, {
        status: EStatus.IDLE,
        text: '',
    });
    const label = state.status === EStatus.SUCCESS ? 'Saved!' : 'Save';

    return (
        <form>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ mb: '10px' }} variant="h6">
                    FormWithAsyncSave
                </Typography>

                <TextField name="inputText" sx={{ mb: '10px' }} />

                <button formAction={formAction}>
                    {isPending ? 'Saving...' : label}
                </button>
            </Box>
        </form>
    );
}
