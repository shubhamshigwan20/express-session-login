import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { userId } = useAuth();
  return userId ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
