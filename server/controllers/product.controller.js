import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
    createProductService,
    getAllProductsService,
    getSingleProductService,
    updateProductService,
    deleteProductService,
} from "../services/product.service.js";

const createProduct = asyncHandler(async (req, res) => {
    const product = await createProductService(req.body);

    return res
        .status(201)
        .json(new ApiResponse(201, "Product created", product));
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await getAllProductsService();

    return res
        .status(200)
        .json(new ApiResponse(200, "Products fetched", products));
});

const getProduct = asyncHandler(async (req, res) => {
    const product = await getSingleProductService(req.params.id);

    return res
        .status(200)
        .json(new ApiResponse(200, "Product fetched", product));
});

const updateProduct = asyncHandler(async (req, res) => {
    const product = await updateProductService(
        req.params.id,
        req.body
    );

    return res
        .status(200)
        .json(new ApiResponse(200, "Product updated", product));
});

const deleteProduct = asyncHandler(async (req, res) => {
    await deleteProductService(req.params.id);

    return res
        .status(200)
        .json(new ApiResponse(200, "Product deleted"));
});

export {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};