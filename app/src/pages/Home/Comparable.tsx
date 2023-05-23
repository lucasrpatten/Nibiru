import React from "react";
interface ComparableProps {
  image: string;
}
const Comparable: React.FC<ComparableProps> = ({ image }) => {
  return (
    <div className="lg:flex w-full flex-col items-center justify-center mt-24 h-[70vh]">
      <h1 className="text-2xl mb-10 text-white">
        How does Nibiru compare with other space services?
      </h1>
      <div className="lg:h-96 lg:flex lg:items-center lg:justify-center lg:gap-10 p-5 px-10 bg-gray rounded-xl h-[calc(100%+33vh)] w-11/12 md:w-3/4 lg:w-3/ text-white">
        <div className="lg:block lg:w-1/2 sm:w-1/2 sm:max-w-[400px] float-left sm:flex block top-0 w-full h-1/3">
          <div className="align-middle h-full flex items-center justify-center mr-5 rounded-xl w-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
          </div>
        </div>
        <div id="comparisons" className="sm:flex sm:flex-row sm:flex-wrap sm:align-middle sm:justify-center h-fit">
          <div id="comparison-row-1" className="lg:w-full lg:h-1/2 float-left">
            <div className="w-full sm:w-1/2 float-left">
              <h1 className="text-6xl font-bold">80%</h1>
              <p className="mt-2">Less Emergencies And Failures</p>
            </div>
            <div className="w-1/2 lg:float-right">
              <h1 className="text-6xl font-bold">50%</h1>
              <p className="mt-2">The Price</p>
            </div>
          </div>
          <div id="comparison-row-2" className="lg:w-full lg:h-1/2 float-left">
            <div className="w-full sm:w-1/2 float-left">
              <h1 className="text-6xl font-bold">250%</h1>
              <p className="mt-2">Better For The Environment</p>
            </div>
            <div className="w-1/2 lg:float-right">
              <h1 className="text-6xl font-bold">8</h1>
              <p className="mt-2">Safety Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comparable;