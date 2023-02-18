// import the necessary libraries
const tf = require('@tensorflow/tfjs');
const fetch = require('node-fetch');
const stemmer = require('stemmer');
const lemmatizer = require('lemmatizer');

// define a function to tokenize the input sentence
function tokenize(sentence) {
  // split the sentence into individual words
  let tokens = sentence.toLowerCase().split(' ');

  // apply stemming and lemmatization to the tokens
  tokens = tokens.map((token) => stemmer(token));
  tokens = tokens.map((token) => lemmatizer(token));

  // return the processed tokens
  return tokens;
}

// load the model, tags, and vocab
async function loadModel() {
  const model = await tf.loadLayersModel('chatbot_model_js/model.json');
  const tags = await fetch('tags.json').then((response) => response.json());
  const vocab = await fetch('vocab.json').then((response) => response.json());

  // define a function to get a prediction from the model
  function predict(sentence) {
    // tokenize the input sentence
    const tokens = tokenize(sentence);

    // create a one-hot encoding of the tokens
    const encoding = vocab.map((word) => {
      return tokens.includes(word) ? 1 : 0;
    });

    // get the model's prediction
    const prediction = model.predict(tf.tensor([encoding]));

    // convert the prediction tensor to an array
    const values = prediction.dataSync();

    // get the index of the highest value
    const index = values.indexOf(Math.max(...values));

    // return the tag with the highest predicted value
    return tags[index];
  }

  // return the predict function
  return predict;
}

// define a function to handle user input
async function handleInput() {
  // load the model
  const predict = await loadModel();

  // loop to get user input
  while (true) {
    // get user input from the console
    const input = prompt('You: ');

    // break the loop if the user input is empty
    if (!input) break;

    // get a prediction from the model
    const tag = predict(input);

    // log the predicted tag to the console
    console.log(`Bot: ${tag}`);
  }
}

// call the handleInput function to start the chatbot
handleInput();
