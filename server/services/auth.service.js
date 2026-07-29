import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../repositories/auth.repository.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (userData) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = userData;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new ApiError(
            409,
            "Email already registered"
        );

    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });
    
    return user
};

const loginUser = async (email, password) => {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new ApiError(
            401,
            "Invalid email or passoword."
        )
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new ApiError(
            401,
            "Invalid email or passoword."
        )
    };

    const token = generateToken(user._id);

    return {
        user,
        token
    }
}

export {
    registerUser,
    loginUser
};