import { createContext, useContext } from 'react';
import type { TAuthContextModel } from '../model/types';

export const AuthContext = createContext<TAuthContextModel>({
    accessToken: '',
    login: () => {},
    logout: () => {},
});

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('Нельзя использовать хук useAuth вне AuthContext');
    }

    return authContext;
};
