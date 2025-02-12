import React from "react";
import computer from "../assets/computer.png"
import csystems from "../assets/computer-sys.png"
import multimedia from "../assets/multimedia.png"
import software from "../assets/sw-dev.png"

const Courses = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-full text-green-900">
        <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto px-5">
          <div>
            <label className="font-bold text-4xl p-4">Courses</label>
          </div>

          <div className="grid lg:grid-cols-5 mx-auto grid-cols-2 gap-10">
            <div className="mx-auto">
              <div className="lg:w-50 lg:h-50 w-40 lg:h-50 h-40 bg-blue-200 flex items-center justify-center ">
                <img src={software} alt="" />
              </div>
              <p className="text-black text-lg font-semibold">
                Software Development
              </p>
              <p className="text-black text-sm font-sm flex flex-col">
                <span>Programming languages (JavaScript, Python, etc.)</span>{" "}
                <span>Web and mobile app development</span>{" "}
                <span>Hands-on coding projects</span>
              </p>
            </div>
            <div className="mx-auto">
              <div className="lg:w-50 lg:h-50 w-40 lg:h-50 h-40 bg-blue-200 flex items-center justify-center">
              <img src={multimedia} alt="" />
              </div>
              <p className="text-black text-lg font-semibold">Multimedia</p>
              <p className="text-black text-sm font-sm flex flex-col">
                <span>Graphic design and video editing</span>
                <span>Animation and motion graphics</span>
                <span>Digital content creation</span>
              </p>
            </div>
            <div className="mx-auto">
              <div className="lg:w-50 lg:h-50 w-40 lg:h-50 h-40 bg-blue-200 flex items-center justify-center">
              <img src={computer} alt="" />
              </div>
              <p className="text-black text-lg font-semibold">Networking</p>
              <p className="text-black text-sm font-sm flex flex-col">
                <span>Network setup and security</span>
                <span>Server management</span>
                <span>Cloud computing fundamentals</span>
              </p>
            </div>
            <div className="mx-auto">
              <div className="lg:w-50 lg:h-50 w-40 lg:h-50 h-40 bg-blue-200 flex items-center justify-center">
              <img src={csystems} alt="" />
              </div>
              <p className="text-black text-lg font-semibold">
                Computer Systems{" "}
              </p>
              <p className="text-black text-sm font-sm flex flex-col">
                <span>Hardware and software troubleshooting</span>
                <span>System administration</span>
                <span>Cybersecurity basics</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
