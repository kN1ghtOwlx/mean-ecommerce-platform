import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
    deleteCategoryService,
} from "../services/category.service.js";

const createCategory = asyncHandler(async (req, res) => {
    const category = await createCategoryService(req.body);

    return res
        .status(201)
        .json(new ApiResponse(201, "Category created", category));
});

const getCategories = asyncHandler(async (req, res) => {
    const categories = await getAllCategoriesService();

    return res
        .status(200)
        .json(new ApiResponse(200, "Categories fetched", categories));
});

const updateCategory = asyncHandler(async (req, res) => {
    const category = await updateCategoryService(
        req.params.id,
        req.body
    );

    return res
        .status(200)
        .json(new ApiResponse(200, "Category updated", category));
});

const deleteCategory = asyncHandler(async (req, res) => {
    await deleteCategoryService(req.params.id);

    return res
        .status(200)
        .json(new ApiResponse(200, "Category deleted"));
});

export {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
};