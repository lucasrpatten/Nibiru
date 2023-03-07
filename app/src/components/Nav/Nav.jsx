import { faBars, faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import fillerImage from "../../images/imagefiller.jpg";
import Nibiru from "../../images/nibiru.png";
import MobileNav from "../MobileNav";

const Nav = () => {
  const [Menu, setMenu] = useState(true);
  const [Dropdown, setDropdown] = useState(true);
  const button =
    "w-auto p-1 font-bold rounded-full bg-gradient-to-r from-teal via-blue to-purple text-white";
  const buttonInside =
    "py-2 px-10 rounded-full hover:bg-dark-blue/100 transition duration-300 bg-dark-blue/0";
  const navButton = "duration-200 hover:text-light-gray text-white";
  return (
    <div className="fixed z-50 w-full">
      <div className="w-full h-20 bg-dark-blue">
        <div className="border-b border-white hidden lg:flex items-center justify-center">
          <div className="text-white w-1/4 h-full justify-center">
            <Link onClick={() => setDropdown(true)} className="" to="/">
              <div className="flex gap-5 items-center">
                <img className="h-1/5 w-1/5 ml-5" src={Nibiru} />
                <p className="font-extrabold">NIBIRU</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-10 text-white w-1/2 font-normal h-full justify-center tracking-wide">
            <Link
              onClick={() => setDropdown(true)}
              className={navButton}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setDropdown(true)}
              className={navButton}
              to="/Prices"
            >
              Pricing
            </Link>
            <Link
              onClick={() => setDropdown(true)}
              className={navButton}
              to="/"
            >
              Training
            </Link>
            <div>
              <p
                onClick={() => setDropdown((s) => !s)}
                className="text-teal hover:cursor-pointer hover:text-purple duration-200"
              >
                Company <FontAwesomeIcon icon={faChevronDown} />{" "}
              </p> 
              <AnimatePresence>
                {!Dropdown ? (
                  <motion.div
                    key="nav"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0, transition: { duration: "0.35" } }}
                    transition={{ stiffness: "100", duration: "0.25" }}
                    className="z-30 absolute bg-dark-blue p-5 h-40 w-48 rounded-lg"
                  >
                    <div className="bg-dark-blue">
                      <Link
                        onClick={() => setDropdown(true)}
                        className="mt-9 w-full absolute duration-200 hover:text-light-gray text-white"
                        to="/About"
                      >
                        About Us
                      </Link>
                      <Link
                        onClick={() => setDropdown(true)}
                        className="mt-16 w-full absolute duration-200 hover:text-light-gray text-white"
                        to="/Help"
                      >
                        Help Center
                      </Link>
                      <Link
                        onClick={() => setDropdown(true)}
                        className="mt-24 w-full absolute duration-200 hover:text-light-gray text-white"
                        to=""
                      >
                        TSA Documentation
                      </Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
          <button className={button}>
            <Link to="/ContactUs">
              <div className={buttonInside}>Contact Us</div>
            </Link>
          </button>
        </div>
        <div className="w-full flex items-center justify-end lg:hidden p-5">
          <div className="text-white justify-between">
            <Link onClick={() => setMenu(true)} to="/">
              <div className="md:hidden flex gap-5 items-center">
                <img className="h-1/12 w-1/12" src={Nibiru} />
              </div>
            </Link>
          </div>
          <FontAwesomeIcon
            onClick={() => setMenu((s) => !s)}
            className="text-white text-2xl hover:cursor-pointer"
            icon={faBars}
          />
        </div>
      </div>
      <AnimatePresence>
        {!Menu ? (
          <motion.div
            key="nav"
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-50%", transition: { duration: "0.35" } }}
            transition={{ stiffness: "100", duration: "0.55" }}
          >
            <div className="flex">
              <div className="h-screen w-3/4 bg-dark-blue lg:hidden">
                <div className="flex justify-end items-center text-white p-5">
                  <FontAwesomeIcon
                    onClick={() => setMenu(true)}
                    className="hover:cursor-pointer"
                    icon={faX}
                  />
                </div>
                <div
                onClick={() => setMenu(true)}
                >
                  <MobileNav />
                </div>
              </div>
              <div
                onClick={() => setMenu(true)}
                className="h-screen w-1/4 hover:cursor-pointer"
              ></div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
