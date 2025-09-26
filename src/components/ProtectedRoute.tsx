import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JSX } from "react";

interface ProtectedRouteProps {
  element: JSX.Element;
  roles?: string[]; // e.g., ['admin']
}

export default function ProtectedRoute({ element, roles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && roles.length > 0) {
    const role = (user as any)?.userRole ?? 'user';
    if (!roles.includes(role)) {
      return <Navigate to="/" replace />;
    }
  }

  return element;
}
