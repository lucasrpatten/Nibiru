function Prices() {
  const button = "my-10 font-bold py-5 px-10 rounded-full bg-blue"
  return (
    <>
    <div className="p-5 my-10">
      <div className="text-center text-white flex flex-col gap-5">
        <p className="">Affordable space travel:</p>
        <h1 className='lg:text-7xl text-5xl font-bold'>Pricing Plan</h1>
        <p>Choose the best plant that suits you</p>
      </div>
      <div className="mt-10 md:mb-0 md:mt-10 md:flex gap-5 text-white justify-center gap-5 md:py-10">
        <div className="rounded-xl mt-10 md:w-1/4 text-center border-2 border-blue p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className={button}>Choose Plan</button>
          <ul className="mt-5 leading-loose">
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
          </ul>
        </div>
        <div className="rounded-xl bg-blue mt-10 md:mt-0 md:mb-10 md:w-1/4 text-center border-2 border-blue p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className="m-10 font-bold py-5 px-10 rounded-full bg-dark-blue">Choose Plan</button>
          <ul className="mt-5 leading-loose">
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
            <li>Pain and Suffering is Real</li>
          </ul>
        </div>
        <div className="rounded-xl md:mt-10 mt-10 md:mb-0 md:w-1/4 text-center border-2 border-blue p-10">
          <p>Basic</p>
          <h3 className="text-3xl">$2000/month</h3>
          <button className={button}>Choose Plan</button>
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
    </>
  );
}

export default Prices;
