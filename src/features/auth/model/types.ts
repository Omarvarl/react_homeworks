import { z } from 'zod';
import type { authInfoSchema } from './schema';
import { loginFormValidatorSchema } from './loginFormValidator';

export type TAuthInfo = z.infer<typeof authInfoSchema>;

export interface IStorageData {
    clearStorage: () => void;
    getStorageData: () => TAuthInfo | undefined;
    setStorageData: (newData: TAuthInfo) => void;
}

export interface IAuthMethods {
    login: (authInfo: TAuthInfo) => void;
    logout: () => void;
}

export type TAuthContextModel = TAuthInfo & IAuthMethods;

export type TLoginFormValues = z.infer<typeof loginFormValidatorSchema>;

export type TUser = {
    id: string;
    email: string;
    name: string;
};

export interface IAuthResponse {
    user: Omit<TUser, 'name'>;
    accessToken: string;
}
