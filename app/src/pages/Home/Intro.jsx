import React from "react";
import { Link } from "react-router-dom";

const Intro = (props) => {
  return (
    <div className="my-24 lg:flex gap-10">
      <div className="lg:w-1/2 text-white">
        <h1 className="lg:text-9xl text-8xl font-bold">NIBIRU</h1>
        <h2 className="text-3xl mt-5">Space into the future</h2>
        <p className="text-light-gray text-lg mt-20 font-light">
        Welcome to Nibiru, the premier commercial space travel agency that offers you the once-in-a-lifetime opportunity to explore the vast expanse of the cosmos. Our state-of-the-art technology and experienced team of astronauts ensure your safety and comfort as you embark on an unforgettable journey into space. From our luxurious space stations orbiting the Earth to the exhilarating experience of visiting the Moon and beyond, Nibiru offers a range of exciting space travel packages tailored to suit your every need.
        </p>
        <div className="md:flex mt-10 justify-center gap-10 items-center lg:justify-start lg:items-start">
          <Link to="/Prices">
            <button className="rainbow-button">
              <div className="rainbow-button-inside">Join Today</div>
            </button>
          </Link>
          <Link to="/About">
            <button className="rainbow-button">
              <div className="rainbow-button-inside">Learn More</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
        <img
          alt="View of Earth from a Nibiru Flight"
          className="rounded-xl lg:max-h-[712px] float-right mb-24"
          src={props.image}
        />
      </div>
    </div>
  );
};

export default Intro;
