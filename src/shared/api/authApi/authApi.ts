import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authBaseApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.v2.react-learning.ru',
    }),
    endpoints: () => ({}),
});
