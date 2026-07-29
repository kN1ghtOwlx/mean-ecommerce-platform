import model from "../config/gemini.js"

const generateResponse = async (promt) => {
    const result = await model.generateContent(promt);

    const response = result.response;

    return response.text();
}

export {
    generateResponse,
}