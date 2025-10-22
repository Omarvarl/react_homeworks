import { authBaseApi } from 'shared/api';
import { TLoginFormValues, IAuthResponse, TUser } from '../model/types';

const authApi = authBaseApi.injectEndpoints({
    endpoints: (build) => ({
        auth: build.mutation<IAuthResponse, TLoginFormValues>({
            query: (params) => ({
                url: 'auth/login',
                method: 'POST',
                body: params,
            }),
        }),
        getUser: build.query<TUser, string>({
            query: (accessToken: string) => ({
                url: 'users/me',
                headers: { Authorization: accessToken },
            }),
            transformResponse: (response: TUser) => response,
        }),
    }),
});

export const { useAuthMutation, useGetUserQuery } = authApi;
