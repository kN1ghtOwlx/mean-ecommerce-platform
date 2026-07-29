import { Product } from "../models/index.js";

const createProduct = async (productData) => {
    return await Product.create(productData);
};

const getProducts = async () => {
    return await Product.find()
        .populate("category")
        .sort({ createdAt: -1 });
};

const getProductById = async (id) => {
    return await Product.findById(id).populate("category");
};

const updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    ).populate("category");
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

export {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};