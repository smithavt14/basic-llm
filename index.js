import { basicLLM } from "./lib/basicLLM.js"
import { basicChain } from "./lib/basicChain.js"
import { basicAgent } from "./lib/basicAgent.js"
import { basicMemory } from "./lib/basicMemory.js"
// import { basicReadline } from "./lib/basicReadline.js"
import './config.js';

/*   --- 1. Basic LLM Example ---
let basicLLMResult = await basicLLM("Write me a 20 word poem about a cat.")
console.log(basicLLMResult)
*/

/* --- 2. Basic Chain Example ---
const basicChainResult = await basicChain("Donkey")
console.log(basicChainResult)
*/ 

/* -- 3. Basic Agent Example --
const basicAgentResult = await basicAgent("Which NHL teams made it into the playoffs this year?")
console.log(basicAgentResult)
*/

// -- 4. Basic Memory Example --
basicMemory()

// basicReadline()