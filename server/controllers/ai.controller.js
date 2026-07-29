import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
    generateResponse,
} from "../services/ai.service.js";

const generateAIResponse = asyncHandler(
    async (req, res) => {
        const { prompt } = req.body;

        const response =
            await generateResponse(prompt);

        return res.status(200).json(
            new ApiResponse(
                200,
                "Response generated successfully",
                response
            )
        );
    }
);

export {
    generateAIResponse,
};