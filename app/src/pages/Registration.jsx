import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";
import { Link } from "react-router-dom";
import Banner from "./pageBanner.jpg";
import MBanner from "./bannerMobile.jpg";

const Registration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img className="w-full h-full hidden md:block" src={Banner} />
          <img className="w-full h-full block md:hidden" src={MBanner} />
        </div>
      </div>
    </motion.div>
  );
};

export default Registration;
