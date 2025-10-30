import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/routing';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AuthProvider } from 'app/providers/AuthProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </Provider>
    </StrictMode>,
);
