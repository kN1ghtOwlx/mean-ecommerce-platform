import api from "../api/axios"

const generateAIResponse = async (prompt) => {
    const response = await api.post(
        "/ai/generate",
        {
            prompt
        }

    )
    return response.data;
}

export {
    generateAIResponse
}