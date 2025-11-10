import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AuthProvider } from 'app/providers/AuthProvider';
import { router } from 'app/routing';
import { ThemeProvider } from 'app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    </StrictMode>,
);
