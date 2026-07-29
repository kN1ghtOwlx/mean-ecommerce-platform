import { useState } from "react";

import Button from "../components/Button";

import { generateAIResponse } from "../services/ai.service";

function AIAssistantPage() {
    const [prompt, setPrompt] = useState("");

    const [response, setResponse] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!prompt.trim()) {
            return;
        }

        try {
            setLoading(true);

            const result =
                await generateAIResponse(prompt);

            setResponse(result.data);
        } catch (error) {
            setResponse(
                error.response?.data?.message ||
                "Unable to generate response."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container ai-container">
            <h1>AI Assistant</h1>

            <form
                className="ai-form"
                onSubmit={handleSubmit}
            >
                <textarea
                    rows="6"
                    placeholder="Enter your prompt..."
                    value={prompt}
                    onChange={(event) =>
                        setPrompt(event.target.value)
                    }
                />

                <Button type="submit">
                    {loading
                        ? "Generating..."
                        : "Generate"}
                </Button>
            </form>

            {response && (
                <div className="ai-response">
                    <h2>Response</h2>

                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}

export default AIAssistantPage;