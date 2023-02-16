import React from "react";


const Comparable = (props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 h-[70vh]">
      <h1 className="text-2xl mb-10 text-white">
        How does Nibiru compare with other space services?
      </h1>
      <div className="flex items-center justify-center gap-10 p-5 px-10 bg-gray rounded-xl lg:w-3/4 h-96 text-white">
        <div className="lg:w-1/4">
          <div>
            <h1 className="text-6xl font-bold">80%</h1>
            <p className="mt-2">higher rates of success</p>
          </div>
          <div>
            <h1 className="mt-10 text-7xl font-bold">50%</h1>
            <p className="mt-2">Cheaper Prices</p>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div>
            <h1 className="text-6xl font-bold">80%</h1>
            <p className="mt-2">higher rates of success</p>
          </div>
          <div>
            <h1 className="mt-10 text-6xl font-bold">50%</h1>
            <p className="mt-2">Cheaper Prices</p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img className="rounded-xl h-full" src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default Comparable;