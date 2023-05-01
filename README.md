# Playing with [LangChain🦜](https://langchain.com/)

This project is a series of explorations into different functionality provided by the LangChain library. It's developed primarly in JS and written in an EMS style.

## Installation

To install and run the project, please follow the steps below:

1. Clone the project repository using Git.

   ```
   git clone https://github.com/smithavt14/basic-llm.git
   ```

2. Create an .env file in the root folder and add your API keys. You can find information about the OpenAI API [here](https://platform.openai.com/overview) and the SerpApi [here](https://serpapi.com/).
   
   ```bash
   touch .env
   ```

   ```
   OPENAI_API_KEY="sk..."
   SERPAPI_API_KEY=""
   ```
   
3. Install the project dependencies using Yarn.
   
   ```
   cd basic-llm
   yarn install
   ```
   
4. Run the project using the following command:
   
   ```
   node index.js
   ```

## Usage

When you run the project, you will be presented with a command-line interface that allows you to choose which example functionality you want to try. You can choose from the following options:

1. Basic LLM - This is a basic call to OpenAI with your question. No chat interface, just one and done.

2. Basic Chain - This is an example of chain functionality. You only need to help fill in the blanks of the prompt.

3. Basic Agent - This is an example of an agent that can search the internet to help you answer any questions. Always check its sources.

4. Basic Memory (Chatbot) - This sets you up with your very own AI chatbot. Feel free to ask it anything and have fun!

Once you choose an option, you will be prompted to provide input to the AI system. The system will process your input and provide an output based on the selected functionality.

## Code

The project code is organized into several modules that are located in the `lib` directory. The `index.js` file is the entry point for the project, and it imports and uses the modules based on user input.
