import fillerImage from "../../images/imagefiller.jpg";
import Comparable from "./Comparable";
import { motion, AnimatePresence } from "framer-motion";
import WhyNibiru from "./WhyNibiru";
import Intro from "./Intro";
import CompanyStats from "./CompanyStats";
import EnvironmentFriendly from "./EnvironmentFriendly";
import TreeLogo from "./tree_logo.png";
import LeafLogo from "./leaf_logo.png";
import EarthLeafLogo from "./earth_leaf_logo.png";
import EarthView from "./earth_from_window.png";
import RhinoLogo from "./rhino_logo.png";
import PlantRocketLogo from "./plant_rocket_logo.png";
import RecyclingLogo from "./recycling_logo.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 lg:px-32 md:p-10 md:px-20">
        <Intro image={EarthView} />
        <CompanyStats />
        <img
          className="hidden lg:block mt-24 rounded-xl h-[80vh] w-full"
          src={fillerImage}
        />
        <Comparable image={fillerImage} />
        <WhyNibiru image={fillerImage} />
        <EnvironmentFriendly
          // Photoshop these so they all have the same color background (#d7d2cf or #e6e5e5)
          image1={TreeLogo}
          alt1="tree logo"
          image2={EarthLeafLogo}
          alt2="earth-leaf-logo"
          image3={LeafLogo}
          alt3="leaf-logo"
          image4={RhinoLogo}
          alt4="rhino-logo"
          image5={PlantRocketLogo}
          alt5="plant-rocket-logo"
          image6={RecyclingLogo}
          alt6="recycling-logo"
        />
      </div>
    </motion.div>
  );
};

export default Home;
