import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const MattressShowcase = () => {
  const [selectedSize, setSelectedSize] = useState('King Single');
  const navigate = useNavigate();

  const sizeOptions = ['Single', 'King Single', 'Double', 'Queen', 'King', 'Super King'];

  const mattressData = {
    Single: [
      {
        id: 1,
        name: 'Koala Plus Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/Single-PlusMattress_1_1_52cb7cb9-14c3-445e-bdb7-3fd2c60f8eb1.jpg?v=1728133944&width=2730',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 949,
        sizes: '6 Sizes',
        price: 1050,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SingleKoalaMattress_2.jpg?v=1728425883&width=1920',
        badge: 'Most awarded',
        rating: 4.8,
        reviews: 2488,
        sizes: '5 Sizes',
        price: 890,
      },
      {
        id: 3,
        name: 'Koala SE Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SEMattress_13_1_d5d8ec61-d1dd-4c4e-9339-58e8d58f85a9.jpg?v=1728892548&width=1820',
        badge: 'Most affordable',
        rating: 4.8,
        reviews: 696,
        sizes: '5 Sizes',
        price: 650,
      },
    ],
    'King Single': [
      {
        id: 1,
        name: 'Koala Plus Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/KingSinglePlusMattress_2_1_07e8edda-a90e-4b90-a5aa-5e999c348499.jpg?v=1728962866&width=2730',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 949,
        sizes: '6 Sizes',
        price: 1250,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/KingSingleKoalaMattress_1_1.webp?v=1728891215&width=1820',
        badge: 'Most awarded',
        rating: 4.8,
        reviews: 2488,
        sizes: '5 Sizes',
        price: 990,
      },
      {
        id: 3,
        name: 'Koala SE Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SEMattress_13_1_d5d8ec61-d1dd-4c4e-9339-58e8d58f85a9.jpg?v=1728892548&width=1820',
        badge: 'Most affordable',
        rating: 4.8,
        reviews: 695,
        sizes: '5 Sizes',
        price: 750,
      },
    ],
    Double: [
      {
        id: 1,
        name: 'Koala Luxe Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/Queen_Luxe_Mattress_1_1.webp?v=1728893369&width=3840',
        badge: 'Most Luxurious',
        rating: 4.9,
        reviews: 544,
        sizes: '4 Sizes',
        price: 2090,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/AU_-_The_New_Koala_Mattress_-_Queen_-_1_2.webp?v=1728135769&width=3840',
        badge: 'Most awarded',
        rating: 4.8,
        reviews: 2488,
        sizes: '5 Sizes',
        price: 1150,
      },
      {
        id: 3,
        name: 'Koala SE Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SEMattress_12_1_869df618-64d5-4f28-b432-ae4aa71c1bd5.jpg?v=1728227524&width=2730',
        badge: 'Most affordable',
        rating: 4.8,
        reviews: 696,
        sizes: '5 Sizes',
        price: 850,
      },
      {
        id: 4,
        name: 'Koala Plus Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/PlusMattress_4_1.jpg?v=1728227347&width=2730',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 949,
        sizes: '6 Sizes',
        price: 1450,
      },
    ],
    Queen: [
      {
        id: 1,
        name: 'Koala Luxe Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/Queen_Luxe_Mattress_1_3.webp?v=1728130989&width=3840',
        badge: 'Most Luxurious',
        rating: 4.9,
        reviews: 544,
        sizes: '4 Sizes',
        price: 2390,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/PlusMattress_4_1_ca134414-61db-43f8-8835-51271efe47df.jpg?v=1728227443&width=2730',
        badge: 'Most awarded',
        rating: 4.8,
        reviews: 2488,
        sizes: '6 Sizes',
        price: 1160,
      },
      {
        id: 3,
        name: 'Koala SE Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/AU_-_The_New_Koala_Mattress_-_Double_-_1_14cc7b35-b07f-4cd8-b9e8-6263a0327b84.webp?v=1728130488&width=3840',
        badge: 'Most affordable',
        rating: 4.8,
        reviews: 2488,
        sizes: '5 Sizes',
        price: 1290,
      },
      {
        id: 4,
        name: 'Koala Plus Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SEMattress_12_1_869df618-64d5-4f28-b432-ae4aa71c1bd5.jpg?v=1728227524&width=2730',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 696,
        sizes: '5 Sizes',
        price: 950,
      },
    ],
    King: [
      {
        id: 1,
        name: 'Koala Luxe Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/Queen_Luxe_Mattress_1_3.webp?v=1728130989&width=3840',
        badge: 'Most Luxurious',
        rating: 4.9,
        reviews: 544,
        sizes: '4 Sizes',
        price: 2790,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/PlusMattress_4_1_ca134414-61db-43f8-8835-51271efe47df.jpg?v=1728227443&width=2730',
        badge: 'Most awarded',
        rating: 4.8,
        reviews: 2488,
        sizes: '6 Sizes',
        price: 1990,
      },
      {
        id: 3,
        name: 'Koala SE Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/AU_-_The_New_Koala_Mattress_-_Double_-_1_14cc7b35-b07f-4cd8-b9e8-6263a0327b84.webp?v=1728130488&width=3840',
        badge: 'Most affordable',
        rating: 4.8,
        reviews: 696,
        sizes: '4 Sizes',
        price: 1480,
      },
      {
        id: 4,
        name: 'Koala Plus Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SEMattress_12_1_869df618-64d5-4f28-b432-ae4aa71c1bd5.jpg?v=1728227524&width=2730',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 949,
        sizes: '6 Sizes',
        price: 1190,
      },
    ],
    'Super King': [
      {
        id: 1,
        name: 'Koala Luxe Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/Single-PlusMattress_1_1_52cb7cb9-14c3-445e-bdb7-3fd2c60f8eb1.jpg?v=1728133944&width=2730',
        badge: 'Most Luxurious',
        rating: 4.9,
        reviews: 544,
        sizes: '4 Sizes',
        price: 2990,
      },
      {
        id: 2,
        name: 'Koala Mattress',
        image:
          'https://au.koala.com/cdn/shop/files/SingleKoalaMattress_2.jpg?v=1728425883&width=1920',
        badge: 'Most advanced',
        rating: 4.8,
        reviews: 2488,
        sizes: '5 Sizes',
        price: 2250,
      },
    ],
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, {
      state: { product, selectedSize },
    });
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Most advanced':
        return 'bg-slate-700';
      case 'Most awarded':
        return 'bg-slate-600';
      case 'Most affordable':
        return 'bg-teal-600';
      case 'Most Luxurious':
        return 'bg-purple-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Australia's most awarded mattress brand
        </h1>
        <Link
          to="/mattresses/all"
          className="text-gray-600 hover:text-gray-900 underline"
        >
          See All
        </Link>
      </div>

      {/* Size Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {sizeOptions.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
              selectedSize === size
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
        {mattressData[selectedSize]?.length > 0 ? (
          mattressData[selectedSize].map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="text-left bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              {/* Image with Badge */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-full ${getBadgeColor(
                    product.badge
                  )}`}
                >
                  {product.badge}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-900 font-medium">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedSize}, {product.sizes}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </button>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No mattresses available for this size.
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#fefdf5] rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-200 text-green-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm text-center leading-tight">
              10%<br />
              Off
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Not sure which mattress is right for you?
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/quiz')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50"
            >
              TAKE THE QUIZ
            </button>
            <button
              onClick={() => navigate('/compare')}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800"
            >
              COMPARE MATTRESSES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MattressShowcase;
