import { motion, AnimatePresence } from "framer-motion";

function Prices() {
  const button = "w-full md:w-auto mt-10 md:m-10 p-1 font-bold rounded-xl bg-gradient-to-r from-teal via-blue to-purple"
  const buttonInside = 'py-4 px-10 rounded-xl hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0'
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
    <div className="p-5 py-36">
      <div className="text-center text-white flex flex-col gap-5">
        <p className="">Affordable space travel:</p>
        <h1 className='lg:text-7xl text-5xl font-bold'>Pricing Plan</h1>
        <p className="mt-2">Choose the best plant that suits you:</p>
      </div>
      <div className="mt-10 md:mb-0 md:mt-10 md:flex gap-5 text-white justify-center gap-5 md:py-10">
        <div className="rounded-xl mt-10 md:w-1/4 text-center border-2 border-gray p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className={button}> 
            <div className={buttonInside}>
              Choose Plan
            </div>
          </button>
          <ul className="mt-5 leading-loose">
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
          </ul>
        </div>
        <div className="rounded-xl bg-gray mt-10 md:mt-0 md:mb-10 md:w-1/4 text-center border-2 border-gray p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className="w-full md:w-auto mt-10 md:m-10 p-1 border-4 border-purple font-bold rounded-xl bg-dark-blue/100 bg-dark-blue/0"> 
            <div className='py-4 px-10 rounded-xl hover:bg-purple duration-300'>
              Choose Plan
            </div>
          </button>
          <ul className="mt-5 leading-loose">
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
          </ul>
        </div>
        <div className="rounded-xl md:mt-10 mt-10 md:mb-0 md:w-1/4 text-center border-2 border-gray p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className={button}> 
            <div className={buttonInside}>
              Choose Plan
            </div>
          </button>
          <ul className="mt-5 leading-loose">
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
          </ul>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Prices;
