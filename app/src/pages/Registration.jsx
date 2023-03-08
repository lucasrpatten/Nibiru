import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";
import { Link } from "react-router-dom";
import Banner from "./pageBanner.jpg"

const Registration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <div className="w-full h-full flex flex-col items-center justify-center">
            <img className="w-full h-full" src={Banner}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Registration;
