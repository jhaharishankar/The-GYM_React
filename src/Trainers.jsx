import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Mr Rogers',
      title: 'Neighborhood Watchman',
      image: '/img/photo-1597347343908-2937e7dcc560.avif',
    },
    {
      name: 'Strawberry Shortcake',
      title: 'Cupcake Smasher',
      image: '/img/photo-1594381898411-846e7d193883.avif',
    },
    {
      name: 'Ronald McDonald',
      title: 'Double Whoopass With Cheese',
      image: '/img/photo-1567013127542-490d757e51fc.avif',
    },
  ];

  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-wrap justify-center text-center mt-8 mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">Meet our Trainers</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Our trainers are here to dedicate the time and effort that you need to get in the best
              shape of your life.
            </p>
          </div>
        </div>

        {/* Trainer Cards */}
        <div className="flex flex-wrap">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div className="px-6">
                <img
                  alt={trainer.name}
                  src={trainer.image}
                  className="shadow-lg rounded max-w-full mx-auto"
                  style={{ maxWidth: '250px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">{trainer.name}</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    {trainer.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
