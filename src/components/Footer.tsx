
"use client";


import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DEVSIRCH HUB</h3>
            <p className="text-gray-400 mb-4">
              Empowering your digital future with secure and innovative IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/devsirchhub" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="https://twitter.com/devsirchhub" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="https://www.linkedin.com/company/devsirch-hub/posts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/future" className="text-gray-400 hover:text-white transition-colors">Future Initiatives</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/it-consulting" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/services/website-and-software-development" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/ict-infrastructure-setup" className="text-gray-400 hover:text-white transition-colors">ICT Infrastructure</Link></li>
              <li><Link href="/services/ict-equipment-procurement" className="text-gray-400 hover:text-white transition-colors">ICT Procurement</Link></li>
              <li><Link href="/services/grc" className="text-gray-400 hover:text-white transition-colors">GRC</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+254759773145" className="hover:text-white transition-colors">+254 759 773 145</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:devsirchhub@gmail.com" className="hover:text-white transition-colors">devsirchhub@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {year} DEVSIRCH HUB. All Rights Reserved. | 
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
