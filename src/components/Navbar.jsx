import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoicon from '../assets/logo-icon.png'
import { FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <div className="bg-gray-50 shadow-md flex mt-0 lg:py-0 py-3 items-center">
      <nav className=" flex  lg:justify-between items-center grid lg:grid-cols-3  lg:ml-30 ml-3 px-5  gap-3 w-full">
        <div className="flex justify-between items-center w-full lg:w-auto lg:col-span-1 col-span-3">
          <div id="logo" className="">
            <img src={logo} alt="Logo" className="w-45 hidden lg:block" /> <img src={logoicon} alt="Logo" className="w-25 inline lg:hidden" />
          </div>
          <div className="toggler">
            <button
              className="lg:hidden p-2"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              {isToggleOpen ? <HiX size={35} /> : <HiMenu size={35} />}
            </button>
          </div>
        </div>

       
        <div
          className={`col-span-2 flex flex-col lg:flex-row lg:ml-0 ml-5 items-start lg:items-center gap-5 ${isToggleOpen ? "" : "hidden"} lg:flex`}
        >
          <div id="nav-links" className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-10 gap-3 text-green-900 font-small">
            <p className="underline text-underline-offset-4">Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Sign Up</p>
          </div>

          
          <div className="flex items-center rounded bg-gray-300 w-full lg:w-1/3 max-w-md p-2">
            <input
              type="search"
              className="bg-transparent flex-grow outline-none placeholder-gray-600 p-2"
              placeholder="What are you looking for?"
            />
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;