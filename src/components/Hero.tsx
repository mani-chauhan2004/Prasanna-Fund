"use client";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowName(true);
    // Each animation is 1000ms, trigger next at 500ms after previous starts
    const t1 = setTimeout(() => setShowSubtitle(true), 800);
    const t2 = setTimeout(() => setShowDesc(true), 1000);
    const t3 = setTimeout(() => setShowButton(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-gray-900 relative">
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <h1 
          className={`text-4xl md:text-7xl font-bold text-white leading-tight font-display mb-12 transition-all duration-1000 ease-out ${
            showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Prasanna Shankar
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-white font-body-xl font-light mb-8 leading-relaxed max-w-4xl transition-all duration-1000 ease-out ${
            showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Co-founder of Rippling ($16B)
        </p>

        <p 
          className={`text-base md:text-lg text-white/80 font-body-lg font-light mb-14 leading-relaxed max-w-5xl transition-all duration-1000 ease-out ${
            showDesc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          ₹300M fund backing infrastructure, SaaS, and global innovation
        </p>

        <div 
          className={`transition-all duration-1000 ease-out ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/portfolio"
            className="inline-block px-20 py-6 rounded-lg border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-gray-900 bg-transparent"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
} 