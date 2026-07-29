import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            default: "",
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        subtotal: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        _id: false,
    }
);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        items: {
            type: [orderItemSchema],
            required: true,
            default: [],
        },

        totalItems: {
            type: Number,
            default: 0,
            min: 0,
        },

        totalQuantity: {
            type: Number,
            default: 0,
            min: 0,
        },

        subtotal: {
            type: Number,
            required: true,
            min: 0,
        },

        shippingCharge: {
            type: Number,
            default: 0,
            min: 0,
        },

        tax: {
            type: Number,
            default: 0,
            min: 0,
        },

        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },

        shippingAddress: {
            fullName: {
                type: String,
                required: true,
                trim: true,
            },

            phone: {
                type: String,
                required: true,
                trim: true,
            },

            addressLine1: {
                type: String,
                required: true,
                trim: true,
            },

            addressLine2: {
                type: String,
                default: "",
                trim: true,
            },

            city: {
                type: String,
                required: true,
                trim: true,
            },

            state: {
                type: String,
                required: true,
                trim: true,
            },

            postalCode: {
                type: String,
                required: true,
                trim: true,
            },

            country: {
                type: String,
                required: true,
                trim: true,
            },
        },

        paymentMethod: {
            type: String,
            enum: ["COD", "CARD", "UPI"],
            default: "COD",
        },

        paymentStatus: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED"],
            default: "PENDING",
        },

        orderStatus: {
            type: String,
            enum: [
                "PLACED",
                "CONFIRMED",
                "SHIPPED",
                "DELIVERED",
                "CANCELLED",
            ],
            default: "PLACED",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

orderSchema.index({
    user: 1,
});

orderSchema.index({
    orderStatus: 1,
});

orderSchema.index({
    paymentStatus: 1,
});

orderSchema.index({
    createdAt: -1,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;