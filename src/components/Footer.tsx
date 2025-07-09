import React from "react";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Firm", href: "#firm" },
      { name: "Edge", href: "#edge" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "Companies", href: "#portfolio" },
      { name: "Success Stories", href: "#portfolio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "News", href: "#blog" },
      { name: "Insights", href: "#blog" },
      { name: "Careers/Jobs", href: "#jobs" },
    ],
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/myprasanna/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pf-white" aria-hidden="true">
        <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
        <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
        <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="currentColor"/>
      </svg>
    ),
    alt: "LinkedIn logo",
  },
  {
    name: "Twitter",
    href: "https://x.com/myprasanna",
    icon: (
      <svg viewBox="0 0 512 509.64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pf-white" aria-hidden="true">
        <rect x="32" y="32" width="448" height="445.64" rx="60" stroke="currentColor" strokeWidth="24" fill="none" />
        <path d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z" fill="currentColor"/>
      </svg>
    ),
    alt: "Twitter (X) logo",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-14 px-10 lg:px-20 bg-white border-t border-subtle">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo with minimal wordmark and geometric symbol */}
        <div className="flex items-center gap-3">
          {/* Simple geometric symbol - minimalist square */}
          <div className="w-7 h-7 bg-pf-black rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          {/* Refined wordmark */}
          <div className="font-display text-xl font-light tracking-tight text-pf-black">
            <span className="font-medium text-pf-black">PRAS</span>
            <span className="font-light text-gray-600">CAPITAL</span>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <a href="/about" className="text-pf-black font-medium text-base hover:text-gray-600">About</a>
          <a href="/portfolio" className="text-pf-black font-medium text-base hover:text-gray-600">Portfolio</a>
          <a href="/contact" className="text-pf-black font-medium text-base hover:text-gray-600">Contact</a>
        </div>
        {/* Copyright */}
        <div className="text-pf-black text-base font-light">
          © 2024 Prasanna Fund. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 