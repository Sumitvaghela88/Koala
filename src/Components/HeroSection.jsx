import React from "react";
import { FaTruck, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  const stars = 5;
  const totalReviews = "50,000+";

  return (
    <>
      {/* Review Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2   bg-gray-100 py-0.5 px-4 text-gray-800 text-sm  font-medium text-center">
        <div className="flex text-balck-500">
          {[...Array(stars)].map((_, index) => (
            <span className="text-lg sm:text-xl" key={index}>
              ★
            </span>
          ))}
        </div>
        <span>{totalReviews} five star reviews globally</span>
      </div>

      {/* Hero Section */}
      <section className="relative flex bg-gray-100">
        <video
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="//au.koala.com/cdn/shop/files/preview_images/26c2a4166f744949a745a5ef50692e22.thumbnail.0000000000_480x.jpg?v=1751506782"
          aria-label="Koala Sofa Beds: Cosy as a sofa dreamy as a bed"
        >
          <source
            src="//au.koala.com/cdn/shop/videos/c/vp/26c2a4166f744949a745a5ef50692e22/26c2a4166f744949a745a5ef50692e22.HD-720p-2.1Mbps-50468123.mp4?v=0"
            type="video/mp4"
          />
          <img
            alt="Koala Sofa Beds: Cosy as a sofa dreamy as a bed"
            src="//au.koala.com/cdn/shop/files/preview_images/26c2a4166f744949a745a5ef50692e22.thumbnail.0000000000_480x.jpg?v=1751506782"
          />
        </video>

        {/* Overlay Content */}
        <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 text-white max-w-xs sm:max-w-md md:max-w-xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            Cosy as a sofa,<br /> dreamy as a bed
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Go from sit to sleep in seconds with our award-winning sofa beds
          </p>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-4 bg-gray-200 rounded-full text-black font-semibold hover:bg-gray-300 transition">
            SHOP SOFA BEDS
          </button>
        </div>
      </section>

      {/* Features Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 bg-gray-200 py-4 px-6 text-black text-sm sm:text-base font-medium shadow-sm text-center sm:text-left">
        <div className="flex items-center gap-2">
          <FaTruck className="text-base sm:text-lg" />
          <span>Fast delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-base sm:text-lg" />
          <span>120-night trial</span>
        </div>
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-base sm:text-lg" />
          <span>World-class warranty</span>
        </div>
      </div>
    </>
  );
}
