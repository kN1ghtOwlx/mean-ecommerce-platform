import jwt from "jsonwebtoken";

import ApiError from "../utils/ApiError.js";

import { User } from "../models/index.js";

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return next(
                new ApiError(401, "Authentication required")
            );
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return next(
                new ApiError(401, "User not found")
            );
        }

        req.user = user;

        next();
    } catch {
        next(
            new ApiError(
                401,
                "Invalid or expired token"
            )
        );
    }
};

export default protect;