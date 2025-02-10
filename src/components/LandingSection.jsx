import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoicon from "../assets/logo-icon.png";
import { FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import ContactUs from "./ContactUs";
import CompaniesTrustUs from "./CompaniesTrustUs";

const LandingSection = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="w-full fixed z-50 top-0 left-0">
        <div
          className={`bg-gray-50 flex mt-0 lg:py-0 py-3 items-center ${
            isScrolled
              ? "bg-white text-green-900 shadow-md "
              : "lg:text-white lg:inset-0 lg:bg-gradient-to-l lg:from-green-900 lg:to-transparent"
          }`}
        >
          <nav className=" flex  lg:justify-between items-center grid lg:grid-cols-3 py-3 gap-3  lg:ml-30 ml-3 px-5  w-full">
            <div className="flex justify-between items-center w-full lg:w-auto lg:col-span-1 col-span-3">
              <div id="logo" className="">
                <img src={logo} alt="Logo" className="w-45 hidden lg:block" />
                <img
                  src={logoicon}
                  alt="Logo"
                  className="w-15 block lg:hidden"
                />
              </div>
              <div className="toggler">
                <button
                  className="lg:hidden"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  {isToggleOpen ? <HiX size={35} /> : <HiMenu size={35} />}
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
      </div>

      <section className="overflow-hidden ">
        <HeroSection />
      </section>

      <section
        id="our-services"
        className="grid min-h-screen place-items-center w-full px-5 my-5"
      >
        <CompaniesTrustUs />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section
        id="our-services"
        className="grid min-h-screen place-items-center w-full px-5 my-5"
      >
        <OurServices />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section className="grid min-h-screen place-items-center w-full px-5 my-5">
        <AboutUs />
      </section>
      {/* <div className="flex justify-center text-green-900 o">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section className="grid min-h-screen mx-auto place-items-center w-full px-5 my-5">
        <Courses />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section className="overflow-hidden my-5">
        <ContactUs />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section className="grid mx-auto place-items-center w-full">
        <Footer />
      </section>
    </div>
  );
};

export default LandingSection;
