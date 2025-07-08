"use client"

import React from "react";

// Modern, animated SVG gear cluster using brand colors
export default function GearCluster({ size = 340 }) {
  return (
    <div style={{ width: size, height: size, position: 'relative' }} className="mx-auto">
      <svg
        width={size}
        height={size}
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        {/* Large main gear */}
        <g className="animate-spin-slow origin-center">
          <circle cx="170" cy="170" r="80" fill="#FFD166" />
          <path d="M170 90 L170 60" stroke="#6C3A1F" strokeWidth="8" strokeLinecap="round" />
          <path d="M170 250 L170 280" stroke="#6C3A1F" strokeWidth="8" strokeLinecap="round" />
          <path d="M90 170 L60 170" stroke="#6C3A1F" strokeWidth="8" strokeLinecap="round" />
          <path d="M250 170 L280 170" stroke="#6C3A1F" strokeWidth="8" strokeLinecap="round" />
          {/* Modern gear teeth */}
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x={170 - 8}
              y={90 - 18}
              width={16}
              height={36}
              rx={6}
              fill="#6C3A1F"
              transform={`rotate(${i * 30} 170 170)`}
            />
          ))}
        </g>
        {/* Medium gear, purple, counter-rotating */}
        <g className="animate-spin-reverse origin-center" style={{ animationDuration: '10s' }}>
          <circle cx="80" cy="240" r="38" fill="#7B2FF2" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x={80 - 5}
              y={240 - 18}
              width={10}
              height={24}
              rx={4}
              fill="#FFD166"
              transform={`rotate(${i * 45} 80 240)`}
            />
          ))}
        </g>
        {/* Small gear, brown, slow spin */}
        <g className="animate-spin-slower origin-center" style={{ animationDuration: '18s' }}>
          <circle cx="260" cy="80" r="22" fill="#6C3A1F" />
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x={260 - 3}
              y={80 - 10}
              width={6}
              height={20}
              rx={2}
              fill="#FFD166"
              transform={`rotate(${i * 60} 260 80)`}
            />
          ))}
        </g>
      </svg>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 16s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 18s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          100% { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
} 