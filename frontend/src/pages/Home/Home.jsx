import fillerImage from "../../images/imagefiller.jpg";
import Comparable from "./Comparable";
import { motion, AnimatePresence } from "framer-motion";
import WhyNibiru from "./WhyNibiru";
import Intro from "./Intro";
import CompanyStats from "./CompanyStats";
import EnviromentFriendly from "./EnviromentFriendly";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 lg:px-32 md:p-10 md:px-20">
        <Intro image={fillerImage} />
        <CompanyStats />
        <img
          className="hidden lg:block mt-24 rounded-xl h-[80vh] w-full"
          src={fillerImage}
        />
        <Comparable image={fillerImage} />
        <WhyNibiru image={fillerImage} />
        <EnviromentFriendly image={fillerImage} />
      </div>
    </motion.div>
  );
}

export default Home;
