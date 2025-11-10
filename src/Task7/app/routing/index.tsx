import { createBrowserRouter } from 'react-router';
import { routes } from './routes';
import React from 'react';

const LazyHome = React.lazy(() =>
    routes.home().then((module) => ({ default: module.HomePage })),
);
const LazyPublic = React.lazy(() =>
    routes.public().then((module) => ({ default: module.PublicPage })),
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LazyHome />,
    },
    {
        path: 'public',
        element: <LazyPublic />,
    },
]);
