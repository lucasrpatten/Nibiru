import React from "react";

interface Properties {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
  image3: string;
  alt3: string;
  image4: string;
  alt4: string;
  image5: string;
  alt5: string;
  image6: string;
  alt6: string;
}

const EnvironmentFriendly: React.FC<Properties> = (props: Properties) => {
  return (
    <div className="hidden lg:h-[80vh] lg:flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl mb-10">
        Evironmental friendly autonomous space travel verification
      </h2>
      <div className="lg:flex gap-10 w-1/2 items-center justify-center">
        <img
          alt={props.alt1}
          className="rounded-full w-1/4"
          src={props.image1}
        />
        <img
          alt={props.alt2}
          className="rounded-full w-1/4"
          src={props.image2}
        />
        <img
          alt={props.alt3}
          className="rounded-full w-1/4"
          src={props.image3}
        />
      </div>
      <div className="lg:flex gap-10 w-1/2 items-center justify-center mt-10">
        <img
          alt={props.alt4}
          className="rounded-full w-1/4"
          src={props.image4}
        />
        <img
          alt={props.alt5}
          className="rounded-full w-1/4"
          src={props.image5}
        />
        <img
          alt={props.alt6}
          className="rounded-full w-1/4"
          src={props.image6}
        />
      </div>
    </div>
  );
};

export default EnvironmentFriendly;
