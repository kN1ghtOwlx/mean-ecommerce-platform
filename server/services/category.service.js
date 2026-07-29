import { createCategory, deleteCategory, getCategories, getCatgoryById, updateCategory } from "../repositories/category.repository.js"
import ApiError from "../utils/ApiError.js";

const createCategoryService = async (data) => {
    return await createCategory(data);
};

const getAllCategoriesService = async () => {
    return await getCategories();
};

const updateCategoryService = async (id, data) => {
    const category = await getCatgoryById(id);

    if (!category) {
        throw new ApiError(
            404,
            "Category not found."
        )
    }

    return await updateCategory(id, data)
}

const deleteCategoryService = async (id) => {
    const category = await getCatgoryById(id);

    if (!category) {
        throw new ApiError(
            404,
            "Category not found."
        )
    }

    return deleteCategory(id);
};

export {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
    deleteCategoryService
}