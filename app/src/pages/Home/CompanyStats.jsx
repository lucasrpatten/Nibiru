import React from "react";

const CompanyStats = () => {
  return (
    <div>
      <div className="hidden lg:flex my-20 justify-between text-white tracking-wider">
        <div>
          <h1 className="text-4xl font-bold">$5,000,000</h1>
          <p className="mt-5 font-thin">
            {" "}
            worth of income donated to charity
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">600%</h1>
          <p className="mt-5 font-thin">
            {" "}
            less waste during take-off
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">24</h1>
          <p className="mt-5 font-thin">
            {" "}
            eco and skills certifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
