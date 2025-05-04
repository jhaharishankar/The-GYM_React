import React from 'react';

const HeroSection = () => {
    return (
        <>
        <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: '95vh' }}>
            <div
                className="absolute top-0 w-full h-full bg-top bg-cover"
                style={{ backgroundImage: "url('/src/assets/img/photo-1526506118085-60ce8714f8c5.avif')" }}>
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>

            <div className="container relative mx-auto" data-aos="fade-in">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div>
                            <h1 className="text-white font-semibold text-5xl">
                                Feel the <span className="text-orange-500">Power</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Welcome to The GYM. We are a fitness and training center that
                                focuses on pushing you to your absolute limit. Download our
                                complete brochure to get started today!
                            </p>
                            <a
                                href="#"
                                className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer transition-colors duration-300"
                            >
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom SVG */}
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: '70px', transform: 'translateZ(0px)' }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                >
                    <polygon points="2560 0 2560 100 0 100" className="fill-current text-black"></polygon>
                </svg>
            </div>
        </div>
        <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          {/* Left Image */}
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="flip-left">
            <img
              alt="Gym"
              className="max-w-full rounded-lg shadow-lg"
              src="/src/assets/img/photo-1550345332-09e3ac987658.avif"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
            <div className="md:pr-12">
              <large className="text-orange-500">About our gym</large>
              <h3 className="text-4xl uppercase font-semibold">Safe body Building</h3>
              <p className="mt-4 text-lg leading-relaxed">
                The extension comes with three pre-built pages to help you get started faster. You can
                change the text and images and you're good to go.
              </p>

              {/* Feature List */}
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                      <i className="fas fa-dumbbell fa-2x"></i>
                    </span>
                    <h4 className="text-xl">Latest & greatest gym equipment</h4>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                      <i className="fas fa-hard-hat fa-2x"></i>
                    </span>
                    <h4 className="text-xl">5-inch, quality foam floor padding</h4>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                      <i className="fas fa-users fa-2x"></i>
                    </span>
                    <h4 className="text-xl">3 professional trainers</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
};

export default HeroSection;
