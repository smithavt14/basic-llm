import { basicLLM } from "./lib/basicLLM.js"
import { basicChain } from "./lib/basicChain.js"
import { basicAgent } from "./lib/basicAgent.js"
import { basicMemory } from "./lib/basicMemory.js"
import readline from 'readline';
import './config.js';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let question = `Welcome! Choose which example functionality you want to try: \n\n1. Basic LLM\n2. Basic Chain\n3. Basic Agent\n4. Basic Memory (Chatbot)\n\nRespond with a corresponding number (1, 2, 3, or 4)!\n\n> `

rl.question(question, async (answer) => {
    
    switch (answer) {
        case '1':
            rl.question(`\nGreat, you've chosen our basic LLM. This will just be a basic call to openAI with your question. No chat interface, just one and done.\n\nOkay! What do you want to ask the AI?\n\n> `, async (userInput) => {
                console.log(await basicLLM(userInput))
                rl.close();
            })
            break;
        case '2':
            rl.question(`\nNice! You've chosen the basic chain example. We've already created part of the prompt for you. You only need to help fill in the blanks. Please tell us what your favorite animal is and we'll do something fun for you.\n\n> `, async (userInput) => {
                console.log(await basicChain(userInput))
                rl.close()
            })
            break;
        case '3':
            rl.question(`\nCool! This is a fun one, but to be used wisely. We've created an agent here that can search the internet to help you answer any questions. Though, it can not be 100% trusted, always check it's sources. Ask any question if you dare.\n\n> `, async (userInput) => {
                console.log(await basicAgent(userInput))
                rl.close()
            })
            break;
        case '4':
            rl.question(`\nOh nice! This will look a bit familiar. We're going to set you up with your very own AI chatbot. Feel free to ask it anything and have fun!\n\n> `, async (userInput) => {
                basicMemory(userInput, rl)
            })
            break;
        default:
            console.log('Woops wrong answer. Try again.');
            rl.close();
            break;
    }  
})

rl.on('close', () => {
    console.log('\n\nGoodbye! See you next time.')
    process.exit(0);
});