"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight, ChevronDown } from 'lucide-react';

const services = [
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Awareness',
    description: 'Protect your organization from the latest cyber threats with our expert training and assessments.',
    longDescription: 'Our comprehensive cybersecurity awareness programs are designed to empower your employees with the knowledge and skills to identify and respond to cyber threats. We offer simulated phishing attacks, security workshops, and continuous training to create a security-first culture.',
    icon: <ShieldCheck className="w-8 h-8 mr-4 text-blue-600" />,
    image: '/cybersecurity-spotlight.png', // Placeholder image path
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Support',
    description: 'Get strategic guidance and reliable technical support to optimize your IT infrastructure.',
    longDescription: 'Our IT experts provide strategic consulting to help you leverage technology for business growth. We offer everything from infrastructure audits and roadmap development to 24/7 technical support, ensuring your systems are always running optimally.',
    icon: <Briefcase className="w-8 h-8 mr-4 text-blue-600" />,
    image: '/it-consulting-spotlight.png', // Placeholder image path
  },
  {
    slug: 'development',
    title: 'Website & Software Development',
    description: 'We build custom websites and software solutions to meet your unique business needs.',
    longDescription: 'From stunning, responsive websites to complex enterprise software, our development team delivers tailor-made solutions. We work with the latest technologies to build products that are scalable, secure, and perfectly aligned with your business objectives.',
    icon: <Code className="w-8 h-8 mr-4 text-blue-600" />,
    image: '/development-spotlight.png', // Placeholder image path
  },
  {
    slug: 'infrastructure',
    title: 'ICT Infrastructure Setup',
    description: 'We design and implement robust and scalable ICT infrastructure for your organization.',
    longDescription: 'A solid foundation is key to digital success. We design, implement, and manage robust ICT infrastructure, including networking, cloud solutions, and data centers, ensuring your technology backbone can support your ambitions.',
    icon: <Network className="w-8 h-8 mr-4 text-blue-600" />,
    image: '/infrastructure-spotlight.png', // Placeholder image path
  },
  {
    slug: 'procurement',
    title: 'ICT Equipment Procurement',
    description: 'We procure and deliver a wide range of ICT equipment to meet your needs.',
    longDescription: 'Leverage our network of trusted partners to procure high-quality ICT equipment at competitive prices. We handle the entire process, from sourcing and purchasing to delivery and installation, saving you time and resources.',
    icon: <ShoppingCart className="w-8 h-8 mr-4 text-blue-600" />,
    image: '/procurement-spotlight.png', // Placeholder image path
  },
];

const InteractiveServices = () => {
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug);

  const selectedService = services.find(s => s.slug === selectedSlug) || services[0];

  const toggleService = (slug: string) => {
    setSelectedSlug(prevSlug => (prevSlug === slug ? null : slug));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">What We Offer</h2>
        
        {/* Desktop: Two-column layout */}
        <div className="hidden lg:flex flex-row gap-10 min-h-[500px]">
          <div className="w-1/3 space-y-4">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => setSelectedSlug(service.slug)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  selectedSlug === service.slug
                    ? 'bg-blue-600 text-white shadow-xl'
                    : 'bg-white hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className={`mt-2 ${selectedSlug === service.slug ? 'text-blue-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>
          <div className="w-2/3 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 mb-6">{selectedService.longDescription}</p>
              <Link href={`/services/${selectedService.slug}`} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Service Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleService(service.slug)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <div className="flex items-center">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                    selectedSlug === service.slug ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  selectedSlug === service.slug ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 border-t border-gray-200">
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500">Service Image</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.longDescription}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;