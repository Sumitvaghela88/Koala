import React, { useState } from 'react';

const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Floating Teaser Button */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowPopup(true)}
        className="fixed bottom-5 left-5 z-[90000] h-16 w-16 cursor-pointer drop-shadow-[0_0_30px_white]"
      >
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#c5d97a] rounded-full p-2 text-center text-sm font-bold text-black leading-tight">
          <p>10%</p>
          <p>Off</p>
        </div>
      </div>

      {/* Modal Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-[90000] flex items-center justify-center bg-black/60">
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-[#f7f7f3] rounded-lg p-6 md:flex overflow-hidden">
            
            {/* Close Button */}
            <button
              aria-label="Close popup"
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 z-10 text-gray-700 hover:text-black"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Content */}
            <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
              {/* Top Image */}
              <img
                src="https://d3k81ch9hvuctc.cloudfront.net/company/TF2Sh7/images/551575af-364e-47e8-9f5e-81894085e2e9.png"
                alt="Promo top"
                className="w-full max-w-md mb-4"
              />

              <h2 className="text-[26px] font-bold text-[#4e5b62] mb-4">
                Want to save 10% off your first order?
              </h2>

              <div className="flex flex-col gap-2 w-full">
                <button className="bg-[#c5d97a] text-[#4e5b62] font-bold text-lg py-3 rounded-full">
                  YES, PLEASE!
                </button>
                <button
                  className="text-[#4e5b62] text-base py-2"
                  onClick={() => setShowPopup(false)}
                >
                  No thanks, I’d rather pay full price
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block max-w-full relative">
              <img
                src="https://d3k81ch9hvuctc.cloudfront.net/company/TF2Sh7/images/ce094fca-536e-4c24-9a94-9b4a522749f5.png"
                alt="Promo background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoPopup;
