import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { TaskPage } from 'pages/tasks';
import { RegistrationPage } from 'pages/registration';
import { HomePage } from 'pages/home';
import { SubscriptionPage } from 'pages/subscription';
import { RefExamples } from 'pages/refExamples';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from 'pages/login';
import { ProfilePage } from 'pages/profile';
import { PublicPage } from 'pages/public';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: '/profile',
                        element: <ProfilePage />,
                    },
                ],
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'public',
                element: <PublicPage />,
            },
            {
                path: 'registration',
                element: <RegistrationPage />,
            },
            {
                path: 'refExamples',
                element: <RefExamples />,
            },
            {
                path: 'subscription',
                element: <SubscriptionPage />,
            },
            {
                path: 'tasks',
                element: <TaskPage />,
            },
            {
                path: '*',
                element: <div>Not found page</div>,
            },
        ],
    },
]);
