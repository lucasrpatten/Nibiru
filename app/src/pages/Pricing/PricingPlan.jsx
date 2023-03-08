import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingPlan = (props) => {
  const [styles, setStyles] = React.useState(props.styles);
  let defaultStyle =
    "rounded-xl mt-10 lg:w-1/4 text-center border-2 border-gray p-10";
  const upMovement = -10;
  if (styles == null) {
    setStyles(defaultStyle);
  }

  return (
    <motion.div
      // whileHover={{ scale: 1.01, y: upMovement }}
      className={styles}
    >
      <p>{props.name}</p>
      <h3 className="text-3xl">{props.price}</h3>
      <Link to="https://www.paypal.com/us/business/accept-payments/checkout">
        <button className="rainbow-button">
          <div className="rainbow-button-inside">Choose Plan</div>
        </button>
      </Link>
      <ul className="mt-5 leading-loose">
        {props.information.map((text, index) => (
          <li key={`info_${index}`}>{text}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingPlan;
