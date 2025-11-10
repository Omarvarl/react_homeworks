import { ReactElement, useState } from 'react';
import { ThemeContext } from 'features/portalShowcaseForm';
import { IThemeContext } from 'features/portalShowcaseForm';

interface Props {
    children: ReactElement;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState('light');

    const contextData: IThemeContext = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    );
}
