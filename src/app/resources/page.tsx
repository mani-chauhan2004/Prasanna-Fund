'use client';
import React, { useState } from 'react';

const resources = [
  {
    type: 'blog',
    title: 'Building Rippling and Beyond: Prasanna Sankar Insights on Tech Entrepreneurship',
    description: 'Explore the journey of Prasanna Sankar, from his early days at Google to co-founding Rippling and his current venture 0xPPL.',
    link: 'https://axolo.co/blog/p/building-rippling-prasanna-sankar-cto',
    image: 'https://axolo.co/favicon.ico',
  },
  {
    type: 'article',
    title: 'Microsoft Alumni Interview',
    description: 'Interview with Prasanna Sankar on the Microsoft Alumni Network.',
    link: 'https://www.microsoftalumni.com/s/1769/19/interior.aspx?sid=1769&gid=2&pgid=3203',
    image: 'https://www.microsoftalumni.com/s/1769/images/gid2/editor/beyond_the_blue_badge/season_8/prassnna_linkedin.jpg', 
  },
  {
    type: 'youtube',
    title: 'IB Academy Exclusive: CTO Talk with Prasanna Sankar',
    description: 'Live talk with Prasanna Sankar, CTO and Co-Founder of Rippling.',
    link: 'https://www.youtube.com/watch?v=cq0J2Kksudw&pp=ygUUcHJhc2FubmEgY2FuZGVy',
    image: 'https://img.youtube.com/vi/cq0J2Kksudw/hqdefault.jpg',
  },
  {
    type: 'youtube',
    title: 'Rippling CTO Prasanna Sankar: Parker Conrad Gave Rippling CTO 40% 2,000 Customers',
    description: 'Podcast with Prasanna Sankar and Parker Conrad on Rippling growth.',
    link: 'https://www.youtube.com/watch?v=DEaTgKg8WA4&t=564s&pp=ygUUcHJhc2FubmEgY2FuZGVy',
    image: 'https://img.youtube.com/vi/DEaTgKg8WA4/hqdefault.jpg',
  },
  {
    type: 'youtube',
    title: 'Prasanna Sankar - Building a Multi-Billion Dollar Startup',
    description: 'How Prasanna and his cofounder built a multibillion dollar startup Rippling.',
    link: 'https://www.youtube.com/watch?v=nA1zz4gpRe8&pp=ygUUcHJhc2FubmEgY2FuZGVy',
    image: 'https://img.youtube.com/vi/nA1zz4gpRe8/hqdefault.jpg',
  },
  {
    type: 'youtube',
    title: 'Prasanna Sankar, Co-Founder, Rippling | SCALER POD 08',
    description: '6 Sigma Events, Startups and Blockchain with Prasanna Sankar.',
    link: 'https://www.youtube.com/watch?v=YVw24kVNQt4',
    image: 'https://img.youtube.com/vi/YVw24kVNQt4/hqdefault.jpg',
  },
  {
    type: 'youtube',
    title: 'Fireside Chat with Prasanna Sankar | Proxima Mumbai',
    description: 'Stories and lessons from a career spent building at the edge of technology.',
    link: 'https://www.youtube.com/watch?v=6W2M845br9s&t=338s&pp=ygUUcHJhc2FubmEgY2FuZGVy',
    image: 'https://img.youtube.com/vi/6W2M845br9s/hqdefault.jpg',
  },
  {
    type: 'youtube',
    title: 'Ground Up with Prasanna Sankar | Rippling Co-founder on Startups, Crypto & Building the Future',
    description: 'Prasanna Sankar on building from scratch, navigating the startup grind, and more.',
    link: 'https://www.youtube.com/watch?v=XtiJW96so9Y',
    image: 'https://img.youtube.com/vi/XtiJW96so9Y/hqdefault.jpg',
  },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Blog', value: 'blog' },
  { label: 'Article', value: 'article' },
  { label: 'YouTube', value: 'youtube' },
];

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-subtle shadow-md hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={resource.image}
          alt={resource.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-pf-black mb-2 font-display group-hover:text-gray-700">{resource.title}</h3>
        <p className="text-gray-600 font-body text-base mb-4 flex-1">{resource.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium text-pf-black bg-gray-100 rounded-full border border-subtle">
            {resource.type === 'youtube' ? 'YouTube' : resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
          </span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-pf-black">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === active);

  return (
    <section className="w-full min-h-[80vh] px-4 md:px-20 lg:px-32 py-24 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-pf-black mb-12 font-display text-center">Resources</h1>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-12 mb-20 justify-center">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`text-lg font-medium pb-2 border-b-2 ${
              active === opt.value
                ? "text-pf-black border-pf-black"
                : "text-gray-500 border-transparent hover:text-pf-black hover:border-gray-300"
            }`}
            onClick={() => setActive(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map((resource, idx) => (
          <ResourceCard key={idx} resource={resource} />
        ))}
      </div>
    </section>
  );
}
