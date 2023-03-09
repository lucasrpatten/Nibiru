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
      <div className="px-5 py-36">
        <Title />
        <div className="px-5 lg:px-24 mt-24 lg:flex w-full justify-center gap-10 h-auto">
          <img className="w-full lg:w-1/2 rounded-xl" src={ship}/>
          <div className="w-full lg:w-1/2">
            <h1 className="mt-24 md:mt-0 text-purple text-3xl font-semibold uppercase text-center">Mission</h1>
            <p className="text-white text-lg indent-16 leading-loose mt-5">At Nibiru, our mission is to provide safe, reliable, and unforgettable space travel experiences to our clients. We strive to make space travel accessible to everyone, inspiring a new generation of explorers and advancing the frontiers of human knowledge. Our commitment to innovation, safety, and sustainability drives us to continuously improve our technology, operations, and services, ensuring that every journey with us is an adventure of a lifetime. We are committed to reducing our impact on the environment and promoting sustainable practices in all aspects of our operations. We strive to be responsible stewards of the Earth and space.</p>
          </div>
        </div>
        <div className="px-5 lg:px-24 mt-24 lg:flex w-full justify-center gap-10 h-auto">
          <div className="w-full lg:w-1/2">
            <h1 className="text-purple text-3xl font-semibold uppercase text-center">Values</h1>
            <p className="text-white text-lg indent-16 leading-loose mt-5">At Nibiru, we are guided by a set of core values that define who we are and how we conduct ourselves as a company. These values are:
          <br/><br/>
          1. Safety: We prioritize the safety and well-being of our clients and staff above all else. We adhere to the highest safety standards and continuously improve our safety protocols and procedures.
          <br/><br/>
              2. Innovation: We foster a culture of innovation and creativity, constantly seeking new ways to improve our technology, operations, and services. We embrace new ideas and challenges, pushing the boundaries of what is possible in space travel.</p>          </div>
          <img className="mt-24 md:mt-0 w-full lg:w-1/2 rounded-xl" src={building}/>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
