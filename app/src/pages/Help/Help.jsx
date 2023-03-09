import React from "react";
import { motion } from "framer-motion";
import FAQ from "./Faq";
import { Link } from "react-router-dom";
import ChatAI from "./ChatAI/ChatAI";

const Help = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-5 lg:px-32 md:p-10 md:px-18 "
      >
        <div className="mt-[max(10vw,60px)] lg:flex flex-col items-center justify-center text-white">
          <h1 className="lg:text-7xl text-5xl text-center font-bold">Help Center</h1>
          <h2 className="text-2xl text-center mt-24 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="w-full mb-10">
            <FAQ />
          </div>
        </div>
        <ChatAI />

        {/* <h2 className="text-white text-2xl text-center capitalize"> AI Chatbot </h2> */}
        <div className="flex flex-col mt-24 mb-10 lg:px-96 pb-24 text-white">
            <h2 className="text-2xl text-center capitalize"> Have more questions? </h2>
            <button className="rainbow-button">
                <Link to="/ContactUs">
                <div className="rainbow-button-inside">Contact Us Directly</div>
                </Link>
            </button>
        </div>
      </motion.div>
    </>
  );
};

export default Help;
