// import React, { useEffect, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import vocab from "./vocab_config.json";
// import tags from "./tags.json";

// interface Properties {}

// const Bot: React.FunctionComponent<Properties> = (props) => {
//   const [model, setModel] = useState<any>(null);
//   const [response, setResponse] = useState<any>([]);
//   // Define a function to preprocess the text
//   const preprocessText = async (text: string): Promise<number[]> => {
//     const pattern = /[!"#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~\t\n]+/g;
//     text = text.toLowerCase();
//     text = text.replace(pattern, "");
//     text = text.replace("'", " '");
//     let text_arr = text.split(" ");
//     let int_arr: any[] = Array(20).fill(0, 0);
//     let vocab_json = JSON.parse(vocab);

//     for (let i = 0; i < text_arr.length; i++) {
//       const word = text_arr[i];
//       console.log(word);
//       let numerical_key = Object.keys(vocab_json).find(
//         (key) => vocab_json[key] === word
//       );
//       int_arr[i] = numerical_key === undefined ? 0 : parseInt(numerical_key);
//     }
//     return int_arr;
//   };

//   const loadModel = async () => {
//     const model = await tf.loadLayersModel(
//       window.location.origin + process.env.PUBLIC_URL + "/chatbot_js/model.json"
//     );
//     return model;
//   };

//   const predictOutput = async (text: string) => {
//     const inputTensor = tf.tensor2d(await preprocessText(text), [1, 20]);
//     const prediction = model.predict(inputTensor);
//     console.log(prediction)
//     setResponse(response.unshift(tags[0]));
//   };

//   useEffect(() => {
//     loadModel()
//       .then((model) => setModel(model))

//   }, []);

//   return <>
//     <button onClick={() => predictOutput("hello")}>aafdsadsf</button>
//     {response}
//   </>
// };

// export default Bot;
