import React from "react";
import { motion } from "framer-motion";
import ContactInput from "./ContactInput";

const ContactUs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-5 lg:px-32 md:p-10 md:px-18 "
      >
        <div className="mt-[max(10vw,60px)] lg:flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl text-center mb-[min(15vw,200px)]">
            Get Assistance From our Award-Winning Customer Support Team
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center w-100vw content-between">
          <ContactInput />
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
