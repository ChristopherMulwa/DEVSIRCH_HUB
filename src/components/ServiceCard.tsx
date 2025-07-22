
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, href, isFeatured = false }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
    transition={{ duration: 0.3 }}
    className={`bg-white p-8 rounded-lg border border-gray-200 flex flex-col text-center items-center ${isFeatured ? 'bg-gray-50' : ''}`}
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <Link href={href} className="text-blue-600 font-semibold flex items-center group mt-auto">
      Learn More
      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
    </Link>
  </motion.div>
);

export default ServiceCard;
