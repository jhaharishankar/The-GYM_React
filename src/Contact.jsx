// src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Contact Header */}
      <section className="pb-20 relative block bg-black text-white">
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
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white uppercase">Contact Us</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4">
                Contact us to ask any questions, acquire a membership, talk to our trainers or anything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative block py-24 lg:pt-0 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                data-aos="fade-up-right"
              >
                <div className="flex-auto p-5 lg:p-10 bg-orange-500 text-white rounded">
                  <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                  <p className="leading-relaxed mt-1 mb-4">
                    Complete this form and we will get back to you in 24 hours.
                  </p>

                  {/* Full Name */}
                  <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="full-name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="Full Name"
                      className="text-black px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="text-black px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      id="message"
                      placeholder="Type a message..."
                      className="text-black px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
