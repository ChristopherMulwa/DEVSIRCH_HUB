
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Cybersecurity Awareness',
    description: 'Expert training and assessments to protect your organization from cyber threats.',
    href: '/services/cybersecurity',
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'IT Consulting & Support',
    description: 'Strategic guidance and reliable support to optimize your IT infrastructure.',
    href: '/services/it-consulting',
    icon: <Briefcase className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Website & Software Development',
    description: 'Custom websites and software solutions tailored to your business needs.',
    href: '/services/development',
    icon: <Code className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'ICT Infrastructure Setup',
    description: 'Robust and scalable ICT infrastructure design and implementation.',
    href: '/services/infrastructure',
    icon: <Network className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'ICT Equipment Procurement',
    description: 'Procurement and delivery of a wide range of ICT equipment.',
    href: '/services/procurement',
    icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Explore All Our Offerings',
    description: 'Discover our full suite of IT solutions designed to empower your business.',
    href: '/services',
    icon: <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center"><ArrowRight /></div>,
    isFeatured: true,
  }
];

const InteractiveServices = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800">Our Core Services</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    We provide a comprehensive range of IT solutions to meet the needs of modern businesses.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default InteractiveServices;
