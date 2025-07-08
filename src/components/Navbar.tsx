import React from 'react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Thesis', href: '/thesis' },
    { name: 'Azure Credits', href: '/azure-credits' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className="w-full flex items-center justify-between px-12 py-6 min-h-[84px] shadow-sm border-b border-pf-gold bg-pf-black sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="font-raleway text-4xl font-light tracking-tight text-pf-gold">
        <span className="font-bold text-pf-white">prasanna</span> fund
      </div>
      {/* Nav Links */}
      <div className="flex gap-10 w-7/12 justify-around">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? currentPath === '/'
              : currentPath.startsWith(link.href);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`group relative uppercase tracking-widest text-lg font-semibold transition-colors duration-300 ${
                isActive ? 'text-pf-gold' : 'text-pf-cream'
              }`}
            >
              {link.name}
              <span
                className="pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 bg-pf-gold origin-center scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-500 ease-in-out"
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar; 