import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "./Hamburger";

import Prices from "../pages/pricing";
import Nibiru from "../images/nibiru.png"

function Nav() {
  const [Menu, setMenu] = useState(true)
    return (
      <>
        <div className='w-full h-20 border-b-2 border-blue bg-dark-blue'>
          <div className="hidden lg:flex items-center justify-center">
            <div className='text-white w-1/4 h-full justify-center'>
              <img className='h-1/4 w-1/4 ml-5' src={Nibiru}/>
              </div>
              <div className='flex gap-5 text-white w-1/2 h-full justify-around'>
                  <Link to='/'>Platform</Link>
                  <Link to='/Prices'>Pricing</Link>
                  <Link to='/'>Training</Link>
                  <Link to='/'>Company (Dropdown) </Link>
              </div>
              <div className="w-1/4 flex text-white h-full justify-end items-start pr-10">
                <button>Sign In</button>
              </div>
          </div>
          <div className="flex items-center justify-end lg:hidden p-5">
            <FontAwesomeIcon onClick={() => setMenu(s => !s)} className='text-white text-2xl hover:cursor-pointer' icon={faBars}/>
          </div>
        </div>
          {!Menu ?
            <div className="flex">
              <div className="h-screen w-3/4 bg-blue md:hidden">
                <Hamburger/>
              </div>
              <div onClick={() => setMenu(true)} className="h-screen w-1/4 cursor-pointer">
              </div>
            </div>
          :null}
      </>
    );
  }
  
  export default Nav;
  