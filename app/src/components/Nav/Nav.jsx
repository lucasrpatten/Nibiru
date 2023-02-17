import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hamburger from "../Hamburger";
import Nibiru from "../../images/nibiru.png";
import fillerImage from "../../images/imagefiller.jpg";
import CompanyDropdownItem from "./CompanyDropdownItem";

const Nav = () => {
  const [Menu, setMenu] = useState(true);
  const [Dropdown, setDropdown] = useState(false);
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
            <Link onClick={() => setDropdown(false)} className="" to="/">
              <div className="flex gap-5 items-center">
                <img className="h-1/5 w-1/5 ml-5" src={Nibiru} />
                <p className="font-extrabold">NIBIRU</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-10 text-white w-1/2 font-normal h-full justify-center tracking-wide">
            <Link
              onClick={() => setDropdown(false)}
              className={navButton}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className={navButton}
              to="/Prices"
            >
              Pricing
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className={navButton}
              to="/"
            >
              Training
            </Link>
            <p
              onClick={() => setDropdown((s) => !s)}
              className="text-teal hover:cursor-pointer hover:text-purple duration-200"
            >
              Company <FontAwesomeIcon icon={faChevronDown} />{" "}
            </p>
          </div>
          <button className={button}>
            <div className={buttonInside}>Sign In</div>
          </button>
        </div>
        <div className="w-full flex items-center justify-end lg:hidden p-5">
          <FontAwesomeIcon
            onClick={() => setMenu((s) => !s)}
            className="text-white text-2xl hover:cursor-pointer"
            icon={faBars}
          />
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: Dropdown ? "auto" : "0" }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="h-screen">
          <div className="hidden md:flex h-64 w-full bg-dark-blue md:flex-row flex-col justify-center items-center">
            <CompanyDropdownItem name="About Us" image={fillerImage} />
            <CompanyDropdownItem
              name="Customer Support"
              image={fillerImage}
              to="/CustomerSupport"
            />
            <CompanyDropdownItem name="TSA Documentation" image={fillerImage} />
          </div>
          <div
            onClick={() => setDropdown(false)}
            className="z-60 h-full w-full"
          ></div>
        </div>
      </motion.div>
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
              <div className="h-screen w-3/4 bg-dark-blue md:hidden">
                <div className="flex justify-end items-center text-white p-5">
                  <FontAwesomeIcon
                    onClick={() => setMenu(true)}
                    className="hover:cursor-pointer"
                    icon={faX}
                  />
                </div>
                <Hamburger />
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
