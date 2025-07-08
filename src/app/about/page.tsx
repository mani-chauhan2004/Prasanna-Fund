'use client';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar currentPath="/about" />
      <section className=" min-h-[80vh] py-20 px-4 flex flex-col items-center">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-8 gap-12 items-stretch">
          {/* About text column */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-center md:pr-8">
            <h1 className="text-4xl font-bold text-pf-gold mb-4 font-raleway">About Prasanna</h1>
            <p className="text-lg md:text-xl text-pf-cream font-medium leading-relaxed mb-2">
              <span className="text-pf-gold font-bold">Prasanna Sankar</span> is the co-founder of <span className="text-pf-gold font-bold">Rippling</span> (currently valued at $10B) and <span className="text-pf-gold font-bold">0xPPL</span>, and is an active angel investor. Based in Chennai, Prasanna has a proven track record of building and scaling world-class technology companies. Previously, he served as Director of Engineering at Zenefits, co-founded Likealittle, and was a software developer at Microsoft. Prasanna is also a highly accomplished programmer, ranked #1 in India at TopCoder during college, a 2x Google Code Jam world finalist, and a 2x ACM ICPC world finalist. He is passionate about supporting founders and building the future of technology.
            </p>
          </div>
          {/* Image columns */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <div
              className="h-[420px] md:h-[520px] w-full rounded-3xl bg-center bg-cover shadow-xl"
              style={{ backgroundImage: 'url(/about/profile_image.jpeg)' }}
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <div
              className="h-[420px] md:h-[520px] w-full rounded-3xl bg-center bg-cover shadow-xl"
              style={{ backgroundImage: 'url(/about/profile_image_2.webp)' }}
            />
          </div>
        </div>
      </section>
      {/* Timeline section */}
      <section className="w-[90%] mx-auto mt-16 flex flex-col items-center flex flex-col gap-30">
        <h2 className="text-3xl font-bold text-pf-gold mb-8 font-raleway">Career Timeline</h2>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full" style={{ minHeight: 400 }}>
            {/* SVG zig-zag graph line behind dots */}
            <svg className="absolute left-0 top-0 h-full w-full z-0" viewBox="0 0 1000 380" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
              {(() => {
                const n = 5;
                const width = 1000;
                // Much steeper upward growth
                const yVals = [280, 230, 130, 90, 30];
                const points = yVals.map((y, i) => `${i * width / (n - 1)},${y}`).join(' ');
                return (
                  <>
                    <polyline
                      fill="none"
                      stroke="#00FF00"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      points={points}
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Inflated small dots at each vertex */}
                    {yVals.map((y, i) => (
                      <circle
                        key={i}
                        cx={i * width / (n - 1)}
                        cy={y}
                        r="5"
                        fill="#181818"
                        stroke="#00FF00"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                    ))}
                  </>
                );
              })()}
            </svg>
            {/* Timeline dots and labels at the vertices */}
            {(() => {
              const companies = [
                { label: 'Microsoft', year: '2008', desc: 'Software Developer' },
                { label: 'Likealittle', year: '2009', desc: 'Co-Founder & CTO' },
                { label: 'Zenefits', year: '2015', desc: 'Director of Engineering' },
                { label: 'Rippling', year: '2016', desc: 'Co-Founder & CTO' },
                { label: '0xPPL', year: '2023', desc: 'Founder' },
              ];
              const n = companies.length;
              const width = 1000;
              const xStep = width / (n - 1);
              const yVals = [260, 200, 100, 60, 20];
              return companies.map((item, idx) => (
                <div
                  key={item.label}
                  className="absolute flex flex-col items-center z-10 min-w-[100px]"
                  style={{
                    left: `calc(${(idx * 100) / (n - 1)}% - 50px)`,
                    top: `${yVals[idx] - 110}px`,
                    width: '100px',
                  }}
                >
                  <div className="w-7 h-7 bg-pf-gold rounded-full border-4 border-pf-black flex items-center justify-center mb-2 shadow-lg" />
                  <div className="text-pf-gold font-extrabold text-xl font-raleway mb-1 whitespace-nowrap text-center">{item.label}</div>
                  <div className="text-pf-cream text-base mb-1 text-center">{item.year}</div>
                  <div className="text-pf-cream text-sm text-center max-w-[140px]">{item.desc}</div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
    </>
  );
}


