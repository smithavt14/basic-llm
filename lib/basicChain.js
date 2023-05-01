import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const basicChain = async (animal) => {    
    // Create default model using OpenAI Wrapper. More info here: https://js.langchain.com/docs/api/llms_openai/classes/OpenAI
    const openAIAPIKey = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIAPIKey, temperature: 0.99, model: "gpt-3.5-turbo" });
        
    // Create a new promptTemplate. More info here: https://js.langchain.com/docs/modules/prompts/prompt_templates/
    const template = "Write me a very short story about a {animal}?";
    const prompt = new PromptTemplate({ template: template, inputVariables: ["animal"] });
    
    // Create new LLMChain connecting our default model with our prompt. More information here: https://js.langchain.com/docs/modules/chains/llmchain
    const chain = new LLMChain({ llm: model, prompt: prompt });
    
    const chainResult = await chain.call({ animal });
    return chainResult.text
}