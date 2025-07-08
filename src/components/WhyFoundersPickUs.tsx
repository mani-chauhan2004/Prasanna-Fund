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
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [glow, setGlow] = useState(0);

  // Main line glow logic
  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
      let percent = visible / rect.height;
      if (rect.bottom <= windowHeight) {
        percent = 1;
      }
      percent = Math.max(0, Math.min(1, percent));
      setGlow(percent);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center py-32 px-4 sm:px-0 min-h-[900px] bg-pf-cream">
      <h2 className="text-5xl sm:text-6xl font-bold text-pf-gold mb-24 tracking-tight text-center font-raleway">
        Why founders pick us
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-6xl min-h-[900px]">
        {/* Vertical glowing line */}
        <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col items-center z-0" style={{width: '14px'}}>
          {/* Dark background line */}
          <div className="w-full h-full rounded-full bg-[#232323]" style={{position: 'absolute', top: 0, left: 0, zIndex: 0}} />
          {/* Gold glowing fill */}
          <div
            className="w-full rounded-full bg-pf-gold shadow-2xl transition-all duration-500"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: `${glow * 100}%`,
              zIndex: 1,
            }}
          />
        </div>
        {/* Cards only, no branches */}
        <div className="relative z-10 w-full flex flex-col gap-40">
          {bullets.map((b, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={b.title} className="flex w-full min-h-[340px] items-center relative">
                {isLeft ? (
                  <>
                    {/* Card on left */}
                    <div
                      ref={el => { cardRefs.current[i] = el; }}
                      data-idx={i}
                      className="flex flex-col items-end pr-12 flex-1"
                      style={{ maxWidth: '700px' }}
                    >
                      <div className="bg-gray-100 rounded-3xl shadow-2xl border-2 border-pf-gold px-20 py-16 flex flex-col items-center min-h-[260px] max-w-3xl w-full">
                        <div className="w-40 h-40 mb-8 flex items-center justify-center">
                          <Image src={b.svg} alt={b.title + ' illustration'} width={160} height={160} />
                        </div>
                        <div className="text-3xl font-bold text-pf-gold font-raleway mb-4 text-center">{b.title}</div>
                        <div className="text-lg font-medium text-black/80 leading-relaxed text-center">{b.desc}</div>
                      </div>
                    </div>
                    {/* Spacer for line */}
                    <div className="w-[28px] flex-shrink-0" />
                    {/* Empty right side */}
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    {/* Empty left side */}
                    <div className="flex-1" />
                    {/* Spacer for line */}
                    <div className="w-[28px] flex-shrink-0" />
                    {/* Card on right */}
                    <div
                      ref={el => { cardRefs.current[i] = el; }}
                      data-idx={i}
                      className="flex flex-col items-start pl-12 flex-1"
                      style={{ maxWidth: '700px' }}
                    >
                      <div className="bg-gray-100 rounded-3xl shadow-2xl border-2 border-pf-gold px-20 py-16 flex flex-col items-center min-h-[260px] max-w-3xl w-full">
                        <div className="w-40 h-40 mb-8 flex items-center justify-center">
                          <Image src={b.svg} alt={b.title + ' illustration'} width={160} height={160} />
                        </div>
                        <div className="text-3xl font-bold text-pf-gold font-raleway mb-4 text-center">{b.title}</div>
                        <div className="text-lg font-medium text-black/80 leading-relaxed text-center">{b.desc}</div>
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