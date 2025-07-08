import React from "react";

const logos = [
  "/logos/everstage.jpg",
  "/logos/mesh.png",
  "/logos/veremark.png",
  "/logos/appsmith.png",
  "/logos/doola.jpg",
  "/logos/zamp.png",
  "/logos/coinshift.png",
  "/logos/cypherock.jpg",
  "/logos/charmverse.jpg",
  "/logos/eigen_layer.jpg",
  "/logos/alliance.jpg",
];

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-x-hidden py-12 bg-pf-cream border-t-4 border-t-pf-gold">
      <div className="relative flex items-center">
        <div className="flex gap-20 animate-carousel whitespace-nowrap hover:[animation-play-state:paused]">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="w-36 h-36 flex items-center justify-center">
              <img
                src={logo}
                alt="Portfolio Logo"
                className="w-full h-full object-contain rounded-full shadow-md bg-pf-black"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 32s linear infinite;
        }
      `}</style>
    </div>
  );
} 