import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";
import infographicOne from "./trainingInfographics/infographicOne.png";
import infographicTwo from "./trainingInfographics/infographicTwo.png";
import infographicThree from "./trainingInfographics/infographicThree.png";

const Main = (props) => {
  return (
    <div className="flex items-center justify-center text-center text-white">
      <div>
        <h2 className="mt-10 text-center text-teal text-2xl"> {props.training} </h2>
          <div className="w-full md:w-1/2 flex gap-10 flex-row flex flex-col items-center justify-center">
              <p className="mt-4"> <span className="font-bold"> Purpose: </span> To prepare mid-level managers for their new roles in upper management and enhance their leadership skills: </p>
              <p className="font-bold my-3"> Learning Objectives: </p>
              <ul className="text-left list-disc list-inside">
                <li className="">Learn the responsibilities of a chief officer in the organization</li>
                <li className="">Explore strategies for establishing authority among peers</li>
                <li className="">Practice relationship-building techniques with members of your team</li>
                <li className="">Learn the responsibilities of a chief officer in the organization</li>
                <li className="">Learn the responsibilities of a chief officer in the organization</li>
              </ul>
              <p className="my-4"> <span className="font-bold"> Delivery mode: </span> Digital coursework received after registration</p>
              <p className="mb-4"> <span className="font-bold"> Evaluation procedure: </span> Must receive at least a 80% passing mark to proceed to specialized training</p>
          </div>
        </div>
      <img className="w-full md:w-1/3" src={props.image}/>
    </div>
  );
};

const Training = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <h1 className="text-center text-white lg:text-7xl text-5xl font-bold">Training Breakdown</h1>
    <Main
       training="General Training"
       image={infographicOne}
    />
    </motion.div>
  );
};

export default Training;
