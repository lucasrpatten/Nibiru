import React from "react";

const Intro = (props) => {
  return (
      <div className="mt-24 lg:flex gap-10">
        <div className="lg:w-1/2 text-white">
          <h1 className="lg:text-9xl text-8xl font-bold">NIBIRU</h1>
          <h2 className="text-3xl mt-5">Space into the future</h2>
          <p className="text-light-gray text-lg mt-20 font-light">
            Tum, Quintus et Pomponius cum idem se velle dixissent, Piso exorsus
            est. Haec et tu ita posuisti, et verba vestra sunt. Itaque rursus
            eadem ratione, qua sum paulo ante usus, haerebitis. Longum est enim
            ad omnia respondere, quae a te dicta sunt. Dempta enim aeternitate
            nihilo beatior Iuppiter quam Epicurus; Quae contraria sunt his,
            malane?
          </p>
          <div className="md:flex mt-10 justify-center gap-10 items-center lg:justify-start lg:items-start">
            <button className="rainbow-button">
              <div className="rainbow-button-inside">Join Today</div>
            </button>
            <button className="rainbow-button">
              <div className="rainbow-button-inside">Learn More</div>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <img alt="View of Earth from a Nibiru Flight" className="rounded-xl lg:max-h-[712px] float-right" src={props.image} />
        </div>
      </div>
  );
};

export default Intro;
