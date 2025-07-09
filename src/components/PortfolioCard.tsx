import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface PortfolioCompany {
  name: string;
  description: string;
  sector: string;
  stage: string;
  tag: string;
  logo: string;
  link: string;
}

interface PortfolioCardProps {
  company: PortfolioCompany;
}

export default function PortfolioCard({ company }: PortfolioCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-10 border border-subtle hover:-translate-y-1 transition-all duration-[1200ms] ease-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
    >
      {/* Company Logo */}
      <div className="w-16 h-16 mb-8 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <Image 
          src={company.logo} 
          alt={`${company.name} logo`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Company Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-pf-black font-display mb-3 group-hover:text-gray-700">
            {company.name}
          </h3>
          <p className="text-gray-600 font-body leading-relaxed">
            {company.description}
          </p>
        </div>
        
        {/* Company Stats */}
        <div className="flex flex-wrap gap-6 pt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Stage</span>
            <span className="text-pf-black font-medium">{company.stage}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sector</span>
            <span className="text-pf-black font-medium">{company.sector}</span>
          </div>
        </div>
        
        {/* Tag Badge */}
        <div className="pt-6">
          <span className="inline-block px-4 py-2 text-sm font-medium text-pf-black bg-gray-100 rounded-full border border-subtle">
            {company.tag}
          </span>
        </div>
      </div>
      
      {/* Subtle hover indicator */}
      <div className="mt-8 opacity-0 group-hover:opacity-100">
        <div className="w-full h-px bg-gray-200"></div>
      </div>

      {/* Visit site arrow icon */}
      <a
        href={company.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${company.name} website`}
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-pf-black">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>
    </div>
  );
} 