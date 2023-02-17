import React from "react";

interface Properties {
  question: string;
  answer: string;
}

const FaqBanner: React.FC<Properties> = (props) => {
  return <>
  <div className="m-[100px] bg-white">
    <div>{props.question}</div>
    <div>{props.answer}</div>
  </div>
  </>
};


export default FaqBanner;