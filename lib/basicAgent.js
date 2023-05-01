import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";

export const basicAgent = async (input) => {
    // Create default model using OpenAI wrapper. More info here: https://js.langchain.com/docs/api/llms_openai/classes/OpenAI
    const openAIAPIKey = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIAPIKey, temperature: 0, model: "gpt-3.5-turbo" });

    // Create new instance of SerpAPI tool. Add that tool to the "tools" array. More info here: https://js.langchain.com/docs/api/tools/classes/SerpAPI
    const serpAPI = new SerpAPI(process.env.SERPAPI_API_KEY, { location: "Austin,Texas,United States", hl: "en", gl: "us" })
    const tools = [serpAPI];

    // Create new agent by integrating tools array, default model, and defining the agent type. More info about what type of agent to use in whatever scenerio can be found here: https://js.langchain.com/docs/modules/agents/agents/
    const agentType = "zero-shot-react-description" // works best with text-based LLM models
    const executor = await initializeAgentExecutorWithOptions(tools, model, { agentType, verbose: true });

    console.log(`\n\nSearching... this might take a moment.\n\n`);

    const result = await executor.call({ input });

    return (`\n\nI think I've found the answer:\n\n${result.output}`);
}

// Doesn't work so well. Keep getting back incorrect information. Seems like the agent is not using the correct tool to find the answer. Would like to understand how to get what's going on under the hood.