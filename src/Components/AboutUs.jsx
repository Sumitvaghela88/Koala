import React from 'react';

const features = [
  {
    title: 'Thoughtful design',
    description:
      "Clever, comfy furniture that you're proud to show off but not precious about using everyday.",
    icon: '//au.koala.com/cdn/shop/files/Thoughtful_Design_Icon_1_562a4bca-1a8a-4d73-8a20-6fa695ba8fc4.png?v=1726643398&width=140',
  },
  {
    title: 'Everyday value',
    description:
      'Our direct-to-consumer model cuts out the middlemen, hidden costs and showroom expenses that charge you extra.',
    icon: '//au.koala.com/cdn/shop/files/KOALA_ILLUSTRATIONS_120_Day_Trial_1_115e66af-976c-4cf7-bbd0-22f7d8ac8494.png?v=1726643398&width=140',
  },
  {
    title: 'Effortless experiences',
    description:
      'Fast and flexible delivery, tool-free assembly and 120 nights to love it or return it.',
    icon: '//au.koala.com/cdn/shop/files/KOALA_ILLUSTRATIONS_Loaded__in_Truck_1_47a7dfdb-fe1c-46d2-8af1-f8df2a81611d.png?v=1726643398&width=140',
  },
  {
    title: 'Designed with the world in mind',
    description:
      'Ethically made and designed to last – with a portion of our sales supporting koala conservation and the protection of endangered Australian species.',
    icon: '//au.koala.com/cdn/shop/files/Sustainability_Matters_1_6e54c841-10b3-4a31-b541-afd64a506189.png?v=1726643398&width=140',
  },
];

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Row */}
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-3xl font-bold text-black">A little about us</h2>
          <a
            href="/pages/about-us"
            className="border border-black text-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            LEARN MORE
          </a>
        </div>

        {/* Banner Card */}
{/* Banner Card */}
<div className="relative h-auto lg:h-[30vh] rounded-lg overflow-hidden">
  <img
    src="//au.koala.com/cdn/shop/files/Forest_image_1.png?v=1732492791&width=1680"
    alt="Forest"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-2 py-6 sm:px-12 lg:px-8 bg-black/40 text-white">
    <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold max-w-lg">
      Protecting Koalas,<br /> Preserving Tomorrow. <br /> Together with WWF- <br />Australia
    </h3>
    <p className="text-sm sm:text-base max-w-xl mt-4  lg:text-left">
      Together with WWF-Australia, we're on a mission to help koalas thrive.<br /> Through our
      partnership under the Koalas Forever program, we're working to double the koala population
      along Australia's east coast by 2050 –<br/> protecting these iconic creatures for generations to
      come.
    </p>
  </div>
</div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl  shadow border border-gray-100 p-2 text-center hover:shadow-md transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-30 h-30  mb-4 flex-col items-center self-start object-contain"
              />
              <h3 className="text-base lg:text-left  font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-xs p-2 lg:text-left  text-dark">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
