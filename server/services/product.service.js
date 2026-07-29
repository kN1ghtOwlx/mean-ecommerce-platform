import ApiError from "../utils/ApiError.js";

import { Category } from "../models/index.js";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../repositories/product.repository.js";

const createProductService = async (data) => {
    const category = await Category.findById(data.category);

    if (!category) {
        throw new ApiError(404, "Category not found");
    }

    return await createProduct(data);
};

const getAllProductsService = async () => {
    return await getProducts();
};

const getSingleProductService = async (id) => {
    const product = await getProductById(id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return product;
};

const updateProductService = async (id, data) => {
    if (data.category) {
        const category = await Category.findById(data.category);

        if (!category) {
            throw new ApiError(404, "Category not found");
        }
    }

    const product = await updateProduct(id, data);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return product;
};

const deleteProductService = async (id) => {
    const product = await getProductById(id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    await deleteProduct(id);
};

export {
    createProductService,
    getAllProductsService,
    getSingleProductService,
    updateProductService,
    deleteProductService,
};