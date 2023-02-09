import fillerImage from "./images/imagefiller.jpg";

function App() {
  return (
    <>
      <div className='p-5 lg:px-32 md:p-10 md:px-20'>
        <div className="lg:flex gap-10">
          <div className='lg:w-1/2 text-white'>
            <h1 className='lg:text-9xl text-8xl font-bold'>NIBIRU</h1>
            <h2 className="text-3xl mt-5">Space into the future</h2>
            <p className="text-lg mt-20 font-light">Tum, Quintus et Pomponius cum idem se velle dixissent, Piso exorsus est. Haec et tu ita posuisti, et verba vestra sunt. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Longum est enim ad omnia respondere, quae a te dicta sunt. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quae contraria sunt his, malane?</p>
            <div className="flex gap-10 mt-10 justify-center items-center lg:justify-start lg:items-start">
              <button> Join Today </button>
              <button> Learn More </button>
            </div>
          </div>
          <div className='lg:w-1/2 mt-16 lg:mt-0'>
            <img className='rounded-xl' src={fillerImage}/>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex my-24 justify-between text-white tracking-wider">
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin"> worth of chickens killed in the last year</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin"> worth of chickens killed in the last year</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">$10,000,000</h1>
              <p className="mt-5 font-thin"> worth of chickens killed in the last year</p>
            </div>
          </div>
        </div>
        <img className='hidden lg:block mt-24 rounded-xl h-[80vh] w-full' src={fillerImage}/>
        <div className="flex flex-col items-center justify-center mt-24 h-[70vh]">
          <h1 className="text-2xl mb-10 text-white">How does Nibiru compare with other space services?</h1>
          <div className="flex items-center justify-center gap-10 p-5 bg-blue rounded-xl lg:w-3/4 h-96 text-white">
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
              <img className='rounded-xl h-full' src={fillerImage}/>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-center gap-10 lg:h-[70vh] mt-24">
          <div className='lg:w-1/2'>
            <img className='rounded-xl' src={fillerImage}/>
          </div>
          <div className='lg:w-1/2 text-white p-5'>
            <h1 className='mt-20 lg:mt-0 text-6xl font-bold'>WHY NIBIRU?</h1>
            <ul className="list-disc text-2xl m-5">
              <li className="mt-2">
                We can moisteruize really well.
                <br/>
                <span className="text-xl font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur iustitia laudatur? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Illud dico, ea, quae dicat, praeclare inter se cohaerere.
                </span>
              </li>
              <li className="mt-2">
                Nourishes Dry Skin
              </li>
              <li className="mt-2">
                Clinically proven healthier-looking skin in 1 day
              </li>
            </ul>
            <div className="flex gap-10 mt-10 mb-20 lg:mb-0">
              <button> Learn More </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:h-[80vh] lg:flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl mb-10">Evironmental friendly autonomous space travel verification</h2>
          <div className="lg:flex gap-10 w-1/2 items-center justify-center">
            <img className='rounded-full w-1/4' src={fillerImage}/>
            <img className='rounded-full w-1/4' src={fillerImage}/>
            <img className='rounded-full w-1/4' src={fillerImage}/>
          </div>
          <div className="lg:flex gap-10 w-1/2 items-center justify-center mt-10">
            <img className='rounded-full w-1/4' src={fillerImage}/>
            <img className='rounded-full w-1/4' src={fillerImage}/>
            <img className='rounded-full w-1/4' src={fillerImage}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
