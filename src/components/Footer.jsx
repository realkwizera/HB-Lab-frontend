import React from "react";
import Logo from "../assets/logo-white.png";
import { Icon } from "@iconify/react";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";
import stat from "../assets/stat.png";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center w-full px-4 mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-center my-auto w-full h-fit p-4 gap-4 mx-auto">
          {/* cols*/}
          <div className="flex mx-auto m-2">
            <div className="flex flex-col my-auto px-2 gap-4">
              <div>
                <img src={stat} alt="HB-Lab Stats" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="font-black text-medium">People</h1>
              </div>
              <div className="text-black w-2/3">
                You'll receive support from our expert, in-house teams to match
                you to your ideal role and provide career guidance.
              </div>
            </div>
          </div>
          {/* cols */}
          <div className="w-[1px] h-35 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
          {/* cols*/}
          <div className="flex mx-auto m-2">
            <div className="flex flex-col my-auto px-2 gap-4">
              <div>
                <img src={stat} alt="HB-Lab Stats" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="font-black text-medium">Technology</h1>
              </div>
              <div className="text-black w-2/3">
                Access HB-LAB e-learning to apply for roles, get verified in
                your chosen skills, and connect with a global community.
              </div>
            </div>
          </div>
          {/* cols */}
          <div className="w-[1px] h-35 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
          {/* cols*/}
          <div className="flex mx-auto m-2">
            <div className="flex flex-col my-auto px-2 gap-4">
              <div>
                <img src={stat} alt="HB-Lab Stats" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="font-black text-medium">Training</h1>
              </div>
              <div className="text-black w-2/3">
                Stay engaged and advance your career with cutting edge
                upskilling opportunities from our partners.
              </div>
            </div>
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
