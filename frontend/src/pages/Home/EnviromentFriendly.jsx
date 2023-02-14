import React from "react";

const EnviromentFriendly = (props) => {
  return (
    <div className="hidden lg:h-[80vh] lg:flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl mb-10">
        Evironmental friendly autonomous space travel verification
      </h2>
      <div className="lg:flex gap-10 w-1/2 items-center justify-center">
        <img className="rounded-full w-1/4" src={props.image} />
        <img className="rounded-full w-1/4" src={props.image} />
        <img className="rounded-full w-1/4" src={props.image} />
      </div>
      <div className="lg:flex gap-10 w-1/2 items-center justify-center mt-10">
        <img className="rounded-full w-1/4" src={props.image} />
        <img className="rounded-full w-1/4" src={props.image} />
        <img className="rounded-full w-1/4" src={props.image} />
      </div>
    </div>
  );
};

export default EnviromentFriendly;
