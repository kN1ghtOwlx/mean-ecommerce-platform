import { User } from "../models/index.js"

const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

const createUser = async (userData) => {
    return await User.create(userData);
}

export {
    findUserByEmail,
    createUser,
}