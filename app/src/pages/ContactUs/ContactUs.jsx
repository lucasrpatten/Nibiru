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
          <h1 className="lg:text-7xl text-5xl font-bold">Contact Us</h1>
          <h2 className="text-2xl text-center mt-24 mb-10">
            Get Assistance From our Award-Winning Customer Support Team
          </h2>
        </div>
        <div className="mb-24 flex flex-row flex-wrap justify-between items-center w-100vw content-between">
          <ContactInput />
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
