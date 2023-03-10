import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Jump() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      <div className="z-50 fixed flex right-0 bottom-0 w-full justify-end items-end h-2">
        {" "}
        {showTopBtn && (
          <motion.div initial={{ y: 500 }} animate={{ opacity: 1, y: 0 }}>
            <button
              className="flex items-center justify-center bg-dark-blue border-teal text-teal border-2 rounded-xl m-5 p-3 hover:border-teal hover:text-dark-blue hover:bg-teal duration-300"
              onClick={goToTop}
            >
              <div>&#x25B2;</div>
            </button>
          </motion.div>
        )}{" "}
      </div>
    </AnimatePresence>
  );
}

export default Jump;
