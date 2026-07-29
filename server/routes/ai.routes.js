import express from "express";

import {
    generateAIResponse,
} from "../controllers/ai.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/generate",
    protect,
    generateAIResponse
);

export default router;