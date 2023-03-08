import React from "react";
import { Link } from "react-router-dom";

const WhyNibiru = (props) => {
  return (
    <div className="lg:flex items-center justify-center gap-10 lg:h-[70vh] my-36">
      <div className="lg:w-1/2 text-white p-5">
        <h1 className="mt-20 lg:mt-0 text-6xl font-bold">WHY NIBIRU?</h1>
        <ul className="list-disc text-2xl m-5">
          <li className="mt-2">
            Safe space travel
            <br />
            <span className="text-xl font-thin text-light-gray">
            Whether you are a thrill-seeker, an adventurer, or a scientist, we have the perfect package to satisfy your curiosity and feed your passion for exploration. With Nibiru, the sky is no longer the limit - let us take you to the stars!
            </span>
          </li>
          <li className="mt-2">Out of this world experiences</li>
          <li className="mt-2">
            Most eco friendly interplanet space travel
          </li>
        </ul>
        <div className="flex gap-10 mt-10 mb-20 lg:mb-0">
          <Link to="/Prices">
            <button className="rainbow-button">
              <div className="rainbow-button-inside">Start Today</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img className="rounded-xl" src={props.image} />
      </div>
    </div>
  );
};

export default WhyNibiru;
