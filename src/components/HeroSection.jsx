import React from "react";
import banner from '../assets/handsonPC.webp'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center">
      <img
        src={banner}
        alt="relative"
        className="w-full h-full object-cover contrast-40"
      />
      <div className="absolute lg:top-2/5 top-1/3 left-10 p-5 rounded-lg max-w-screen-lg mx-auto">
        <label className="lg:font-black font-black text-green-900 lg:text-5xl text-2xl">
        Empowering the Next Generation of Tech Professionals!
        </label>
        <p className="flex text-start text-white mt-2 lg:w-3/4 break-words text-2xl">
        Gain hands-on experience in Software Development, Multimedia, Networking, and Computer Systems with HBLab Ltd.
        </p>
        <button className="mt-4 py-3 px-5 bg-green-900 text-gray-50 text-sm">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
