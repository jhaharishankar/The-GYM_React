// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      {/* Top SVG Decoration */}
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '80px', transform: 'translateZ(0px)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Follow us on Social Media</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond in 1–2 business days.
            </h5>
            <div className="mt-6 flex flex-wrap">
              {/* Twitter */}
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              {/* Facebook */}
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              {/* Dribbble */}
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              {/* GitHub */}
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-10 p-3"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              © 2025 THE GYM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
