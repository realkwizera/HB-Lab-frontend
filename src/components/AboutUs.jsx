import React from "react";
import kids from '../assets/kids.jpg'

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-full text-green-900">
      <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto px-5">
        <div>
          <label className="font-bold text-4xl p-4">About Us</label>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 flex justify-center items-center gap-15">
          <div className="flex flex-col rounded-lg h-full w-full items-center justify-center">
            <img
              src={kids}
              alt=""
              className="w-full h-auto rounded-tl-4xl rounded-br-4xl"
            />
          </div>

          <div className="flex flex-col py-10 rounded-lg h-full w-full text-center">
            <p className="font-small lg:text-start text-center leading-relaxed lg:w-full  text-xl h-full flex items-center">
              HBLab Ltd is a leading digital solutions provider specializing in
              website design, development, and digital transformation. We offer
              a range of services, including responsive web development, mobile
              web development, eCommerce solutions, content management systems,
              web application security, and UI/UX design. Beyond development, we
              are committed to nurturing the next generation of tech
              professionals through comprehensive training programs and hands-on
              internships. Our goal is to equip individuals with practical
              skills and real-world experience, empowering them to excel in the
              digital industry.
            </p>
          </div>
        </div>
        <div>
          <button className="mt-4 py-2 px-10 bg-green-900 text-gray-50 text-sm rounded-lg">
            View All Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
