import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api';
import { authBaseApi } from 'shared/api';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [authBaseApi.reducerPath]: authBaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(baseApi.middleware)
            .concat(authBaseApi.middleware),
});
