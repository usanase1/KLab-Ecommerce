import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JSX } from "react";

interface PublicRouteProps {
  element: JSX.Element;
}

export default function PublicRoute({ element }: PublicRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    const role = (user as any)?.userRole ?? 'user';
    return <Navigate to={role === 'admin' ? "/dashboard" : "/"} replace />;
  }

  return element;
}
