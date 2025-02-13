import React from "react";
import { useState } from "react";
import kids from "../assets/kids.jpg";
import { FiX } from "react-icons/fi";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex font-Poppins items-center justify-center mx-auto w-full text-green-900">
      <div className="flex flex-col gap-5 max-w-screen-xl mx-auto px-5">
        <div className="p-4 text-start">
          <label className="font-black text-4xl  ">
            Invest in your career growth
          </label>
        </div>
        <div className="flex">
          <p className="breakwords text-black p-4">
            The technolofy industry is evolving faster than ever, so HB-Lab
            provides the support and resources you need to stay one step ahead.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 flex justify-center items-center gap-15 p-4">
          <div className="flex flex-col rounded-lg h-full w-full items-center justify-center">
            <img src={kids} alt="" className="w-full h-auto rounded-xl" />
          </div>

          <div className="flex flex-col lg:py-10 py-3 rounded-lg h-full w-full">
            <div className="flex flex-col my-auto gap-5">
              <h1 className="font-black lg:text-2xl text-xl">
                Thrive with HB-Lab
              </h1>
              <p className="font-small lg:text-start lg:w-3/4 w-full leading-relaxed text-black h-full flex items-center">
                Access carefully curated programs designed to help you network,
                develop your skills and improve your quality of life. From
                mentorship to events and training opportunities, you'll have the
                chance to meet like-minded peers, problem-solve, and collaborate
                with global tech experts.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 my-auto w-full h-fit p-4">
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Training</h1></div>
              <div className="text-black">We'll help you upskill in advanced technologies so you can land your ideal role.</div>
            </div>
          </div>
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Events</h1></div>
              <div className="text-black">Gain insights from leaders who will take you behind the scenes at their top global companies.</div>
            </div>
          </div>
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Mentorship</h1></div>
              <div className="text-black">Receive peer-to-peer support and guidance from Andela experts and community members, 24/7.</div>
            </div>
          </div>
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Perks</h1></div>
              <div className="text-black">Access health insurance, MBA programs, EdTech opportunities and more from our trusted partners.</div>
            </div>
          </div>
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Wellness</h1></div>
              <div className="text-black">Join wellness sessions, including virtual meditation, yoga, and community health initiatives.</div>
            </div>
          </div>
          {/* cols*/}
          <div className="flex md:mx-0 mx-auto m-2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent lg:inline hidden"></div>
            <div className="flex flex-col my-auto px-2">
              <div><h1 className="font-bold text-xl">Meet-ups</h1></div>
              <div className="text-black">Connect with like-minded technologists at quarterly, in-person events in your region.</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
