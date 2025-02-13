import React from 'react'
import { FaCode,FaLaptop, FaCog } from 'react-icons/fa'

const OurServices = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-full text-green-900">
              <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto px-5">
                <div>
                  <label className="font-bold text-4xl p-4">Our Services</label>
                </div>
    
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-3">
                  <div className="flex flex-col bg-blue-200 px-5 py-5 mx-auto lg:py-10 rounded-lg h-full w-full md:w-80 text-center">
                    <div className="flex justify-center">
                      <FaCode size={50} />
                    </div>
                    <h3 className="font-black text-xl p-2">
                      Web & Mobile Development
                    </h3>
                    <ul className="list-disc text-black pl-7 text-left">
                      <li>Crafting captivating landing pages</li>
                      <li>Building robust e-commerce websites</li>
                      <li>
                        Developing dynamic full-stack web & mobile applications
                      </li>
                    </ul>
                  </div>
    
                  <div className="flex flex-col bg-blue-200 px-5 py-5 mx-auto lg:py-10 rounded-lg h-full w-full md:w-80  text-center">
                    <div className="flex justify-center">
                      <FaLaptop size={50} />
                    </div>
                    <h3 className="font-black text-xl p-2">IT Services</h3>
                    <ul className="list-disc text-black pl-7 text-left">
                      <li>Providing reliable IT support and CCTV operations</li>
                      <li>Designing tailored IT business solutions</li>
                      <li>Expertly managing network design and administration</li>
                    </ul>
                  </div>
    
                  <div className="flex flex-col bg-blue-200 px-5 py-5  mx-auto lg:py-10 rounded-lg h-full w-full md:w-80 text-center">
                    <div className="flex justify-center">
                      <FaCog size={50} />
                    </div>
                    <h3 className="font-black text-xl p-2">
                      Online & Offline Courses
                    </h3>
                    <ul className="list-disc text-black pl-7 text-left">
                      <li>Software Development (Front-End and Back-End)</li>
                      <li>UI/UX Design and Graphic Design</li>
                      <li>Hardware and Video Production</li>
                      <li>Comprehensive IT training to enhance skills</li>
                    </ul>
                  </div>
                </div>
    
                <div>
                  <button className="mt-4 py-2 px-10 bg-green-900 text-gray-50 text-sm rounded-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          
  )
}

export default OurServices