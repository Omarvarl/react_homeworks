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
import { PortalShowcase } from 'pages/portalShowcase';
import { React19ExamplesPage } from 'pages/react19';

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
                path: 'showcase',
                element: <PortalShowcase />,
            },
            {
                path: 'react19',
                element: <React19ExamplesPage />,
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
