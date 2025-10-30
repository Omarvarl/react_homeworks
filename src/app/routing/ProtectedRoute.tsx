import { useAuth } from 'features/auth';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoute() {
    const { accessToken } = useAuth();

    return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}
