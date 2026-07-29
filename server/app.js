import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import notFoundMiddleware from "./middleware/notFound.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";

import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

console.log("CLIENT_URL =", process.env.CLIENT_URL);
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true
    })
);
app.use(helmet());
app.use(compression());
app.use(

    morgan(

        process.env.NODE_ENV === "production"

            ? "combined"

            : "dev"

    )

);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MERN E-Commerce Backend Running"
    })
});

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message:
            "Too many requests. Please try again later.",
    },
});

app.use("/api", limiter);

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ai", aiRoutes);

app.use(notFoundMiddleware);
if (process.env.NODE_ENV === "production") {
    app.use(
        express.static(
            path.join(__dirname, "../client/dist")
        )
    );

    app.get("*", (req, res) => {
        res.sendFile(
            path.join(
                __dirname,
                "../client/dist/index.html"
            )
        );
    });
}
app.use(errorMiddleware);

export default app;