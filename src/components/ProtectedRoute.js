import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { currentUser } = useAuth();

  return !currentUser ? <Navigate to={redirectPath} replace /> : children;
};

export default ProtectedRoute;
