import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";
import infographicOne from "./trainingInfographics/infographicOne.png";
import infographicTwo from "./trainingInfographics/infographicTwo.png";
import infographicThree from "./trainingInfographics/infographicThree.png";

const Main = (props) => {
  return (
    <div className="gap-10 mb-24 flex items-center justify-center text-center text-white">
      <div>
        <h2 className="mt-10 text-center text-teal text-2xl"> {props.training} </h2>
          <div className=" flex gap-10 flex-row flex flex-col items-center justify-center">
              <p className="mt-4"> <span className="font-bold"> Purpose: </span> {props.purpose} </p>
              <p className="font-bold my-3"> Learning Objectives: </p>
              <ul className="text-left list-disc list-inside">
                <li className="">{props.objectiveOne}</li>
                <li className="">{props.objectiveTwo}</li>
                <li className="">{props.objectiveThree}</li>
                <li className="">{props.objectiveFour}</li>
                <li className="">{props.objectiveFive}</li>
              </ul>
              <p className="my-4"> <span className="font-bold"> Delivery mode: </span> {props.delivery} </p>
              <p className="mb-4"> <span className="font-bold"> Evaluation procedure: </span> {props.evaluation} </p>
          </div>
        </div>
      <img className="w-full md:w-1/3" src={props.image}/>
    </div>
  );
};

const MainFlipped = (props) => {
  return (
    <div className="gap-10 mb-24 flex items-center justify-center text-center text-white">
      <img className="w-full md:w-1/3" src={props.image}/>
      <div>
        <h2 className="mt-10 text-center text-teal text-2xl"> {props.training} </h2>
          <div className=" flex gap-10 flex-row flex flex-col items-center justify-center">
              <p className="mt-4"> <span className="font-bold"> Purpose: </span> {props.purpose} </p>
              <p className="font-bold my-3"> Learning Objectives: </p>
              <ul className="text-left list-disc list-inside">
                <li className="">{props.objectiveOne}</li>
                <li className="">{props.objectiveTwo}</li>
                <li className="">{props.objectiveThree}</li>
                <li className="">{props.objectiveFour}</li>
                <li className="">{props.objectiveFive}</li>
              </ul>
              <p className="my-4"> <span className="font-bold"> Delivery mode: </span> {props.delivery} </p>
              <p className="mb-4"> <span className="font-bold"> Evaluation procedure: </span> {props.evaluation} </p>
          </div>
        </div>
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
      <div className="pt-36">

      </div>
    <h1 className="mb-14 text-center text-white lg:text-7xl text-5xl font-bold">Training Breakdown</h1>
    <Main
       training="General Training"
       image={infographicOne}
       purpose="To prepare for specialized training:"
       delivery="Digital coursework received after registration"
       evaluation="Must receive at least a 80% passing mark to proceed to specialized training"
       objectiveOne="Understand the fundamentals of space exploration, including the history and evolution of spaceflight technology."
       objectiveTwo="Identify the different types of spacecraft, their components, and their functions."
       objectiveThree="Explain the principles of rocket propulsion and the different types of rocket engines."
       objectiveFour="Understand the basic principles of celestial mechanics and orbital dynamics."
       objectiveFive="Understand the effects of microgravity on the human body and the challenges of living and working in space."
    />
    <MainFlipped
       training="Day Trip Training"
       image={infographicTwo}
       purpose="To prepare for specialized round-trip experience:"
       delivery="On-site lessons received after digital certification"
       evaluation="Must receive at least a 80% passing mark to proceed to round-trip"
       objectiveOne="Understand the principles of spaceflight safety and emergency procedures."
       objectiveTwo="Identify the different types of spacewalks and the procedures involved."
       objectiveThree="Understand the principles of extravehicular activity and the challenges of working in a spacesuit."
       objectiveFour="Understand the principles of rendezvous and docking procedures."
       objectiveFive="Understand the different types of spaceports and the role they play in space tourism."
    />
    <Main
       training="2-Day Trip Training"
       image={infographicThree}
       purpose="To prepare for specialized round-trip experience:"
       delivery="On-site lessons received after digital certification"
       evaluation="Must receive at least a 80% passing mark to proceed to round-trip"
       objectiveOne="Identify the various space agencies and their missions, including NASA, ESA, and JAXA."
       objectiveTwo="Understand the international cooperation involved in space exploration"
       objectiveThree="Identify the various space launch facilities around the world."
       objectiveFour="Understand the principles of space law and regulations governing space activities."
       objectiveFive="Explain the role of satellites in communication, navigation, and remote sensing."
    />
    <MainFlipped
       training="Week Long Trip Training"
       image={infographicTwo}
       purpose="To prepare for specialized round-trip experience:"
       delivery="On-site lessons received after digital certification"
       evaluation="Must receive at least a 80% passing mark to proceed to round-trip"
       objectiveOne="Understand the principles of space debris mitigation and management."
       objectiveTwo="Identify the different types of spacewalks and the procedures involved."
       objectiveThree="Understand the principles of spaceflight safety and emergency procedures."
       objectiveFour="Understand the principles of space mining and the potential benefits and challenges."
       objectiveFive="Identify the different types of space habitats and their waste management systems"
    />
    </motion.div>
  );
};

export default Training;
