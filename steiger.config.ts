import { defineConfig } from 'steiger';
import fsd from '@feature-sliced/steiger-plugin';

export default defineConfig([
    ...fsd.configs.recommended,
    {
        files: ['./src/**'],
        rules: {
            'fsd/public-api': 'off',
            'fsd/no-public-api-sidestep': 'off',
            'fsd/insignificant-slice': 'off',
        },
    },
]);
