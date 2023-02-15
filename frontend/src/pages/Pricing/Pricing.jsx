import React from "react";
import { motion } from "framer-motion";
import PricingPlan from "./PricingPlan";

const Title = () => {
  return (
    <div className="text-center text-white flex flex-col gap-5">
      <p className="">Affordable space travel:</p>
      <h1 className="lg:text-7xl text-5xl font-bold">Pricing Plan</h1>
      <p className="mt-2">Choose the best plant that suits you:</p>
    </div>
  );
};

const Prices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 py-36">
        <Title />
        <div className="mt-10 md:mb-0 md:mt-10 lg:flex text-white justify-center gap-5 md:py-10">
          <PricingPlan
            name="Day Trip"
            price="$1000/person*"
            information={[
              "Flight Duration: 4 hours",
              "Max-Elevation: 150,000km",
              "Training Provided",
            ]}
          />
          <PricingPlan
            name="2 Day Trip"
            price="$2500/person*"
            information={["Flight Duration: 40 hours"]}
            styles="rounded-xl bg-gray mt-10 lg:mt-0 md:mb-10 lg:w-1/4 text-center border-2 border-gray p-10"
          />

          <PricingPlan
            name="Week Long Trip"
            price="$15000/person*"
            information={["Hey"]}
          />
        </div>
      </div>
      <div className="text-white mb-4">
        *Veterans and First Responder Discounts Offered
      </div>
    </motion.div>
  );
};

export default Prices;
