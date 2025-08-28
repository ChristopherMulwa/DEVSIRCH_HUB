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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Cybersecurity Awareness', href: '/services/cybersecurity' },
        { name: 'IT Consulting & Support', href: '/services/it-consulting' },
        { name: 'Website & Software Development', href: '/services/website-and-software-development' },
        { name: 'ICT Infrastructure Setup', href: '/services/ict-infrastructure-setup' },
        { name: 'ICT Equipment Procurement', href: '/services/ict-equipment-procurement' },
        { name: 'Governance, Risk & Compliance', href: '/services/grc' },
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
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } }
  } as const;

  const mobileNavItemsVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
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
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold tracking-tight">
                  DEVSIRCH <span className="text-blue-600">HUB</span>
                </span>
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
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
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
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className={isScrolled ? 'text-gray-800' : 'text-white'}>
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
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white flex flex-col"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold tracking-tight text-gray-900">
                    DEVSIRCH <span className="text-blue-600">HUB</span>
                  </span>
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={28} className="text-gray-600" />
                </button>
              </div>
              <nav className="flex-grow p-6">
                <motion.ul 
                  className="space-y-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li key={link.name} variants={mobileNavItemsVariants}>
                      {link.dropdown ? (
                        <div>
                          <button 
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="w-full flex justify-between items-center py-2 text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
                          >
                            <span>{link.name}</span>
                            <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden pl-4"
                              >
                                <ul className="py-2 space-y-2">
                                  {link.dropdown.map(item => (
                                    <li key={item.name}>
                                      <Link href={item.href} onClick={handleMobileLinkClick} className="block text-gray-600 hover:text-blue-600 transition-colors">
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link href={link.href} onClick={handleMobileLinkClick} className="block py-2 text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors">
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              <div className="p-6 border-t">
                <Link href="/contact" onClick={handleMobileLinkClick} className="w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg block">
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