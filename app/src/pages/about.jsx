import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";

const Title = () => {
  return (
    <div className="text-center text-white flex flex-col gap-5">
      <h1 className="lg:text-7xl text-5xl font-bold">About Us</h1>
      <p className="text-xl uppercase">Space into the future:</p>
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 py-36">
        <Title />
        <div className="px-24 mt-24 flex w-full justify-center gap-10 h-auto">
          <img className="w-1/2 rounded-xl" src={ship}/>
          <div className="w-1/2">
            <h1 className="text-purple text-3xl font-semibold uppercase text-center">Mission</h1>
            <p className="text-white text-lg indent-16 leading-loose mt-5">From the start, our mission is to empower today’s society through equipping them with skills necessary to attain the benefits and opportunities of computer programming, while offering free courses to everyone, no matter what circumstances they may find themselves in. Why computer programming?   Computer programming has been shown to significantly enhance critical thinking in young as well as middle aged individuals. It has been proven to assist elderly who have limited brain agility as it keeps their minds active. Our mission is not limited to educating about the programming language, but also educating individuals about the opportunities they receive by obtaining skills in computer programming.</p>
          </div>
        </div>
        <div className="px-24 mt-24 flex w-full justify-center gap-10 h-auto">
          <div className="w-1/2">
            <h1 className="text-purple text-3xl font-semibold uppercase text-center">Values</h1>
            <p className="text-white text-lg indent-16 leading-loose mt-5">From the start, our mission is to empower today’s society through equipping them with skills necessary to attain the benefits and opportunities of computer programming, while offering free courses to everyone, no matter what circumstances they may find themselves in. </p>
            <p className="text-white text-lg indent-16 leading-loose mt-5">Why computer programming?   Computer programming has been shown to significantly enhance critical thinking in young as well as middle aged individuals. It has been proven to assist elderly who have limited brain agility as it keeps their minds active. Our mission is not limited to educating about the programming language, but also educating individuals about the opportunities they receive by obtaining skills in computer programming.</p>
          </div>
          <img className="w-1/2 rounded-xl" src={building}/>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
