import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { TaskPage } from 'pages/tasks';
import { RegistrationPage } from 'pages/registration';
import { HomePage } from 'pages/home';
import { SubscriptionPage } from 'pages/subscription';
import { RefExamples } from 'pages/refExamples';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
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
