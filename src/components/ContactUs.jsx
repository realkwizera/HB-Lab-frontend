import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-full text-green-900">
      <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto px-5">
        <div>
          <label className="font-bold text-4xl p-4">Contact Us</label>
        </div>

        <div className="grid lg:grid-cols-2 mx-auto grid-cols-1 flex justify-between mx-auto items-center my-3 w-full">
          <div className="flex flex-col mx-auto rounded-lg lg:w-1/2 w-full  items-end">
            <textarea
              className="lg:w-120 w-full h-54 lg:h-64 p-3 bg-blue-200 rounded-lg resize-none outline-none focus:ring-2 focus:ring-green-900"
              placeholder="Your Message..."
            />
          </div>

          <div className="flex flex-col items-center p-5 rounded-lg lg:w-full text-center">
            <div className="flex flex-col">
              <input
                type="email"
                className="p-3 bg-blue-200 lg:w-inherit w-full  rounded-lg outline-none focus:ring-2 focus:ring-green-900"
                placeholder="Your E-mail"
              />
              <button className="mt-4 py-2 px-10 bg-green-900 text-gray-50 text-sm rounded-lg hover:bg-green-800 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
