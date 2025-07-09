"use client";
import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close side panel on route change
  useEffect(() => {
    setSideOpen(false);
  }, [currentPath]);

  // Close on ESC or click outside
  useEffect(() => {
    if (!sideOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSideOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [sideOpen]);

  return (
    <nav
      className={`w-full flex items-center justify-between px-16 lg:px-24 py-10 min-h-[64px] h-[72px] sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-subtle' 
          : 'bg-transparent'
      }`}
    >
      {/* Logo with minimal wordmark and geometric symbol */}
      <div className="flex items-center gap-4">
        {/* Simple geometric symbol - minimalist square */}
        <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
          isScrolled ? 'bg-pf-black' : 'bg-white'
        }`}>
          <div className={`w-4 h-4 rounded-sm ${
            isScrolled ? 'bg-white' : 'bg-pf-black'
          }`}></div>
        </div>
        {/* Refined wordmark */}
        <div className="font-display text-2xl font-light tracking-tight">
          <span className={`font-medium ${
            isScrolled ? 'text-pf-black' : 'text-white'
          }`}>PRAS</span>
          <span className={`font-light ${
            isScrolled ? 'text-gray-600' : 'text-white/80'
          }`}>CAPITAL</span>
        </div>
      </div>
      {/* Nav Links - desktop only */}
      <div className="hidden md:flex gap-16 justify-center">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? currentPath === '/'
              : currentPath.startsWith(link.href);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`group relative uppercase tracking-widest text-sm font-medium pb-2 border-b-2 ${
                isScrolled 
                  ? isActive 
                    ? 'text-pf-black border-pf-black' 
                    : 'text-gray-600 hover:text-pf-black border-transparent hover:border-gray-300'
                  : isActive 
                    ? 'text-white border-white' 
                    : 'text-white/80 hover:text-white border-transparent hover:border-white/60'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      {/* Hamburger icon - mobile only */}
      <button
        className={`md:hidden flex flex-col justify-center items-center w-12 h-12 relative z-50 rounded-full transition-colors duration-200 ${
          isScrolled ? 'bg-white' : 'bg-pf-black'
        }`}
        aria-label={sideOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setSideOpen((v) => !v)}
      >
        {/* Hamburger/Cross icon */}
        <span
          className={`block absolute h-0.5 w-8 transform transition-all duration-200 ease-in-out ${
            sideOpen ? 'rotate-45 top-6' : 'top-4'
          } ${isScrolled ? 'bg-pf-black' : 'bg-white'}`}
        />
        <span
          className={`block absolute h-0.5 w-8 transition-all duration-200 ease-in-out ${
            sideOpen ? 'opacity-0' : 'top-6'
          } ${isScrolled ? 'bg-pf-black' : 'bg-white'}`}
        />
        <span
          className={`block absolute h-0.5 w-8 transform transition-all duration-200 ease-in-out ${
            sideOpen ? '-rotate-45 top-6' : 'top-8'
          } ${isScrolled ? 'bg-pf-black' : 'bg-white'}`}
        />
      </button>
      {/* Side panel overlay */}
      {sideOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setSideOpen(false)}
            aria-label="Close navigation overlay"
          />
          <aside
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col pt-24 px-8 gap-8 transition-transform duration-200 ease-in-out"
            style={{ transform: sideOpen ? 'translateX(0)' : 'translateX(100%)' }}
            aria-label="Mobile navigation panel"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`uppercase tracking-widest text-lg font-medium py-2 border-b border-subtle ${
                  currentPath.startsWith(link.href)
                    ? 'text-pf-black'
                    : 'text-gray-600 hover:text-pf-black'
                }`}
                onClick={() => setSideOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </aside>
        </>
      )}
    </nav>
  );
} 