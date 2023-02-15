import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import fillerImage from "../images/imagefiller.jpg";

function Footer() {
  const button =
    "w-full md:w-auto mt-10 md:m-10 p-1 font-bold rounded-full bg-gradient-to-r from-teal via-blue to-purple";
  const buttonInside =
    "py-4 px-10 rounded-full hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0";
  return (
    <>
      <div className="pt-20 md:p-10 p-5 bg-gray border-t border-white">
        <div className="mt-10 w-full lg:flex gap-10 justify-center text-center">
          <div className="text-white lg:w-1/4 h-full">
            <h1 className="text-2xl font-bold mb-10">NIBIRU</h1>
            <p className="mb-10">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur
              iustitia laudatur? Rhetorice igitur, inquam, nos mavis quam
              dialectice disputare? Illud dico, ea, quae dicat, praeclare inter
              se cohaerere.{" "}
            </p>
            <button className={button}>
              <div className={buttonInside}>TSA Documentation</div>
            </button>
          </div>
          <div className="mt-20 lg:mt-0 text-2xl text-white lg:w-1/4 h-full flex flex-col items-center justify-center">
            <div>
              <h1 className="mb-10">Social Network</h1>
              <div className="flex flex-col gap-7 w-1/2">
                <span className="flex gap-10">
                  <img className="max-h-8 rounded-full" src={fillerImage} />
                  <a to="/">Discord</a>
                </span>
                <span className="flex gap-10">
                  <img className="max-h-8 rounded-full" src={fillerImage} />
                  <a to="/">Instagram</a>
                </span>
                <span className="flex gap-10">
                  <img className="max-h-8 rounded-full" src={fillerImage} />
                  <a to="/">Twitter</a>
                </span>
                <span className="flex gap-10">
                  <img className="max-h-8 rounded-full" src={fillerImage} />
                  <a to="/">Facebook</a>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-1/4 text-white h-full">
            <h1 className="text-2xl mb-10">Sign Up for Email Updates</h1>
            <form className="flex flex-col" action="/action_page.php">
              <label for="fname">Enter your email:</label>
              <input
                className="py-4 px-10 w-full md:w-auto mt-10 p-1 font-bold rounded-full"
                type="text"
                id="fname"
                name="fname"
              />
              <button className={button} type="submit">
                <div className={buttonInside}>Subscribe</div>
              </button>
            </form>
            <p className="mt-5">
              Sign up with your email to receive newletters, discounts, updates,
              and more!
            </p>
          </div>
        </div>
        <div className="text-center lg:text-left mt-24 text-white lg:flex justify-around items-center pt-5">
          <div className="mt-5 lg:mt-0 md:flex gap-5 text-white lg:w-1/2 h-full justify-around">
            <Link className="hover:text-light-gray duration-200" to="/">
              Home
            </Link>
            <Link className="hover:text-light-gray duration-200" to="/Prices">
              Pricing
            </Link>
            <Link className="hover:text-light-gray duration-200" to="/">
              Training
            </Link>
            <div className="text-center">
              <p>
                Company <FontAwesomeIcon icon={faChevronDown} />{" "}
              </p>
              <ul className="text-light-gray mt-2">
                <li className="hover:text-teal duration-200">
                  <Link to="/">About Us</Link>
                </li>
                <li className="hover:text-teal duration-200">
                  <Link to="/">Customer Service </Link>
                </li>
                <li className="hover:text-teal duration-200">
                  <Link to="/">TSA Documentation </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-10 text-light-gray bg-dark-blue p-5">
          <p>© 2023 NIBIRU, Inc. </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
