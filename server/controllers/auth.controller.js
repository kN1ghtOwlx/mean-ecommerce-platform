import { loginUser, registerUser } from "../services/auth.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const register = asyncHandler(async (req, res) => {
    const user = await registerUser(req.body);

    return res.status(201).json(
        201,
        "User resgistered succesfully",
        {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }
    )
});

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const {user, token} = await loginUser(
        email,
        password
    );

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            "Login successfull",
            {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        )
    )
});

const logout = asyncHandler(async (req, res) => {
    res.clearCookie("token");

    return res.status(200).json(
        new ApiResponse(
            200,
            "Logout successful"
        )
    );
});

const me = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            "Current user",
            req.user
        )
    );
});

export {
    register,
    login,
    logout,
    me
}