import React from 'react';

const categories = [
  {
    name: 'Mattresses',
    link: '/collections/mattresses',
    image:
      '//au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=750',
  },
  {
    name: 'Sofa Beds',
    link: '/collections/sofa-beds',
    image:
      '//au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=750',
  },
  {
    name: 'Bed Bases',
    link: '/collections/bed-bases',
    image:
      '//au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=750',
  },
  {
    name: 'Sofas',
    link: '/collections/sofas-couches',
    image:
      '//au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=750',
  },
];

const Categories = () => {
  return (
    <div className="bg-white py-10 m-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">   
          {categories.map((category, idx) => (
            <li key={idx}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 relative">
                <a href={category.link}>
                  {/* Badge only for Sofa Beds */}
                  {category.name === 'Sofa Beds' && (
                    <div className="absolute top-2 left-2 bg-[#CED986] text-[#1C1C1C] text-xs font-semibold px-3 py-1 rounded">
                      Upgraded
                    </div>
                  )}

                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold">{category.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
