"use client";

import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  image: string;
  gridSpan: number;
};

const services: Service[] = [
  {
    title: 'Cybersecurity Awareness',
    description: 'Expert training and assessments to protect your organization from cyber threats.',
    href: '/services/cybersecurity',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: '/CybersecurityAwarenessImage.png',
    gridSpan: 2,
  },
  {
    title: 'IT Consulting & Support',
    description: 'Strategic guidance and reliable support to optimize your IT infrastructure.',
    href: '/services/it-consulting',
    icon: <Briefcase className="w-8 h-8" />,
    image: '/ITConsulting&SupportImage.png',
    gridSpan: 1,
  },
  {
    title: 'Website & Software Development',
    description: 'Custom websites and software solutions tailored to your business needs.',
    href: '/services/website-and-software-development',
    icon: <Code className="w-8 h-8" />,
    image: '/Website&SoftwareDevelopmentImage.png',
    gridSpan: 1,
  },
  {
    title: 'ICT Infrastructure Setup',
    description: 'Robust and scalable ICT infrastructure design and implementation.',
    href: '/services/ict-infrastructure-setup',
    icon: <Network className="w-8 h-8" />,
    image: '/ICTInfrastructureSetupImage.png',
    gridSpan: 1,
  },
  {
    title: 'ICT Equipment Procurement',
    description: 'Procurement and delivery of a wide range of ICT equipment.',
    href: '/services/ict-equipment-procurement',
    icon: <ShoppingCart className="w-8 h-8" />,
    image: '/ICTEquipmentProcurementImage.png',
    gridSpan: 2,
  },
  {
    title: 'Governance, Risk & Compliance',
    description: 'Comprehensive GRC solutions to navigate the complex regulatory landscape.',
    href: '/services/grc',
    icon: <Landmark className="w-8 h-8" />,
    image: '/cybersecurityServicehero.png',
    gridSpan: 1,
  },
];

const InteractiveServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide a comprehensive range of IT solutions to meet the needs of modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`col-span-1 md:col-span-${service.gridSpan} group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 z-10"></div>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="relative z-20 p-8 flex flex-col justify-end h-full text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center font-semibold text-white hover:text-blue-300 transition-colors self-start">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;