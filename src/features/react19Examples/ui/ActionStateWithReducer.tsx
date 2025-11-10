import { useActionState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface IFormData {
    submitting: boolean;
    dirty: boolean;
    success: boolean;
}

export function ActionStateWithReducer() {
    const handleSave = async (previousState: IFormData, formData: FormData) => {
        const text1 = formData.get('inputText1')?.toString() || '';
        const text2 = formData.get('inputText2')?.toString() || '';
        const dirty = Boolean(text1 || text2);
        let result = previousState;
        result.dirty = dirty;
        result.submitting = true;

        result = await new Promise((resolve) =>
            setTimeout(() => {
                resolve({
                    submitting: false,
                    dirty,
                    success: true,
                });
            }, 1_000),
        );

        return result;
    };

    const [state, formAction, isPending] = useActionState(handleSave, {
        submitting: false,
        dirty: false,
        success: false,
    });
    const label = state.success ? 'Saved!' : 'Save';

    return (
        <form>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ mb: '10px' }} variant="h6">
                    ActionStateWithReducer
                </Typography>

                <TextField name="inputText1" sx={{ mb: '10px' }} />

                <TextField name="inputText2" sx={{ mb: '10px' }} />

                <button formAction={formAction}>
                    {isPending ? 'Saving...' : label}
                </button>
            </Box>
        </form>
    );
}
