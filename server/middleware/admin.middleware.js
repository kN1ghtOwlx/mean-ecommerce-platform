import ApiError from "../utils/ApiError.js"

const adminOnly = (req, res, next) => {
    if (!req.user) {
        return next(
            new ApiError(
                401,
                "Authentication required"
            )
        )
    }

    if (req.user.role !== "ADMIN") {
        return next(
            new ApiError(
                403,
                "Access Denied"
            )
        )
    }

    next();
}

export default adminOnly;