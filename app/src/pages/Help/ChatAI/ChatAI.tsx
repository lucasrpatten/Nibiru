import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as natural from "natural";
import responses from "./responses.js";
import token from "./tokenizer";

interface MessageProps {
  message: string;
  isBot: boolean;
}
const ChatMessage: React.FC<MessageProps> = (props) => {
  let float_dir = props.isBot ? "float-right" : "float-left";
  return (
    <div className="mb-10">
      <div className={float_dir}>
        <p className="font-bold">Response: </p>
        <span>{props.message}</span> <br />
      </div>
    </div>
  );
};

const ChatAI: React.FunctionComponent = () => {
  const [model, setModel] = useState<any>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");

  // Define a function to pad sequences
  const padSequences = (sequences: number[][], maxLen: number): tf.Tensor2D => {
    return tf.tensor2d(
      sequences.map((seq) => {
        if (seq.length > maxLen) {
          seq.splice(maxLen, seq.length - maxLen);
        }
        return seq.concat(Array(maxLen - seq.length).fill(0));
      }),
      [sequences.length, maxLen]
    );
  };


  // Define a function to preprocess the text
  const preprocessText = async (text: string): Promise<number[]> => {
    text = text.toLowerCase();
    const tokenizer = new natural.TreebankWordTokenizer();
    const text_arr = tokenizer.tokenize(text);
    console.log(text_arr);
    const int_arr: any[] = [];
    let vocab_json = JSON.parse(token)["config"]["word_index"];
    vocab_json = JSON.parse(vocab_json)
    for (const word of text_arr) {
      const numerical_key = vocab_json[word]
      int_arr.push(numerical_key === undefined ? 0 : numerical_key);
    }
    return int_arr;
  };

  const loadModel = async () => {
    const model = await tf.loadLayersModel(
      window.location.origin + process.env.PUBLIC_URL + "/chatbot_js/model.json"
    );
    return model;
  };

  const predictOutput = async (text: string) => {
    const inputSeq = await preprocessText(text);
    const paddedSeq = padSequences([inputSeq], 20);
    console.log(paddedSeq.toString());
    const prediction = model.predict(paddedSeq);
    console.log(prediction.dataSync());
    let most_likely = prediction.argMax(1).dataSync()[0];
    console.log(most_likely);
    let certainty = prediction.dataSync()[most_likely];
    console.log(certainty);
    most_likely = certainty > 0.65 ? most_likely + 1 : 0;
    let response_options = responses[most_likely];
    let new_response =
      response_options[Math.floor(Math.random() * response_options.length)];
    console.log(new_response);

    // Add delay before bot response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessages(
      [...messages, { message: new_response, isBot: true }].slice(-20)
    );
  };

  const messageSent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageInput) {
      setMessages([...messages, { message: messageInput, isBot: false }]);
      setMessageInput("");
      await predictOutput(messageInput);
    }
  };

  useEffect(() => {
    loadModel().then((model) => setModel(model));
  }, []);

  return (
    <>
        <div className="text-dark-blue w-full flex flex-col items-center justify-center p-10 px-24 bg-gray my-5 rounded-xl relative text-white">
          <h2 className="pt-14 pb-8 text-lg text-light-gray text-center italic capitalize"> Our digital assistant is replying... </h2>
            {messages.map((message, index) => (
              <ChatMessage
                message={message.message}
                isBot={message.isBot}
                key={index}
              />
            ))}
        </div>
        <div className="w-full">
          <form className="md:flex items-between justify-between gap-8 w-full mt-10 md:bg-gray rounded-full" onSubmit={messageSent}>
            <input
              required
              type="text"
              placeholder="Enter Message Here"
              onChange={(e) => setMessageInput(e.target.value)}
              value={messageInput}
              className="mb-5 text-dark-blue md:mb-0 w-full md:w-3/4 py-4 px-10 p-1 font-bold rounded-full"
            />
            <div className="w-full md:w-1/6 p-1 font-bold rounded-full bg-gradient-to-r from-teal !to-purple via-blue">
              <input className="py-4 px-10 p-1 uppercase text-white w-full rounded-full hover:bg-gray/100 transition duration-300 bg-gray/0" type="submit" value="Send" />
            </div>
          </form>
        </div>
    </>
  );
};

export default ChatAI;
