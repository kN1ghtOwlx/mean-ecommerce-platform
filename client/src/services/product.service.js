import api from "../api/axios";

const getProducts = async () => {
    const response = await api.get("/products");

    return response.data;
};

const getProduct = async (id) => {
    const response = await api.get(`/products/${id}`);

    return response.data;
};

export {
    getProducts,
    getProduct,
};