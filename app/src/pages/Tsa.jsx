import React from "react";
import { motion } from "framer-motion";
import ship from "./ship.png";
import building from "./buidingSpace.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="px-5 text-center text-white flex flex-col items-center justify-center gap-5">
      <h1 className="lg:text-7xl text-5xl font-bold mb-5">TSA Documentation</h1>
      <div className="bg-gray rounded-xl w-full md:w-1/2 p-5 flex flex-col gap-5">
        <a
          className="duration-200 hover:text-teal text-xl text-white"
          href="https://cdn.discordapp.com/attachments/1029219240743542845/1083993848503611402/student-copyright-checklist.jpg"
          target="_blank"
        >
          {" "}
          Copyright Checklist
        </a>
        <a
          className="duration-200 hover:text-teal text-xl text-white"
          href="https://cdn.discordapp.com/attachments/987561854731714580/1083074191185678376/Website_Planning_-_Google_Sheets.jpg"
          target="_blank"
        >
          {" "}
          Plan of Work Log
        </a>
      </div>
    </div>
  );
};

const LinkStyle = "hover:text-light-gray duration-200";

const Resources = () => {
  return (
    <div className="mt-24 text-center text-white flex flex-col items-center justify-center gap-5">
      <h1 className="lg:text-7xl text-5xl font-bold mb-5"> Resources Used</h1>
      <h2 className="text-2xl text-teal"> Design </h2>
      <p className="italic text-white text-lg">
        Artwork was generated using MidJourney (royalty-free)
      </p>
      <h2 className="text-2xl text-teal mt-10"> Programing </h2>
      <div className="flex flex-col mb-5">
        <a
          className={LinkStyle}
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
        >
          ReactJS
        </a>
        <a
          className={LinkStyle}
          href="https://tailwindcss.com/"
          target="_blank"
        >
          TailwindCSS
        </a>
        <a
          className={LinkStyle}
          href="https://www.framer.com/motion/"
          target="_blank"
        >
          Framer Motion
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <a
          className={LinkStyle}
          href="https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition"
          target="_blank"
        >
          Gradient Button Transition
        </a>
        <a
          className={LinkStyle}
          href="https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/"
          target="_blank"
        >
          Scroll To Top Component
        </a>
        <a
          className={LinkStyle}
          href="https://codepen.io/seethroughtrees/pen/XbjoaJ"
          target="_blank"
        >
          Form Field Animation
        </a>
        <a
          className={LinkStyle}
          href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp"
          target="_blank"
        >
          Scroll Bar
        </a>
        <a
          className={LinkStyle}
          href="https://www.youtube.com/watch?v=YxLMAk2H3ns"
          target="_blank"
        >
          Framer Motion Intro
        </a>
      </div>
      <p className="mt-5 italic text-white text-lg">
        All other information was gained from prior knowlege and class notes
      </p>
    </div>
  );
};

const Tsa = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 py-36">
        <Title />
        <Resources />
      </div>
    </motion.div>
  );
};

export default Tsa;
