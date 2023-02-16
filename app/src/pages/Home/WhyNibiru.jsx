import React from "react";

const WhyNibiru = (props) => {
  return(
  <div className="lg:flex items-center justify-center gap-10 lg:h-[70vh] mt-24">
          <div className="lg:w-1/2">
            <img className="rounded-xl" src={props.image} />
          </div>
          <div className="lg:w-1/2 text-white p-5">
            <h1 className="mt-20 lg:mt-0 text-6xl font-bold">WHY NIBIRU?</h1>
            <ul className="list-disc text-2xl m-5">
              <li className="mt-2">
                We can moisteruize really well.
                <br />
                <span className="text-xl font-thin text-light-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur
                  iustitia laudatur? Rhetorice igitur, inquam, nos mavis quam
                  dialectice disputare? Illud dico, ea, quae dicat, praeclare
                  inter se cohaerere.
                </span>
              </li>
              <li className="mt-2">Nourishes Dry Skin</li>
              <li className="mt-2">
                Clinically proven healthier-looking skin in 1 day
              </li>
            </ul>
            <div className="flex gap-10 mt-10 mb-20 lg:mb-0">
                <button className="rainbow-button">
                  <div className="rainbow-button-inside">Learn More</div>
                </button>
            </div>
          </div>
        </div>
  );
}

export default WhyNibiru;