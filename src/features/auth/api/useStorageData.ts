import { authInfoSchema } from '../model/schema';
import { IStorageData, TAuthInfo } from '../model/types';

export function useStorageData(): IStorageData {
    const isValidData = (data: unknown): data is TAuthInfo => {
        return authInfoSchema.safeParse(data).success;
    };

    const getStorageData = (): TAuthInfo | undefined => {
        const stringData = localStorage.getItem('authData');

        try {
            const data = JSON.parse(stringData || '');

            return isValidData(data) ? data : undefined;
        } catch {
            return undefined;
        }
    };

    const setStorageData = (newData: TAuthInfo): void => {
        localStorage.setItem('authData', JSON.stringify(newData));
    };

    const clearStorage = (): void => {
        localStorage.removeItem('authData');
    };

    return { clearStorage, getStorageData, setStorageData };
}
