import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const FAQBanner = (props) => {
    const [Banner, setBanner] = useState(true);

    return (
      <>
      <div className="hover:cursor-pointer flex flex-col rounded-lg">
        <div 
            className="mt-5 z-20 rounded-t-lg flex bg-gray text-white font-bold p-5 justify-between items-center"
            onClick={() => setBanner((s) => !s)}
            >
                <h1 className="mr-5"> {props.question} </h1>
                <AnimatePresence>
                    {Banner ? (
                    <motion.div
                        initial={{ opacity: 0, x: "-50%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        transition={{ stiffness: "100", duration: "0.55" }}
                    >
                        <FontAwesomeIcon icon={faArrowDown} />
                    </motion.div>
                    ) : null}
                </AnimatePresence>
                <AnimatePresence>
                    {!Banner ? (
                    <motion.div
                        initial={{ opacity: 0, x: "-50%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        transition={{ stiffness: "100", duration: "0.55" }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
            <AnimatePresence>
            {!Banner ? (
            <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-50%", transition: { duration: "0.25" } }}
                transition={{ duration: "0.35"  }}
            >
                <div className="rounded-b-lg p-5 flex bg-purple">
                    <h1 className="text-white"> {props.answer} </h1>
                </div>
            </motion.div>
            ) : null}
        </AnimatePresence>
      </div>
      </>
    );
  };
  
  export default FAQBanner;