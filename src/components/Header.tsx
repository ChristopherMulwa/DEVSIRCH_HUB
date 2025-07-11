
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // A little bit of scroll before the change happens
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = `relative font-medium after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`;

  const headerClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled
      ? 'bg-white/80 shadow-md backdrop-filter backdrop-blur-lg'
      : 'bg-transparent'
    }
  `;

  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const linkColor = isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200';


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={`text-2xl font-bold ${textColor}`}>
          <Link href="/">DEVSIRCH HUB</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`${linkColor} ${navLinkClasses}`}>Home</Link>
          <Link href="/about" className={`${linkColor} ${navLinkClasses}`}>About Us</Link>
          <Link href="/services" className={`${linkColor} ${navLinkClasses}`}>Services</Link>
          <Link href="/future" className={`${linkColor} ${navLinkClasses}`}>Future Initiatives</Link>
          <Link href="/contact" className={`${linkColor} ${navLinkClasses}`}>Contact Us</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${textColor} focus:outline-none`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-white/80' : 'bg-black/80'} shadow-lg backdrop-filter backdrop-blur-lg`}>
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`} onClick={toggleMenu}>Home</Link>
            <Link href="/about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`} onClick={toggleMenu}>About Us</Link>
            <Link href="/services" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`} onClick={toggleMenu}>Services</Link>
            <Link href="/future" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`} onClick={toggleMenu}>Future Initiatives</Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`} onClick={toggleMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
