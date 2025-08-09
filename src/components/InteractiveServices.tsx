
"use client";

import { useState } from 'react';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  image: string;
};

const services: Service[] = [
  {
    title: 'Cybersecurity Awareness',
    description: 'Expert training and assessments to protect your organization from cyber threats.',
    href: '/services/cybersecurity',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: '/CybersecurityAwarenessImage.png',
  },
  {
    title: 'IT Consulting & Support',
    description: 'Strategic guidance and reliable support to optimize your IT infrastructure.',
    href: '/services/it-consulting',
    icon: <Briefcase className="w-8 h-8" />,
    image: '/ITConsulting&SupportImage.png',
  },
  {
    title: 'Website & Software Development',
    description: 'Custom websites and software solutions tailored to your business needs.',
    href: '/services/website-and-software-development',
    icon: <Code className="w-8 h-8" />,
    image: '/Website&SoftwareDevelopmentImage.png',
  },
  {
    title: 'ICT Infrastructure Setup',
    description: 'Robust and scalable ICT infrastructure design and implementation.',
    href: '/services/ict-infrastructure-setup',
    icon: <Network className="w-8 h-8" />,
    image: '/ICTInfrastructureSetupImage.png',
  },
  {
    title: 'ICT Equipment Procurement',
    description: 'Procurement and delivery of a wide range of ICT equipment.',
    href: '/services/ict-equipment-procurement',
    icon: <ShoppingCart className="w-8 h-8" />,
    image: '/ICTEquipmentProcurementImage.png',
  },
  {
    title: 'Governance, Risk & Compliance',
    description: 'Comprehensive GRC solutions to navigate the complex regulatory landscape.',
    href: '/services/grc',
    icon: <Landmark className="w-8 h-8" />,
    image: '/cybersecurityServicehero.png',
  },
];

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState<Service | null>(services[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide a comprehensive range of IT solutions to meet the needs of modern businesses.
          </p>
        </div>

        {/* Desktop: Two-Column Layout */}
        <div className="hidden md:flex md:space-x-12">
          {/* Left Column: Service Navigation */}
          <div className="w-1/3 flex flex-col space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                onClick={() => setActiveService(service)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService.title === service.title
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`transition-colors duration-300 ${activeService.title !== service.title && 'text-blue-600'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Service Content */}
          <div className="w-2/3">
            <AnimatePresence mode="wait">
              {activeService && (
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-xl h-full flex flex-col"
              >
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeService.title}</h3>
                <p className="text-gray-600 text-lg mb-6 flex-grow">{activeService.description}</p>
                <Link href={activeService.href} className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors self-start">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            {services.map((service) => (
              <div key={service.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <motion.div
                  onClick={() => setActiveService(activeService.title === service.title ? null : service)}
                  className="p-6 flex justify-between items-center cursor-pointer bg-white"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-600">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeService?.title === service.title ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {activeService?.title === service.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="bg-gray-50"
                    >
                      <div className="p-6">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Link href={service.href} className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
                          Learn More <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;
