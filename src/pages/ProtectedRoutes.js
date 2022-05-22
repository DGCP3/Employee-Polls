import { Navigate, Outlet, useLocation } from "react-router-dom";
import useStore from "../hooks/useStore";

export const ProtectedRoute = () => {
  let location = useLocation();
  const {
    store: { isAuth },
  } = useStore();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
