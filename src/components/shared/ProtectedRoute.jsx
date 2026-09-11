import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token, isLoading } = useAuth();

  if (isLoading) return <p>Memuat...</p>;
  if (!token) return <Navigate to="/login" replace />;

  return children;
}