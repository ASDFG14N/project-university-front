import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    //return <Navigate to="/login" replace></Navigate>;
    <Navigate to="/login" replace></Navigate>;
  }
  return <Outlet></Outlet>;
}

export default ProtectedRoute;
