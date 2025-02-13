import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import ContactUs from "./ContactUs";
import CompaniesTrustUs from "./CompaniesTrustUs";
import LeadershipTeam from "./LeadershipTeam";

const ContainerPage = () => {
  return (
    <div className="bg-gray-200">
      
      <section>
        <Navbar/>
      </section>
      <section id="home" className="overflow-hidden ">
        <HeroSection />
      </section>

      <section
        id="companies-trust-us"
        className="grid place-items-center w-full px-5 my-5"
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
      <section id="about-us" className="grid min-h-screen place-items-center w-full px-5 my-5">
        <AboutUs />
      </section>
      {/* <div className="flex justify-center text-green-900 o">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section id="courses" className="grid min-h-screen mx-auto place-items-center w-full px-5 my-5">
        <Courses />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section id="contact-us" className="mx-auto place-items-center w-full px-5 my-5">
        <ContactUs />
      </section>
      {/* <div className="flex justify-center text-green-900">
        <hr className="w-8/10 text-green-900" />
      </div> */}
      <section id="our-leadership" className="mx-auto place-items-center w-full px-5 my-5">
        <LeadershipTeam />
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

export default ContainerPage;
