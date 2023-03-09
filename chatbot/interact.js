// const tf = require('@tensorflow/tfjs');
const tf = require("@tensorflow/tfjs-node");
const tokenizer = require("tokenizers");
const fs = require("fs");
const path = require("path");

// Load the model, tags, and vocab
const model = await tf.loadLayersModel("file://./chatbot_model_js/model.json");
const tags = JSON.parse(fs.readFileSync("tags.json", "utf-8"));
const vocab = JSON.parse(fs.readFileSync("vocab.json", "utf-8"));
const data = JSON.parse(fs.readFileSync("responsedata.json", "utf-8"));

// Create lemmatizer, stemmer, and tokenizerHow would your friends describe you?
const lemmatizer = new Lemmatizer();
const stemmer = new PorterStemmer();
const tokenizer = new WordPunctTokenizer();

// Define function to process user input
function processInput(inputText) {
  // Tokenize and lemmatize the input
  let tokens = tokenizer.tokenize(inputText);
  tokens = tokens.map((token) => lemmatizer.lemmatize(token.toLowerCase()));
  tokens = tokens.map((token) => stemmer.stem(token));

  // Create input vector from processed input
  const inputVector = vocab.map((word) => (tokens.includes(word) ? 1 : 0));

  return inputVector;
}

// Define function to generate chatbot response
function generateResponse(inputText) {
  // Process the input
  const inputVector = processInput(inputText);

  // Get predicted probabilities for each tag
  const results = model.predict(
    tfn.tensor2d(inputVector, [1, inputVector.length])
  );
  const resultsData = results.dataSync();
  let tag;
  let tagIndex;
  if (Math.max(...resultsData) > 0.78) {
    tagIndex = resultsData.indexOf(Math.max(...resultsData));
    tag = tags[tagIndex];
  } else {
    tag = "default";
  }

  // Choose a random response from the tag's list of responses
  const intent = data.intents.find((intent) => intent.tag === tag);
  const response =
    intent.responses[Math.floor(Math.random() * intent.responses.length)];

  return response;
}

// Run the chatbot
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("You: ", (inputText) => {
  console.log("Bot: " + generateResponse(inputText));
  readline.close();
});
