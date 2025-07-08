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
  },
  {
    title: "Azure Credits",
    links: [
      { name: "Application", href: "#azure-credits" },
      { name: "FAQ", href: "#azure-credits" },
      { name: "Contact", href: "#firm" },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/myprasanna/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pf-gold-light" aria-hidden="true">
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
      <svg viewBox="0 0 512 509.64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pf-gold-light" aria-hidden="true">
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
    <footer className="w-full bg-pf-brown text-pf-cream pt-12 pb-4 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0">
        {/* Left: Logo/Wordmark and subline, vertically centered */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-center h-full">
          <div className="font-raleway text-3xl font-light tracking-tight text-pf-white mb-2">
            <span className="font-bold">prasanna</span> fund
          </div>
          <div className="text-pf-gold text-sm mt-2 max-w-xs">Backing founders who build the future. $300M+ under management.</div>
        </div>
        {/* Right: Social Icons */}
        <div className="flex flex-col items-end flex-1 min-w-[120px] justify-start md:justify-center">
          <div className="flex gap-5 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group transition-colors duration-200 text-pf-gold-light hover:text-pf-cream"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-xs text-pf-cream/70 mb-6">Connect with Prasanna</div>
          {/* All footer links in a single row, right-aligned below social icons */}
          <div className="flex flex-row gap-12 flex-wrap md:flex-nowrap justify-end w-full">
            {footerLinks.map((section) => (
              <div key={section.title} className="min-w-[140px] mb-6 md:mb-0">
                <div className="text-pf-gold font-semibold mb-3 uppercase tracking-wide text-sm text-left">{section.title}</div>
                <ul className="space-y-2 text-left">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-pf-cream hover:text-pf-gold transition-colors duration-200 text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-10 border-t border-pf-gold/30 pt-4 text-center text-xs text-pf-cream/60">
        &copy; {year} Prasanna Fund. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 