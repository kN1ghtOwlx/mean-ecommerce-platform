import { useState } from "react";

import { login } from "../services/auth.service";

import Button from "../components/Button";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(formData);

            console.log(response);

            alert("Login Successful");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        }
    };

    return (
        <div className="container auth-container">
            <h2>Login</h2>

            <form
                className="auth-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginPage;