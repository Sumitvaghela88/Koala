import React from "react";

const logos = [
  {
    src: "https://au.koala.com/cdn/shop/files/Better_Home_Garden.svg?v=1752451223",
    alt: "Better Homes & Gardens",
    width: 165,
    height: 44,
  },
  {
    src: "https://au.koala.com/cdn/shop/files/Forbes_logo_1.svg?v=1752451223",
    alt: "Forbes",
    width: 135,
    height: 36,
  },
  {
    src: "https://au.koala.com/cdn/shop/files/gq_1.svg?v=1726543341",
    alt: "GQ",
    width: 65,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Refinery29_logo.svg",
    alt: "Refinery29",
    width: 180,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/63/UrbanList_Logo.png",
    alt: "Urban List",
    width: 120,
    height: 40,
  },
];

// Keyframe CSS for scrolling
const keyframes = `
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

const LogoShowcase = () => {
  // Duplicate logos for infinite seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="bg-[#f3f3e1] mt-12 py-6 px-8 rounded-xl mx-6 flex items-center overflow-hidden "
      style={{ minWidth: "320px" }}
    >
      <style>{keyframes}</style>

      {/* Static "As seen in" */}
      <span className="font-semibold text-lg mr-8 whitespace-nowrap flex-shrink-0">
        As seen in
      </span>

      {/* Scrolling logos container */}
      <div
        style={{
          display: "flex",
          width: "90%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "scroll 10s linear infinite",
            scrollBehavior: "smooth",
            willChange: "transform",
            alignItems: "center",
            
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-8 flex-shrink-0"
              style={{ width: logo.width, height: logo.height }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
