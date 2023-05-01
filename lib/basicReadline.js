import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

export const basicReadline = () => {
    console.log("Welcome to your AI chat! Start your conversation by asking the AI something below. You can quit at anytime by typing in 'exit' \n\n")

    let input = '';

    const getInput = () => {
        rl.question('What is your name? ', (answer) => {
            input = answer;
            
            if (input === 'quit') {
                rl.close();
            } else {
                console.log(`You entered: ${input}`);
                getInput();
            }
        })
    }

    getInput();
}