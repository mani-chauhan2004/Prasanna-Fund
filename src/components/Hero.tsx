import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center px-4 md:px-0 py-20 md:py-32">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pf-gold leading-tight font-raleway mb-6">
          Prasanna Shankar:<br />
          <span className="text-pf-cream">Force of Nature Investor</span>
        </h1>
        <p className="mt-2 text-2xl md:text-3xl text-pf-cream font-medium mb-10">
          Backing the world's most ambitious founders. 300M fund led by Rippling's co-founder, investing at the edge of innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/azure-credits"
            className="inline-block px-10 py-5 rounded-lg bg-pf-gold text-pf-black font-bold text-2xl shadow-lg hover:bg-pf-cream hover:text-pf-black transition"
          >
            Apply for Azure Credits
          </a>
          <a
            href="/portfolio"
            className="inline-block px-10 py-5 rounded-lg border-2 border-pf-gold text-pf-gold font-bold text-2xl shadow-lg hover:bg-pf-gold hover:text-pf-black transition bg-transparent"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
} 