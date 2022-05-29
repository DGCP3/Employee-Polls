import { Navigate, Outlet, useLocation } from "react-router-dom";
import useReduxStore from "../hooks/useStore";

export const ProtectedRoute = () => {
  let location = useLocation();
  const {
    store: { isAuth },
  } = useReduxStore();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
