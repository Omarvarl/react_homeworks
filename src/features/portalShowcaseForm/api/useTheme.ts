import { noop } from 'lodash';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    theme: '',
    setTheme: noop,
});

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    return themeContext;
};
