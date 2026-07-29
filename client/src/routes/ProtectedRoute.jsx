import { Navigate } from "react-router-dom";

import Loading from "../components/Loading";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
    const {
        user,
        loading,
    } = useAuth();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;