import { Category } from "../models/index.js"

const createCategory = async (categoryData) => {
    return await Category.create(categoryData)
};

const getCategories = async () => {
    return await Category.find().sort({createdAt: -1});
};

const getCatgoryById = async (id) => {
    return await Category.findById(id);
};

const updateCategory = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

export {
    createCategory,
    getCategories,
    getCatgoryById,
    updateCategory,
    deleteCategory
}