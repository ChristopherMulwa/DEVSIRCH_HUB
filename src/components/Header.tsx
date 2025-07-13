"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on page navigation
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Cybersecurity Awareness', href: '/services/cybersecurity' },
        { name: 'IT Consulting & Support', href: '/services/it-consulting' },
        { name: 'Website & Software Development', href: '/services/development' },
        { name: 'ICT Infrastructure Setup', href: '/services/infrastructure' },
        { name: 'ICT Equipment Procurement', href: '/services/procurement' },
      ]
    },
    { name: 'Future Initiatives', href: '/future' },
  ];

  const headerVariants = {
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#1f2937', // text-gray-800
    },
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(0px)',
      boxShadow: 'none',
      color: '#ffffff', // text-white
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } }
  };
  
  const getLinkClasses = (href: string, isDropdown = false) => {
    const baseClasses = `relative font-medium transition-colors duration-300`;
    const activeClasses = pathname === href ? 'text-blue-500' : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200';
    const dropdownClasses = isDropdown ? 'flex items-center gap-1' : '';
    return `${baseClasses} ${activeClasses} ${dropdownClasses}`;
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-50"
        variants={headerVariants}
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold">
                DEVSIRCH HUB
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <motion.div
                    key={link.name}
                    className="relative"
                    onHoverStart={() => setIsServicesOpen(true)}
                    onHoverEnd={() => setIsServicesOpen(false)}
                  >
                    <Link href={link.href} className={getLinkClasses(link.href, true)}>
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-xl p-4"
                        >
                          <div className="grid gap-4">
                            {link.dropdown.map((item) => (
                              <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <Link key={link.name} href={link.href} className={getLinkClasses(link.href)}>
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/contact" className="bg-blue-600 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 z-50 bg-white flex flex-col"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                  DEVSIRCH HUB
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={32} className="text-gray-600" />
                </button>
              </div>
              <nav className="flex-grow flex flex-col items-center justify-center space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="text-center">
                    <Link href={link.href} className="block py-2 text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="mt-2 space-y-2">
                        {link.dropdown.map(item => (
                           <Link key={item.name} href={item.href} className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                             {item.name}
                           </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-8 border-t">
                <Link href="/contact" className="w-full text-center bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg block">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
