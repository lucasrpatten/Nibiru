import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as natural from "natural";
import responses from "./responses.js";
import token from "./tokenizer";
// import profile from "./chatpfp.png";

interface MessageProps {
  message: string;
  isBot: boolean;
}
const ChatMessage: React.FC<MessageProps> = (props) => {
  let float_dir = props.isBot ? "float-left max-w-[80%]" : "float-right max-w-[80%]";
  let name = props.isBot ? "Nibiru Bot:" : "You:";
  return (
      <div className={`relative mb-1 w-full items-end gap-10`}>
        <div className={`${float_dir} `}>
          <p className="text-white mb-2">{name}</p>
          <div className="h-full bg-white rounded-xl  text-dark-blue p-3">
            {props.message}
          </div>
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
    vocab_json = JSON.parse(vocab_json);
    for (const word of text_arr) {
      const numerical_key = vocab_json[word];
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

  const predictOutput = async (text: string, message: string) => {
    const inputSeq = await preprocessText(text);
    const paddedSeq = padSequences([inputSeq], 20);
    console.log(paddedSeq.toString());
    const prediction = model.predict(paddedSeq);
    console.log(prediction.dataSync());
    let most_likely = prediction.argMax(1).dataSync()[0];
    let certainty = prediction.dataSync()[most_likely];
    most_likely = certainty > 0.65 ? most_likely + 1 : 0;
    let response_options = responses[most_likely];
    let new_response =
      response_options[Math.floor(Math.random() * response_options.length)];

    // Add delay before bot response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessages(
      [
        ...messages,
        { message: message, isBot: false },
        { message: new_response, isBot: true },
      ].slice(-20)
    );
  };

  const messageSent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let message = messageInput;
    setMessages([...messages, { message: messageInput, isBot: false }]);
    setMessageInput("");
    if (messageInput) {
      await predictOutput(messageInput, message);
    }
  };

  useEffect(() => {
    loadModel().then((model) => setModel(model));
  }, []);

  return (
    <>
      <div className="md:p-14 w-full flex flex-col items-center justify-center p-10 bg-gray my-5 rounded-xl relative text-white">
        <h2 className="p-8 text-2xl text-white text-center capitalize">
          {" "}
          AI Customer Assistance{" "}
        </h2>
        <div className="mt-5 w-full flex flex-col-reverse overscroll-contain overflow-anchor:auto overflow-y-scroll h-96 rounded-t-xl bg-dark-blue p-10">
          <div className="flex flex-col">
            <h2 className="text-lg text-light-gray text-center italic capitalize">
              {" "}
              Our digital assistant is ready to assist you...{" "}
            </h2>
            {messages.map((message, index) => (
              <ChatMessage
                message={message.message}
                isBot={message.isBot}
                key={index}
              />
            ))}
          </div>
        </div>
        <form
          className="rounded-b-xl focus-within:border-teal md:flex items-between justify-between gap-8 w-full md:bg-white rounded-b-xl"
          onSubmit={messageSent}
        >
          <input
            required
            type="text"
            placeholder="Enter Message Here"
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
            className="focus:outline-none bg-white text-dark-blue md:mb-0 w-full md:w-3/4 py-4 px-10 p-1 font-bold md:rounded-full"
          />
          <div className="w-full md:w-1/6 p-1 font-bold rounded-b-xl md:rounded-br-xl bg-gradient-to-r from-teal !to-purple via-blue">
            <input
              className="hover:cursor-pointer py-4 px-10 p-1 rounded-b-xl md:rounded-br-xl text-white w-full hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatAI;
