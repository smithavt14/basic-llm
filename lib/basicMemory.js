import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
// import readline from 'readline';

export const basicMemory = async (userInput, rl) => {

    // Create default model using OpenAI Wrapper and gpt-3.5. More info here: https://js.langchain.com/docs/api/llms_openai/classes/OpenAI
    const openAIAPIKey = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIAPIKey, temperature: 0.99, model: "gpt-3.5-turbo" });

    // Create new instance of BufferMemory. 
    const memory = new BufferMemory();

    // Create new instance of LangChain's conversationChain.
    const chain = new ConversationChain({ llm: model, memory: memory });

    // const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    // Begin chat interface
    let input = userInput;

    const getInput = async () => {
        let response = await chain.call({ input })

        let prompt = `\nAI Friend: ${response.response}\n\n> `
        
        rl.question(prompt, (answer) => {
            input = answer;
            
            if (input === 'quit' || input === 'exit') {
                rl.close();
            } else {
                getInput();
            }
        })
    }

    getInput();
}