import fillerImage from "./images/imagefiller.jpg";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const button =
    "w-full md:w-auto mt-10 md:m-10 p-1 font-bold rounded-xl bg-gradient-to-r from-teal via-blue to-purple";
  const buttonInside =
    "py-4 px-14 rounded-xl hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 lg:px-32 md:p-10 md:px-20">
        <div className="mt-24 lg:flex gap-10">
          <div className="lg:w-1/2 text-white">
            <h1 className="lg:text-9xl text-8xl font-bold">NIBIRU</h1>
            <h2 className="text-3xl mt-5">Space into the future</h2>
            <p className="text-light-gray text-lg mt-20 font-light">
              Tum, Quintus et Pomponius cum idem se velle dixissent, Piso
              exorsus est. Haec et tu ita posuisti, et verba vestra sunt. Itaque
              rursus eadem ratione, qua sum paulo ante usus, haerebitis. Longum
              est enim ad omnia respondere, quae a te dicta sunt. Dempta enim
              aeternitate nihilo beatior Iuppiter quam Epicurus; Quae contraria
              sunt his, malane?
            </p>
            <div className="md:flex mt-10 justify-center items-center lg:justify-start lg:items-start">
              <button className={button}>
                <div className={buttonInside}>Join Today</div>
              </button>
              <button className={button}>
                <div className={buttonInside}>Learn More</div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <img className="rounded-xl" src={fillerImage} />
          </div>
        </div>
        <div>
          <div className="hidden lg:flex my-24 justify-between text-white tracking-wider">
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin">
                {" "}
                worth of chickens killed in the last year
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin">
                {" "}
                worth of chickens killed in the last year
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin">
                {" "}
                worth of chickens killed in the last year
              </p>
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block mt-24 rounded-xl h-[80vh] w-full"
          src={fillerImage}
        />
        <div className="flex flex-col items-center justify-center mt-24 h-[70vh]">
          <h1 className="text-2xl mb-10 text-white">
            How does Nibiru compare with other space services?
          </h1>
          <div className="flex items-center justify-center gap-10 p-5 px-10 bg-gray rounded-xl lg:w-3/4 h-96 text-white">
            <div className="lg:w-1/4">
              <div>
                <h1 className="text-6xl font-bold">80%</h1>
                <p className="mt-2">higher rates of success</p>
              </div>
              <div>
                <h1 className="mt-10 text-7xl font-bold">50%</h1>
                <p className="mt-2">Cheaper Prices</p>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div>
                <h1 className="text-6xl font-bold">80%</h1>
                <p className="mt-2">higher rates of success</p>
              </div>
              <div>
                <h1 className="mt-10 text-6xl font-bold">50%</h1>
                <p className="mt-2">Cheaper Prices</p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img className="rounded-xl h-full" src={fillerImage} />
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-center gap-10 lg:h-[70vh] mt-24">
          <div className="lg:w-1/2">
            <img className="rounded-xl" src={fillerImage} />
          </div>
          <div className="lg:w-1/2 text-white p-5">
            <h1 className="mt-20 lg:mt-0 text-6xl font-bold">WHY NIBIRU?</h1>
            <ul className="list-disc text-2xl m-5">
              <li className="mt-2">
                We can moisteruize really well.
                <br />
                <span className="text-xl font-thin text-light-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur
                  iustitia laudatur? Rhetorice igitur, inquam, nos mavis quam
                  dialectice disputare? Illud dico, ea, quae dicat, praeclare
                  inter se cohaerere.
                </span>
              </li>
              <li className="mt-2">Nourishes Dry Skin</li>
              <li className="mt-2">
                Clinically proven healthier-looking skin in 1 day
              </li>
            </ul>
            <div className="flex gap-10 mt-10 mb-20 lg:mb-0">
              <button className={button}>
                <div className={buttonInside}>Learn More</div>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:h-[80vh] lg:flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl mb-10">
            Evironmental friendly autonomous space travel verification
          </h2>
          <div className="lg:flex gap-10 w-1/2 items-center justify-center">
            <img className="rounded-full w-1/4" src={fillerImage} />
            <img className="rounded-full w-1/4" src={fillerImage} />
            <img className="rounded-full w-1/4" src={fillerImage} />
          </div>
          <div className="lg:flex gap-10 w-1/2 items-center justify-center mt-10">
            <img className="rounded-full w-1/4" src={fillerImage} />
            <img className="rounded-full w-1/4" src={fillerImage} />
            <img className="rounded-full w-1/4" src={fillerImage} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
