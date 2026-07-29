function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img
                src={
                    product.image ||
                    "https://placehold.co/300x200?text=No+Image"
                }
                alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <h4>₹{product.price}</h4>

            <button className="btn">
                View Product
            </button>
        </div>
    );
}

export default ProductCard;