import { AnimatePresence, motion } from "framer-motion";
import fillerImage from "../../images/imagefiller.jpg";
import CompanyStats from "./CompanyStats";
import Comparable from "./Comparable";
import EarthLeafLogo from "./EnviromentLogos/earth_leaf_logo.png";
import LeafLogo from "./EnviromentLogos/leaf_logo.png";
import PlantRocketLogo from "./EnviromentLogos/plant_rocket_logo.png";
import RecyclingLogo from "./EnviromentLogos/recycling_logo.png";
import RhinoLogo from "./EnviromentLogos/rhino_logo.png";
import TreeLogo from "./EnviromentLogos/tree_logo.png";
import EnvironmentFriendly from "./EnvironmentFriendly.tsx";
import Intro from "./Intro";
import WhyNibiru from "./WhyNibiru";
import EarthView from "./earth_from_window.png";
import SpaceBackground from "./spaceBackground.png";
import WhyNibiruImage from "./whyNibiru.png";
import spaceComparison from "./spaceComparison.png";

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
          className="hidden object-cover lg:block mt-24 rounded-xl h-[80vh] w-full"
          src={SpaceBackground}
        />
        <Comparable image={spaceComparison} />
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
        <WhyNibiru image={WhyNibiruImage} />
      </div>
    </motion.div>
  );
};

export default Home;
