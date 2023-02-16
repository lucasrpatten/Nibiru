import React from "react";
import { motion } from "framer-motion";
import ContactInput from "./ContactInput";

const CustomerSupport = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="p-5 lg:px-32 md:p-10 md:px-20">
          <div className="hidden lg:h-[80vh] lg:flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl mb-10">
              Get Assistance From our World Class, Award Winning Customer
              Support Team
            </h2>
          </div>
          <div className="flex flex-col-reverse items-center">
          <ContactInput />
          </div>
      </motion.div>
    </>
  );
};

export default CustomerSupport;
