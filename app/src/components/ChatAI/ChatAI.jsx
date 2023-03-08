// import React, { useState } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import natural from 'natural';
// import contractions from 'contractions';
// import tags from './tags.json';
// import vocab from './vocab.json';
// import modelJson from './chatbot_model_js/model.json';

// const ChatAI = () => {
//   // Initialize the input and response states
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');
//   // Load the model
//   const [model, setModel] = useState(null);
//   const loadModel = async () => {
//     const loadedModel = await tf.loadGraphModel(`data:///${modelJson}`);
//     setModel(loadedModel);
//   };
//   if (!model) {
//     loadModel();
//     return <div>Loading...</div>;
//   }

//   // Initialize the tokenizer, stop words, lemmatizer, and stemmer
//   const tokenizer = new natural.WordTokenizer();
//   const stopWords = new Set(natural.stopwords.words());
//   const lemmatizer = new natural.WordNetLemmatizer();
//   const stemmer = new natural.PorterStemmer();

//   // Normalize text
//   const normalizeText = (text) => {
//     text = contractions.fix(text.toLowerCase());
//     text = tokenizer.tokenize(text).filter(word => !stopWords.has(word)).join(' ');
//     text = lemmatizer.lemmatize(text);
//     text = stemmer.stem(text);
//     return text;
//   };



//   // Define the function to get the predicted tag
//   const predictTag = async (input) => {
//     const inputText = normalizeText(input);
//     const inputBag = vocab.map(word => inputText.split(' ').includes(word) ? 1 : 0);
//     const inputTensor = tf.tensor2d(inputBag, [1, inputBag.length]);
//     const predictions = await model.predict(inputTensor).data();
//     const maxIndex = predictions.indexOf(Math.max(...predictions));
//     return tags[maxIndex];
//   };

//   // Handle user input
//   const handleInput = async (event) => {
//     event.preventDefault();
//     const tag = await predictTag(input);
//     setResponse(`You said: ${input}\nI think you're talking about ${tag}.`);
//     setInput('');
//   };

//   return (
//     <div>
//       <h1>Chatbot</h1>
//       <form onSubmit={handleInput}>
//         <input type="text" value={input} onChange={e => setInput(e.target.value)} />
//         <button type="submit">Send</button>
//       </form>
//       <div>{response}</div>
//     </div>
//   );
// }

// export default ChatAI;