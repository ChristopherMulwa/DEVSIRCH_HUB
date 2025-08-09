
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Code, Smartphone, Server } from 'lucide-react';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Website & Software Development | DEVSIRCH HUB',
  description: 'Custom website and software solutions tailored to your business needs. We build high-performance, scalable, and secure applications to drive your business forward.',
};

const DevelopmentPage = () => {
  const offerings = [
    {
      title: 'Custom Web Development',
      description: 'From marketing sites to complex web applications, we build responsive, and user-friendly websites that deliver results.',
      icon: <Code className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Mobile App Development',
      description: 'Engage your customers with intuitive and powerful mobile applications for both iOS and Android platforms.',
      icon: <Smartphone className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Enterprise Software Solutions',
      description: 'We develop robust, scalable, and secure enterprise software to automate your business processes and improve efficiency.',
      icon: <Server className="w-8 h-8 text-blue-500" />
    },
    {
        title: 'E-commerce Platforms',
        description: 'We build feature-rich e-commerce solutions that provide a seamless shopping experience and drive online sales.',
        icon: <CheckCircle className="w-8 h-8 text-blue-500" />
      },
  ];

  const benefits = [
    'Get a solution perfectly tailored to your unique requirements.',
    'Enhance your online presence and brand identity.',
    'Automate workflows and increase operational efficiency.',
    'Gain a competitive advantage with innovative technology.',
    'Ensure scalability to support your business growth.',
    'Benefit from a secure and reliable application.',
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
              { '@type': 'ListItem', position: 2, name: 'Website & Software Development', item: '/services/website-and-software-development' },
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
            name: 'Website & Software Development',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'Web, Mobile & Enterprise Applications',
            areaServed: 'KE',
          }),
        }}
      />

      <TrustSignals className="bg-gray-100 dark:bg-gray-800/40" />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image 
          src="/Website&SoftwareDevelopmentImage.png" 
          alt="Code on a screen" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Website & Software Development</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Bringing your ideas to life with custom-built digital solutions.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Innovative Digital Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              In a digital-first world, a powerful online presence is essential. DEVSIRCH HUB specializes in creating custom websites and software applications that are not only visually stunning but also highly functional and secure. We work closely with you to understand your vision and deliver a product that exceeds your expectations.
            </p>
          </div>

          {/* Key Offerings */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Development Services</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Key Benefits of Our Development Services</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Have a Project in Mind?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and how we can turn them into a reality. Contact us today for a free consultation and quote.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
              Start Your Project
            </Link>
          </div>
          <FAQSection
            title="Development FAQs"
            items={[
              { question: 'What is your typical project timeline?', answer: 'MVPs often take 4–8 weeks. Timelines vary by scope, integrations, and approvals.' },
              { question: 'Do you provide maintenance?', answer: 'Yes, we offer support and maintenance SLAs after launch.' },
              { question: 'What tech stacks do you use?', answer: 'We use modern stacks tailored to needs; for web, React/Next.js, Node, and cloud-native services.' },
            ]}
          />
        </div>
      </section>
      <StickyCTA href="/contact" label="Start Your Project" />
    </div>
  );
};

export default DevelopmentPage;
