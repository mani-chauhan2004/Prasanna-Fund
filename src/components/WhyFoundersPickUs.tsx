"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const bullets = [
  {
    title: 'Fast checks',
    desc: 'Lightning-fast decision making and capital deployment.',
    svg: '/illustrations/undraw_selecting-team_zehd.svg',
  },
  {
    title: 'Builder empathy',
    desc: "We've built, scaled, and understand founder journeys.",
    svg: '/illustrations/undraw_collab_h1mq.svg',
  },
  {
    title: 'Deep infra network',
    desc: 'Unmatched access to infra, talent, and strategic partners.',
    svg: '/illustrations/undraw_agreement_w6ua.svg',
  },
];

export default function WhyFoundersPickUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [glow, setGlow] = useState(0);

  // Improved line glow logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRect.height;
      // If at the bottom of the page, set glow to 1
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setGlow(1);
        return;
      }
      // Otherwise, fill slowly as you scroll through the section
      const progress = 1 - (sectionRect.bottom - 0) / (sectionHeight + windowHeight);
      const percent = Math.max(0, Math.min(1, progress));
      setGlow(percent);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center py-48 px-8 md:px-16 lg:px-24 min-h-[1000px] bg-gray-50">
      <h2 className="text-6xl sm:text-7xl font-medium text-pf-black mb-40 tracking-tight text-center font-display">
        Why founders choose us
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-7xl min-h-[1000px]">
        {/* Vertical line */}
        <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col items-center z-0" style={{width: '2px'}}>
          {/* Light background line */}
          <div className="w-full h-full bg-gray-200" style={{position: 'absolute', top: 0, left: 0, zIndex: 0}} />
          {/* Dark fill with glow */}
          <div
            className="w-full bg-pf-black transition-all duration-300 shadow-[0_0_16px_4px_rgba(0,0,0,0.10)]"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: `${glow * 100}%`,
              zIndex: 1,
              boxShadow: '0 0 24px 8px #1a1a1a33',
              filter: 'blur(0.5px)',
            }}
          />
        </div>
        {/* Cards only, no branches */}
        <div className="relative z-10 w-full flex flex-col gap-56">
          {bullets.map((b, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={b.title} className="flex w-full min-h-[400px] items-center relative">
                {isLeft ? (
                  <>
                    {/* Card on left */}
                    <div
                      ref={el => { cardRefs.current[i] = el; }}
                      data-idx={i}
                      className="flex flex-col items-end pr-20 flex-1"
                      style={{ maxWidth: '700px' }}
                    >
                      <div className="bg-white rounded-3xl border border-subtle px-28 py-24 flex flex-col items-center min-h-[320px] max-w-3xl w-full">
                        <div className="w-40 h-40 mb-12 flex items-center justify-center">
                          <Image src={b.svg} alt={b.title + ' illustration'} width={160} height={160} />
                        </div>
                        <div className="text-4xl font-bold text-pf-black font-display mb-8 text-center">{b.title}</div>
                        <div className="text-xl font-body-lg text-gray-600 font-light leading-relaxed text-center">{b.desc}</div>
                      </div>
                    </div>
                    {/* Spacer for line */}
                    <div className="w-[4px] flex-shrink-0" />
                    {/* Empty right side */}
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    {/* Empty left side */}
                    <div className="flex-1" />
                    {/* Spacer for line */}
                    <div className="w-[4px] flex-shrink-0" />
                    {/* Card on right */}
                    <div
                      ref={el => { cardRefs.current[i] = el; }}
                      data-idx={i}
                      className="flex flex-col items-start pl-20 flex-1"
                      style={{ maxWidth: '700px' }}
                    >
                      <div className="bg-white rounded-3xl border border-subtle px-28 py-24 flex flex-col items-center min-h-[320px] max-w-3xl w-full">
                        <div className="w-40 h-40 mb-12 flex items-center justify-center">
                          <Image src={b.svg} alt={b.title + ' illustration'} width={160} height={160} />
                        </div>
                        <div className="text-4xl font-bold text-pf-black font-display mb-8 text-center">{b.title}</div>
                        <div className="text-xl font-body-lg text-gray-600 font-light leading-relaxed text-center">{b.desc}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}