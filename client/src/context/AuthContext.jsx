import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logout } from "../services/auth.service.js";

const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadUser = async () => {
        try {
            const response = await getCurrentUser();
            setUser(response.data)
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false)
        }
    };

    const logoutUser = async () => {
        await logout();

        setUser(null);
    };

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                logoutUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
};

export {
    AuthProvider,
    useAuth
}