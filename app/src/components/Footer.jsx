import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import fillerImage from "../images/imagefiller.jpg";
import Discord from "./SocialsLogos/discord-mark-white.png";
import Instagram from "./SocialsLogos/Instagram_Glyph_White.png";
import Twitter from "./SocialsLogos/twitter_logo.png";
import Facebook from "./SocialsLogos/f_logo_RGB-White_58.png";
import tikTok from "./SocialsLogos/tikTokLogo.png";

const handleSubmit = (event) => {
  window.location.reload();
};

const Footer = () => {
  const button =
    "w-full md:w-auto mt-10 md:m-10 p-1 font-bold rounded-full bg-gradient-to-r from-teal via-blue to-purple";
  const buttonInside =
    "py-4 px-10 rounded-full hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0";
  return (
    <>
      <div className="py-20 md:p-10 p-5 bg-gray border-t border-white">
        <div className="px-10 mt-10 w-full lg:flex gap-10 justify-center text-center">
          <div className="text-white lg:w-1/3 h-full">
            <h1 className="text-2xl font-bold mb-10">NIBIRU</h1>
            <p className="mb-10">
              {" "}
              Whether you are a thrill-seeker, an adventurer, or a scientist, we
              have the perfect package to satisfy your curiosity and feed your
              passion for exploration. With Nibiru, the sky is no longer the
              limit - let us take you to the stars!{" "}
            </p>
            <div className="flex gap-8 w-full items-center justify-center">
              <a
                href="https://discord.com/"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <img className="max-h-5" src={Discord} />
              </a>
              <img className="max-h-5" src={Instagram} />
              <img className="max-h-5" src={Twitter} />
              <img className="max-h-5" src={Facebook} />
              <img className="max-h-5" src={tikTok} />
            </div>
            <Link to="/Tsa">
              <button className={button}>
                <div className={buttonInside}>TSA Documentation</div>
              </button>
            </Link>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-1/3 text-white h-full">
            <h1 className="text-2xl mb-10">Sign Up for Email Updates</h1>
            <form className="flex flex-col" action="/action_page.php">
              <label className="font-bold" htmlFor="fname">
                Enter your email:
              </label>
              <input
                className="py-4 px-10 w-full md:w-auto mt-10 p-1 font-bold rounded-full"
                type="text"
                id="fname"
                name="fname"
              />
              <button onClick={handleSubmit} className={button} type="submit">
                <div className={buttonInside}>Subscribe</div>
              </button>
            </form>
            <p className="mt-5">
              Sign up with your email to receive newletters, discounts, updates,
              and more!
            </p>
          </div>
          <div className="text-white lg:w-1/3 h-full hidden lg:text-left mt-24 text-white lg:flex justify-around pt-5">
            <div className="mt-5 lg:mt-0 md:flex gap-5 text-white justify-around">
              <Link className="hover:text-light-gray duration-200" to="/">
                Home
              </Link>
              <Link className="hover:text-light-gray duration-200" to="/Prices">
                Pricing
              </Link>
              <Link
                className="hover:text-light-gray duration-200"
                to="/Training"
              >
                Training
              </Link>
              <div className="text-center">
                <p>
                  Company <FontAwesomeIcon icon={faChevronDown} />{" "}
                </p>
                <ul className="text-light-gray mt-2">
                  <li className="hover:text-teal duration-200">
                    <Link to="/About">About Us</Link>
                  </li>
                  <li className="hover:text-teal duration-200">
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li className="hover:text-teal duration-200">
                    <Link to="/Help">Help/FAQ</Link>
                  </li>
                  <li className="hover:text-teal duration-200">
                    <Link to="/Tsa">TSA Documentation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg flex items-center justify-center gap-10 mt-10 text-light-gray bg-dark-blue p-5">
          <p>© 2023 NIBIRU, Inc. </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
