import React from "react";

// Modern SVG: Human figure giving a coin, with coins/money in the background
export default function HeroMoneySVG({ size = 340 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background coins */}
      <circle cx="60" cy="280" r="32" fill="#FFD166" opacity="0.18" />
      <circle cx="300" cy="60" r="22" fill="#7B2FF2" opacity="0.13" />
      <circle cx="270" cy="270" r="18" fill="#6C3A1F" opacity="0.10" />
      {/* Main coin being handed over */}
      <circle cx="220" cy="170" r="32" fill="#FFD166" stroke="#6C3A1F" strokeWidth="6" />
      <text x="220" y="178" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#6C3A1F" fontFamily="Raleway">$</text>
      {/* Human figure (left, giving) */}
      <ellipse cx="110" cy="170" rx="22" ry="32" fill="#6C3A1F" />
      <circle cx="110" cy="140" r="14" fill="#FFD166" stroke="#6C3A1F" strokeWidth="4" />
      {/* Arm reaching out */}
      <rect x="120" y="170" width="60" height="10" rx="5" fill="#6C3A1F" transform="rotate(-10 120 170)" />
      {/* Hand holding coin */}
      <circle cx="200" cy="175" r="8" fill="#FFD166" stroke="#6C3A1F" strokeWidth="3" />
      {/* Human figure (right, receiving) - more abstract, smaller */}
      <ellipse cx="260" cy="200" rx="14" ry="20" fill="#7B2FF2" />
      <circle cx="260" cy="182" r="7" fill="#FFD166" stroke="#7B2FF2" strokeWidth="2" />
      {/* Receiving arm */}
      <rect x="230" y="190" width="30" height="7" rx="3.5" fill="#7B2FF2" transform="rotate(20 230 190)" />
      {/* Extra coins for effect */}
      <circle cx="170" cy="80" r="10" fill="#FFD166" stroke="#6C3A1F" strokeWidth="2" />
      <circle cx="80" cy="100" r="7" fill="#FFD166" stroke="#7B2FF2" strokeWidth="2" />
    </svg>
  );
} 