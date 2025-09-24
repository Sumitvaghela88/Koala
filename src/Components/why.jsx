import React from 'react';

const cards = [
  {
    img: "//au.koala.com/cdn/shop/files/Image_Placeholder_3-1.jpg?v=1726643084&width=2500",
    alt: "1% for the planet logo in a green forest background",
    title: "We are a part of 1% for the Planet",
    content:
      "We put our money where our mouth is. We were the first Australian mattress and furniture retailer to join the 1% for the Planet movement. This means we donate one percent of sales annually for the good of our people and planet. In the last three years, we’ve given over $6.5M in cash and product to certified environmental partners.",
  },
  {
    img: "//au.koala.com/cdn/shop/files/Image_Placeholder_4.jpg?v=1726643084&width=2500",
    alt: "Certified B Corporation logo on a forest background",
    title: "We're proudly a B Corp",
    content:
      "We're proud to be B Corp certified, which means we meet high standards of social and environmental impact, transparency and accountability. This certification reflects our commitment to using our business a force for good.",
  },
  {
    img: "//au.koala.com/cdn/shop/files/Image_Placeholder_3.jpg?v=1726643084&width=2500",
    alt: "Koala sleeping on a tree with 'Keep It Wild Koala' logo",
    title: "Protecting our Aussie icon",
    content:
      "In partnership with WWF-Australia since 2017, we are working together to prevent the further decline of koala populations by restoring and reducing the loss of habitat and supporting key interventions required for sick and injured koalas.",
  },
];

const WhyKoala = () => {
  return (
    <section className="bg-white py-2 font-sans text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 font-medium">Why Koala?</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We’re in the business of making things good
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKoala;
