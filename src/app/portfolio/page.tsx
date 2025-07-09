'use client';
import React, { useEffect, useState } from "react";
import PortfolioClientGrid from "../../components/PortfolioClientGrid";
import Navbar from '../../components/Navbar';

export default function PortfolioPage() {
  const [showHeading, setShowHeading] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    setShowHeading(true);
    const timer = setTimeout(() => {
      setShowSubheading(true);
      setTimeout(() => setShowTagline(true), 400);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar currentPath="/portfolio" />
      <section className="w-full min-h-[90vh] flex items-center justify-center px-4 md:px-0 py-32 md:py-40 bg-white relative overflow-hidden">
        {/* Subtle off-white background shape */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full bg-gray-100 opacity-60 blur-2xl" />
        </div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <h1
            className={`text-7xl md:text-[10rem] font-bold text-pf-black leading-tight font-display mb-10 transition-all duration-1000 ${
              showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ willChange: "opacity, transform", lineHeight: 1.05 }}
          >
            Portfolio
          </h1>
          {/* Investment SVG */}
          <p
            className={` text-5xl md:text-4xl text-pf-black font-display font-semibold mb-6 transition-all duration-1000 leading-tight tracking-tight drop-shadow-sm ${
              showSubheading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ willChange: "opacity, transform", letterSpacing: '-0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            Infrastructure, SaaS, and global innovation.<br />
            Seed to Series A investments.
          </p>
          {/* Investment tagline */}
          <p
            className={`text-2xl md:text-3xl text-gray-600 font-body font-medium mt-4 tracking-wide transition-all duration-1000 ease-out ${
              showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ willChange: 'opacity, transform' }}
          >
            Investing in the future of technology, one company at a time.
          </p>
        </div>
      </section>

      {/* Filterable Grid/Card Section */}
      <PortfolioClientGrid />
    </>
  );
}

