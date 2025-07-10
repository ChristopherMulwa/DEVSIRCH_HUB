"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight, ChevronDown } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const services = [
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Awareness',
    description: 'Expert training to turn your team into a security asset.',
    longDescription: "Transform your employees into your first line of defense. Our engaging training programs have been shown to reduce successful phishing attacks by up to 95%. We instill a lasting culture of security, protecting your data, reputation, and bottom line.",
    icon: ShieldCheck,
    imageUrl: '/CybersecurityAwarenessImage.png',
    ctaText: 'Get a Security Audit',
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Support',
    description: 'Strategic guidance to align your technology with your business goals.',
    longDescription: "Leverage our expertise to create a strategic IT roadmap that drives growth and efficiency. From infrastructure audits to 24/7 support, we ensure your technology is a competitive advantage, not a bottleneck.",
    icon: Briefcase,
    imageUrl: '/ITConsulting&SupportImage.png',
    ctaText: 'Book a Strategy Call',
  },
  {
    slug: 'development',
    title: 'Website & Software Development',
    description: 'Bespoke digital solutions that perform and impress.',
    longDescription: "From stunning websites to robust enterprise software, we build custom solutions that are scalable, secure, and perfectly aligned with your business objectives. Let's build the tool that gives you a competitive edge.",
    icon: Code,
    imageUrl: '/Website&SoftwareDevelopmentImage.png',
    ctaText: 'Discuss Your Project',
  },
  {
    slug: 'infrastructure',
    title: 'ICT Infrastructure Setup',
    description: 'Building the robust and scalable backbone for your business.',
    longDescription: "A solid foundation is key to digital success. We design, implement, and manage robust ICT infrastructure, including networking, cloud solutions, and data centers, ensuring your technology backbone can support your ambitions.",
    icon: Network,
    imageUrl: '/ICTInfrastructureSetupImage.png',
    ctaText: 'Design Your Infrastructure',
  },
  {
    slug: 'procurement',
    title: 'ICT Equipment Procurement',
    description: 'Streamlined procurement for all your hardware and software needs.',
    longDescription: "Leverage our network of trusted partners to procure high-quality ICT equipment at competitive prices. We handle the entire process, from sourcing to installation, saving you time, money, and hassle.",
    icon: ShoppingCart,
    imageUrl: '/ICTEquipmentProcurementImage.png',
    ctaText: 'Get a Procurement Quote',
  },
];

const InteractiveServices = () => {
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug);
  const { openModal } = useModal();

  const selectedService = services.find(s => s.slug === selectedSlug) || services[0];

  const toggleService = (slug: string) => {
    setSelectedSlug(prevSlug => (prevSlug === slug ? null : slug));
  };

  return (
    <section className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">What We Offer</h2>
        
        {/* Desktop: Two-column layout */}
        <div className="hidden lg:flex flex-row gap-10 min-h-[520px]">
          {/* Service Selector Buttons */}
          <div className="w-2/5 space-y-4">
            {services.map((service) => {
              const isSelected = selectedSlug === service.slug;
              const IconComponent = service.icon;

              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedSlug(service.slug)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-l-4 ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 shadow-lg'
                      : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start">
                    <IconComponent className={`h-8 w-8 mr-5 mt-1 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div>
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>
                        {service.title}
                      </h3>
                      <p className={`mt-1 text-sm transition-colors duration-300 ${isSelected ? 'text-blue-800' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details Panel */}
          <div className="w-3/5 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
            {/* Animated Image Container */}
            <div key={selectedService.slug} className="w-full h-72 relative overflow-hidden animate-fade-in">
              <Image
                src={selectedService.imageUrl}
                alt={selectedService.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-4xl font-bold text-gray-800 mb-5">{selectedService.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{selectedService.longDescription}</p>
              
              {/* CTA */}
              <button
                onClick={() => openModal(selectedService.title)}
                className="group mt-auto inline-flex items-center justify-center text-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                {selectedService.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => {
            const isSelected = selectedSlug === service.slug;
            const IconComponent = service.icon;

            return (
              <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <button
                  onClick={() => toggleService(service.slug)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <IconComponent className="h-8 w-8 mr-4 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      isSelected ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isSelected ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-200">
                    <div className="w-full h-56 relative">
                      <Image 
                        src={service.imageUrl} 
                        alt={service.title} 
                        layout="fill" 
                        objectFit="cover" 
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{service.longDescription}</p>
                      
                      {/* CTA */}
                      <button
                        onClick={() => openModal(service.title)}
                        className="group mt-auto inline-flex items-center justify-center text-center w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
                      >
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;

