import React from "react";
import { motion } from "framer-motion";
import FaqBanner from "./FaqBanner";

const FAQ = () => {
  return (
    <>
        <div>
            <FaqBanner 
                question="There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?"
                answer="There aren’t any—it’s a one-story house."
            />
            <FaqBanner 
                question="What can you break, even if you never pick it up or touch it?"
                answer="A promise"
            />
            <FaqBanner 
                question="A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?"
                answer="He was bald."
            />
            <FaqBanner 
                question="A man dies of old age on his 25 birthday. How is this possible?"
                answer="He was born on February 29."
            />
            <FaqBanner 
                question="The more of this there is, the less you see. What is it?"
                answer="Darkness"
            />
        </div>
    </>
  );
};

export default FAQ;