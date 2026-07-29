import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
            minlength: 2,
            maxlength: 150,
        },

        description: {
            type: String,
            required: [true, "Product description is required"],
            trim: true,
            maxlength: 1000,
        },

        price: {
            type: Number,
            required: [true, "Product price is required"],
            min: 0,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },

        image: {
            type: String,
            default: "",
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

productSchema.index({
    name: "text",
    description: "text",
});

productSchema.index({
    category: 1,
});

productSchema.index({
    price: 1,
});

const Product = mongoose.model("Product", productSchema);

export default Product;