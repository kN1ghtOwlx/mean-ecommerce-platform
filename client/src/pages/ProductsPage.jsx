import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../services/product.service";

function ProductsPage() {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response =
                    await getProducts();

                setProducts(response.data);
            } catch (error) {
                setError(
                    error.response?.data?.message ||
                    "Unable to load products."
                );
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="container">
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Products</h1>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;