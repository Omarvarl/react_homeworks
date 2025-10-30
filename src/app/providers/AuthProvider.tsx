import { useStorageData } from 'features/auth';
import { TAuthContextModel, TAuthInfo } from 'features/auth';
import { ReactElement, useState } from 'react';
import { AuthContext } from 'features/auth';

interface Props {
    children: ReactElement;
}

export function AuthProvider({ children }: Props) {
    const { clearStorage, getStorageData, setStorageData } = useStorageData();
    const [authInfo, setAuthInfo] = useState(getStorageData());

    const handleLogin = (info: TAuthInfo) => {
        setAuthInfo(info);
        setStorageData(info);
    };

    const handleLogout = () => {
        setAuthInfo({
            accessToken: '',
        });
        clearStorage();
    };

    const contextData: TAuthContextModel = {
        ...(authInfo || {}),
        login: handleLogin,
        logout: handleLogout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}
