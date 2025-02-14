import React, {useState, useEffect} from "react";
import logo from "../assets/logo.png";
import logoicon from "../assets/logo-icon.png";
import { FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = '+250792445913';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full fixed z-50 top-0 left-0">
    <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 animate-bounce flex justify-between right-4 bg-green-900 text-3xl hover:bg-green-600 text-white py-2 px-4 p-6 rounded-full z-10"
              >
             <p className="text-sm m-2 lg:block hidden">Contact our support team</p>  <Icon icon="akar-icons:whatsapp-fill" />
              </a>
      <div
        className={`bg-gray-50 flex mt-0 lg:py-0 py-3 items-center ${
          isScrolled
            ? "bg-white text-green-900 shadow-md "
            : "text-white lg:inset-0 bg-gradient-to-l from-green-900 to-transparent"
        }`}
      >
        <nav className=" flex  lg:justify-between items-center grid lg:grid-cols-3 lg:py-3 gap-3  lg:ml-30 ml-3 px-5  w-full">
          <div className="flex justify-between items-center w-full lg:w-auto lg:col-span-1 col-span-3">
            <div id="logo" className="">
              <img src={logo} alt="Logo" className="w-36 hidden lg:block" />
              <img src={logoicon} alt="Logo" className="w-8 block lg:hidden" />
            </div>
            <div className="toggler">
              <button
                className="lg:hidden"
                onClick={() => setIsToggleOpen(!isToggleOpen)}
              >
                {isToggleOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>

          <div
            className={`col-span-2 flex flex-col lg:flex-row items-start lg:items-center gap-5 ${
              isToggleOpen ? "" : "hidden"
            } lg:flex`}
          >
            <div
              id="nav-links"
              className={`flex flex-col lg:flex-row items-start lg:items-center lg:gap-10 gap-3 text-green-900 font-small ${
                isScrolled ? "text-green-900" : "lg:text-white text-green-900"
              } `}
            >
              <a href="#home">Home</a>
              <a href="#about-us">About Us</a>
              <a href="#our-services">Services</a>
              <a href="#contact-us">Contact Us</a>
              <a href="#">Sign Up</a>
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
    </div>
  );
};

export default Navbar;
