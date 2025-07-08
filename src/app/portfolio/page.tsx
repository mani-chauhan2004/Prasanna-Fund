'use client';
import React, { useEffect, useState } from "react";
import PortfolioClientGrid from "../../components/PortfolioClientGrid";
import Navbar from '../../components/Navbar';

export default function PortfolioPage() {
  const [showHeading, setShowHeading] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    setShowHeading(true);
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar currentPath="/portfolio" />
      <section className="w-full min-h-[90vh] flex items-center justify-center px-4 md:px-0 py-20 md:py-32">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
          <h1
            className={`text-6xl md:text-9xl font-extrabold text-pf-gold leading-tight font-raleway mb-8 transition-all duration-1000 ${
              showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ willChange: "opacity, transform" }}
          >
            Portfolio
          </h1>
          <p
            className={`mt-2 text-4xl md:text-4xl text-pf-cream font-medium mb-14 transition-all duration-1000 ${
              showSubheading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ willChange: "opacity, transform" }}
          >
            Investments across <span className="text-pf-gold font-semibold">infrastructure</span>, SaaS, and global innovation.<br />
            Backing founders building the future.
          </p>
        </div>
      </section>

      {/* Filterable Grid/Card Section */}
      <PortfolioClientGrid />
    </>
  );
}

