import React from "react";
import Logo from "../assets/logo-white.png";
import { Icon } from "@iconify/react";


function Footer() {
  return (
    <>
      

      <div className="bg-green-900 w-full flex justify-center">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-20 text-white w-full max-w-6xl">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src={Logo} alt="Logo" className="lg:w-full w-32 mb-4  p-2" />
          </div>

          {/* Support */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold mb-4">Support</p>
            <p className="text-sm">Rubavu, Gisenyi</p>
            <a className="block text-sm mt-2" href="mailto:hblabltd@gmail.com">
              hblabltd@gmail.com
            </a>
            <a className="block text-sm" href="tel:+250783224032">
              +250 789 028 283
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <p className="text-sm mb-2">Privacy Policy</p>
            <p className="text-sm mb-2">Terms of Use</p>
            <p className="text-sm mb-2">FAQ</p>
            <p className="text-sm">Contact</p>
          </div>

          {/* Download App */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-lg font-semibold mb-4">Get in touch with us !</p>
            <div className="flex justify-center lg:justify-start space-x-3">
              <a href="https://www.instagram.com/hblabrw"><Icon icon="proicons:instagram" width="24" height="24" /></a>
              <a href="https://x.com/HabaruremaJules"><Icon icon="line-md:twitter-x-alt" width="24" height="24" /></a>
              <a href="https://www.linkedin.com/company/hb-lab/ "><Icon icon="ri:linkedin-fill" width="24" height="24" /></a>
              <a href="https://www.tiktok.com/@hblabrw"><Icon icon="ic:sharp-tiktok" width="24" height="24" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
