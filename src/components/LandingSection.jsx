import React from "react";
import Navbar from "./Navbar";
import banner from "../assets/handsonPC.webp";
import kids from "../assets/kids.jpg";

import { FaCode, FaCog, FaLaptop } from "react-icons/fa";

import Footer from "./Footer";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import ContactUs from "./ContactUs";

const LandingSection = () => {
  return (
    <>
      <div className="w-full fixed z-50 top-0 left-0">
        <Navbar />
      </div>

      <section className="overflow-hidden">
        <HeroSection />
      </section>

      <section
        id="our-services"
        className="grid min-h-screen place-items-center w-full px-5 my-5"
      >
        <OurServices />
      </section>
      <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div>
      <section className="grid min-h-screen place-items-center w-full px-5 my-5">
        <AboutUs/>
      </section>
      <div className="flex justify-center text-green-900 o">
        <hr className="w-8/10 text-green-900" />
      </div>
      <section className="grid min-h-screen mx-auto place-items-center w-full px-5 my-5">
        <Courses/>
      </section>
      <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div>
      <section className="overflow-hidden my-5">
        <ContactUs/>
      </section>
      <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div>
      <section className="grid mx-auto place-items-center w-full">
        <Footer />
      </section>
    </>
  );
};

export default LandingSection;
