import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PricingPlan = (props) => {
  const [styles, setStyles] = React.useState(props.styles);
  let defaultStyle =
    "rounded-xl mt-10 md:w-1/4 text-center border-2 border-gray p-10";
  const upMovement = -10;
  if (styles == null) {
    setStyles(defaultStyle);
  }

  return (
    <motion.div whileHover={{ scale: 1.01, y: upMovement}} className={styles}>
      <p>{props.name}</p>
      <h3 className="text-3xl">{props.price}</h3>
      <button className="rainbow-button">
        <div className="rainbow-button-inside">Choose Plan</div>
      </button>
      <ul className="mt-5 leading-loose">
        {props.information.map((text, index) => (
          <li key={`info_${index}`}>{text}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingPlan;
