
import type { Metadata } from 'next';

import { CheckCircle, Network, Server, Wifi } from 'lucide-react';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'ICT Infrastructure Setup | DEVSIRCH HUB',
  description: 'Robust and scalable ICT infrastructure solutions. We design, implement, and manage networks, servers, and data centers to support your business operations.',
};

const InfrastructurePage = () => {
  const offerings = [
    {
      title: 'Network Design & Implementation',
      description: 'We create secure, high-performance networks tailored to your needs, from local area networks (LAN) to wide area networks (WAN).',
      icon: <Network className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Server & Storage Solutions',
      description: 'We provide and configure server and storage solutions that are scalable, reliable, and optimized for your workloads.',
      icon: <Server className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Wireless Network Solutions',
      description: 'We design and deploy secure and reliable wireless networks to provide seamless connectivity across your organization.',
      icon: <Wifi className="w-8 h-8 text-blue-500" />
    },
    {
        title: 'Data Center Management',
        description: 'We offer comprehensive data center services, including design, management, and optimization, to ensure business continuity.',
        icon: <CheckCircle className="w-8 h-8 text-blue-500" />
      },
  ];

  const benefits = [
    'Get a reliable and high-performance ICT infrastructure.',
    'Improve business continuity and disaster recovery capabilities.',
    'Reduce IT operational costs and complexity.',
    'Enhance the security of your network and data.',
    'Scale your infrastructure as your business grows.',
    'Gain a competitive advantage with modern technology.',
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
              { '@type': 'ListItem', position: 2, name: 'ICT Infrastructure Setup', item: '/services/ict-infrastructure-setup' },
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
            name: 'ICT Infrastructure Setup',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'Network, Server & Wireless Infrastructure',
            areaServed: 'KE',
          }),
        }}
      />

      <TrustSignals className="bg-gray-100 dark:bg-gray-800/40" variant="infrastructure" />
      {/* New Header Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">ICT Infrastructure Setup</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Building the foundation for your digital success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Reliable & Scalable Infrastructure</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A robust ICT infrastructure is the backbone of any modern business. DEVSIRCH HUB provides end-to-end infrastructure solutions, from design and implementation to management and support. We ensure your technology foundation is secure, scalable, and aligned with your business objectives.
              </p>
            </Reveal>
          </div>

          {/* Key Offerings */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Infrastructure Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {offerings.map((offering, idx) => (
                <Reveal key={offering.title} delay={0.05 * idx}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                    <div className="flex-shrink-0 mr-6">{offering.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{offering.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{offering.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
            <div className="mt-20 bg-gray-100 dark:bg-gray-800 p-12 rounded-lg">
              <Reveal>
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Key Benefits of Our Infrastructure Services</h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
                {benefits.map((benefit, idx) => (
                  <Reveal key={benefit} delay={0.05 * idx}>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 dark:text-gray-200">{benefit}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Ready to Build a Better Infrastructure?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your infrastructure needs and learn how we can help you build a foundation for success.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
                Request an Assessment
              </Link>
            </Reveal>
          </div>
          <FAQSection
            title="Infrastructure FAQs"
            items={[
              { question: 'Do you support on-prem and cloud?', answer: 'Yes. We design hybrid architectures across on-prem, private and public cloud.' },
              { question: 'Can you work after-hours to minimize downtime?', answer: 'We schedule maintenance windows and phased cutovers to reduce impact.' },
              { question: 'Do you provide documentation and training?', answer: 'We deliver runbooks, network diagrams, and handover sessions as standard.' },
            ]}
          />
        </div>
      </section>
      <StickyCTA href="/contact" label="Plan My Infrastructure" />
    </div>
  );
};

export default InfrastructurePage;
