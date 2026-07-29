import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {
    const {
        user,
        logoutUser,
    } = useAuth();

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link
                    to="/"
                    className="logo"
                >
                    MERN Shop
                </Link>

                <nav className="nav-links">
                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/cart">
                        Cart
                    </Link>

                    <Link to="/ai">
                        AI Assistant
                    </Link>

                    {!user ? (
                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <span>
                                {user.firstName}
                            </span>

                            <button
                                className="btn"
                                onClick={logoutUser}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;