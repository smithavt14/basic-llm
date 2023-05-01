import { OpenAI } from "langchain/llms/openai"

// -- Basic call to OpenAI with a dynamic Prompt --

export const basicLLM = async (prompt) => {
    // Get .env variable from file

    // Create default model from openAI
    const openAIAPIKey = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIAPIKey, temperature: 0.9, model: "gpt-3.5-turbo" });
    
    // Call the model with the prompt passed from index.js
    return await model.call(prompt);
}