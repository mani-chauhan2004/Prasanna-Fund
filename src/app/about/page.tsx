'use client';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowText(true);
    const t = setTimeout(() => setShowImage(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar currentPath="/about" />
      <section className=" min-h-[80vh] py-32 px-4 flex flex-col items-center bg-white">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-8 gap-16 items-stretch">
          {/* About text column */}
          <div className={`col-span-2 md:col-span-4 flex flex-col justify-center md:pr-12 transition-all duration-1000 ease-out
            ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-pf-black mb-8 font-display">About Prasanna</h1>
            <p className="text-2xl md:text-3xl text-pf-black font-body-xl font-light leading-relaxed mb-6 flex items-center gap-4">
              <span className="text-2xl md:text-3xl text-pf-black" style={{lineHeight: 1}}>&#10148;</span>
              Co-founder of Rippling ($16B valuation) and 0xPPL.
            </p>
            <p className="text-xl md:text-2xl text-pf-black font-body-lg font-light leading-relaxed mb-6 flex items-center gap-4">
              <span className="text-xl md:text-2xl text-pf-black" style={{lineHeight: 1}}>&#10148;</span>
              Previously Director of Engineering at Zenefits, co-founded Likealittle, and was a software developer at Microsoft.
            </p>
            <p className="text-lg md:text-xl text-pf-black font-body font-light leading-relaxed mb-6 flex items-center gap-4">
              <span className="text-lg md:text-xl text-pf-black" style={{lineHeight: 1}}>&#10148;</span>
              Ranked #1 in India at TopCoder during college, 2x Google Code Jam world finalist, and 2x ACM ICPC world finalist.
            </p>
          </div>
          {/* Image column - span more columns for better balance */}
          <div className={`col-span-1 md:col-span-4 flex flex-col justify-center transition-all duration-1000 ease-out
            ${showImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div
              className="h-[420px] md:h-[520px] w-full rounded-3xl bg-center bg-cover shadow-xl"
              style={{ backgroundImage: 'url(/about/profile_image.jpeg)' }}
            />
          </div>
        </div>
      </section>
      {/* Timeline section
      <section className="w-full px-6 md:px-16 lg:px-32 mx-auto flex flex-col items-center gap-30 bg-gray-50 py-20">
        <h2 className="text-4xl md:text-5xl font-medium text-pf-black mb-16 font-display">Career Timeline</h2>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full" style={{ minHeight: 540 }}> */}
            {/* SVG zig-zag graph line behind dots */}
            {/* <svg className="absolute left-0 top-0 h-full w-full z-0" viewBox="0 0 1000 380" preserveAspectRatio="none" style={{ pointerEvents: 'none', width: '100%' }}>
              {(() => {
                const n = 5;
                const width = 1000;
                const padding = 48; // px horizontal padding for dots
                const effectiveWidth = width - 2 * padding; */}
                {/* // Much steeper upward growth
                const yVals = [280, 230, 130, 90, 30];
                const points = yVals.map((y, i) => `${padding + (i * effectiveWidth) / (n - 1)},${y}`).join(' ');
                return (
                  <>
                    <polyline
                      fill="none"
                      stroke="#d1d5db"
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      points={points}
                      vectorEffect="non-scaling-stroke"
                    /> */}
                    {/* Inflated small dots at each vertex */}
                    {/* {yVals.map((y, i) => (
                      <circle
                        key={i}
                        cx={padding + (i * effectiveWidth) / (n - 1)}
                        cy={y}
                        r="8"
                        fill="#1a1a1a"
                        stroke="#fff"
                        strokeWidth="3"
                        opacity="1"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))' }}
                      />
                    ))}
                  </>
                );
              })()}
            </svg> */}
            {/* Timeline dots and labels at the vertices */}
            {/* {(() => {
              const companies = [
                { label: 'Microsoft', year: '2008', desc: 'Software Developer' },
                { label: 'Likealittle', year: '2009', desc: 'Co-Founder & CTO' },
                { label: 'Zenefits', year: '2015', desc: 'Director of Engineering' },
                { label: 'Rippling', year: '2016', desc: 'Co-Founder & CTO' },
                { label: '0xPPL', year: '2023', desc: 'Founder' },
              ];
              const n = companies.length;
              const width = 1000;
              const padding = 48;
              const effectiveWidth = width - 2 * padding;
              const yVals = [280, 215, 75, 15, -35];
              const labelOffset = 80; // px above the dot
              return companies.map((item, idx) => {
                const x = padding + (idx * effectiveWidth) / (n - 1);
                const y = yVals[idx];
                return (
                  <div
                    key={item.label}
                    className="absolute flex flex-col items-center z-10 min-w-[140px]"
                    style={{
                      left: `calc(${(x / width) * 100}% - 70px)`,
                      top: `${y - labelOffset}px`,
                      width: '140px',
                    }}
                  >
                    <div className="text-pf-black font-bold text-2xl md:text-3xl font-display mb-2 whitespace-nowrap text-center">{item.label}</div>
                    <div className="text-pf-black text-lg md:text-xl mb-1 text-center font-body-lg font-normal">{item.year}</div>
                    <div className="text-pf-black text-base md:text-lg text-center max-w-[200px] font-body-lg font-light mb-4">{item.desc}</div>
                    <div className="w-8 h-8 bg-pf-black rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                  </div>
                );
              });
            })()} */}
          {/* </div>
        </div>
      </section> */}
    </>
  );
}


