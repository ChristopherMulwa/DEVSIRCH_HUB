
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, ShoppingCart, Laptop, HardDrive } from 'lucide-react';
import Link from 'next/link';
import LogoStrip from '@/components/LogoStrip';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'ICT Equipment Procurement | DEVSIRCH HUB',
  description: 'Streamlined procurement of ICT equipment. We source and deliver a wide range of hardware and software at competitive prices, with optional installation and configuration.',
};

const ProcurementPage = () => {
  const offerings = [
    {
      title: 'Hardware Sourcing',
      description: 'We procure laptops, desktops, servers, and networking equipment from leading manufacturers to meet your specific requirements.',
      icon: <Laptop className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Software Licensing',
      description: 'We provide and manage software licenses for a wide range of applications, ensuring you are compliant and cost-effective.',
      icon: <HardDrive className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Peripheral & Accessory Supply',
      description: 'We source and deliver a wide range of peripherals and accessories, from printers and scanners to cables and adapters.',
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />
    },
    {
        title: 'Installation & Configuration',
        description: 'Our technicians can install and configure your new equipment to ensure it is ready to use, saving you time and effort.',
        icon: <CheckCircle className="w-8 h-8 text-blue-500" />
      },
  ];

  const benefits = [
    'Get the right equipment at competitive prices.',
    'Save time and resources on procurement.',
    'Benefit from our established relationships with suppliers.',
    'Ensure fast and reliable delivery of your equipment.',
    'Get expert installation and configuration services.',
    'Simplify your procurement process with a single point of contact.',
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Services', item: '/services' },
              { '@type': 'ListItem', position: 2, name: 'ICT Equipment Procurement', item: '/services/ict-equipment-procurement' },
            ],
          }),
        }}
      />
      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ICT Equipment Procurement',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'Hardware, Software & Peripherals Sourcing',
            areaServed: 'KE',
          }),
        }}
      />

      <LogoStrip className="bg-gray-100 dark:bg-gray-800/40" />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image 
          src="/ICTEquipmentProcurementImage.png" 
          alt="A warehouse with boxes of equipment" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">ICT Equipment Procurement</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your trusted source for hardware and software solutions.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Streamlined & Cost-Effective Procurement</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Procuring the right ICT equipment can be a complex and time-consuming process. DEVSIRCH HUB simplifies this for you. We leverage our extensive network of suppliers to source high-quality hardware and software at competitive prices, ensuring you get the best value for your investment.
            </p>
          </div>

          {/* Key Offerings */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Procurement Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {offerings.map((offering) => (
                <div key={offering.title} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                  <div className="flex-shrink-0 mr-6">{offering.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{offering.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{offering.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 bg-gray-100 dark:bg-gray-800 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Key Benefits of Our Procurement Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Ready to Source Your Equipment?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us handle your procurement needs so you can focus on your core business. Contact us today for a quote.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
              Request a Quote
            </Link>
          </div>
          <FAQSection
            title="Procurement FAQs"
            items={[
              { question: 'Do you provide vendor comparisons?', answer: 'Yes, we provide multi-vendor quotes and recommendations aligned to requirements.' },
              { question: 'Can you handle delivery and installation?', answer: 'We offer end-to-end logistics plus onsite installation and configuration.' },
              { question: 'What about warranties and support?', answer: 'We register warranties and can coordinate RMA and vendor support on your behalf.' },
            ]}
          />
        </div>
      </section>
      <StickyCTA href="/contact" label="Get a Procurement Quote" />
    </div>
  );
};

export default ProcurementPage;
