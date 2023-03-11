import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileNav() {
  return (
    <>
      <div className="flex flex-col text-white text-xl px-10 gap-8">
        <Link clasName="hover:text-light-gray" to="/">
          Home
        </Link>
        <Link clasName="hover:text-light-gray" to="/Prices">
          Pricing
        </Link>
        <Link clasName="hover:text-light-gray" to="/Training">
          Training
        </Link>
        <div>
          <h1 className="text-teal">Company</h1>
          <div className="flex flex-col p-5 gap-3">
            <Link to="/About" clasName="hover:text-light-gray">
              About Us
            </Link>
            <Link to="/Help" clasName="hover:text-light-gray">
              Help Center
            </Link>
            <Link to="/Tsa" clasName="hover:text-light-gray">
              TSA Documentation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
