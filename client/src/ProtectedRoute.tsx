import { Navigate, useLocation, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "./features/auth/authSlice";

export const ProtectedRoute = () => {
    const user = localStorage.getItem("user");
    // const user = useSelector(selectCurrentUser);
    const location = useLocation();

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};
