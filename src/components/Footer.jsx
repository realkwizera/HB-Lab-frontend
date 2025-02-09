import React from "react";
import Logo from "../assets/logo-white.png";
import {Icon} from '@iconify/react'
import {FaTruck, FaHeadset, FaShieldAlt} from 'react-icons/fa'


function Footer() {
  return (
    <>
      <div className="flex justify-center items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl text-center">
          <div className="mt-5 lg:mt-20 flex flex-col items-center">
            <div className="bg-green-600 p-4 rounded-full"><FaTruck className="text-white" size={50}/></div>
            <p className="font-bold">FREE AND FAST DELIVERY</p>
            <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
          </div>

          <div className="mt-5 lg:mt-20 flex flex-col items-center">
            <div className="bg-green-600 p-4 rounded-full"><FaHeadset className="text-white" size={50}/></div>
            <p className="font-bold">24/7 CUSTOMER SERVICE</p>
            <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
          </div>

          <div className="mt-5 lg:mt-20 mb-10 flex flex-col items-center">
            <div className="bg-green-600 p-4 rounded-full"><FaShieldAlt className="text-white" size={50}/></div>
            <p className="font-bold">MONEY BACK GUARANTEE</p>
            <p className="text-sm text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>

      <div className="bg-green-900 w-full flex justify-center">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-20 text-white w-full max-w-6xl">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src={Logo} alt="Logo" className="lg:w-full w-75 mb-4  p-2" />
          </div>

          {/* Support */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold mb-4">Support</p>
            <p className="text-sm">Rubavu, Gisenyi</p>
            <a className="block text-sm mt-2" href="mailto:hblabltd@gmail.com">hblabltd@gmail.com</a>
            <a className="block text-sm" href="tel:+250783224032">+250 789 028 283</a>
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
            <Icon icon="proicons:instagram" width="24" height="24" />
            <Icon icon="line-md:twitter-x-alt" width="24" height="24" />
            <Icon icon="ri:linkedin-fill" width="24" height="24" />
            <Icon icon="ic:sharp-tiktok" width="24" height="24" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;