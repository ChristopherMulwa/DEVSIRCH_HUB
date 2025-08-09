
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Network, Server, Wifi } from 'lucide-react';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';

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

      <TrustSignals className="bg-gray-100 dark:bg-gray-800/40" />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image 
          src="/ICTInfrastructureSetupImage.png" 
          alt="Network servers in a data center" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">ICT Infrastructure Setup</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Building the foundation for your digital success.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Reliable & Scalable Infrastructure</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A robust ICT infrastructure is the backbone of any modern business. DEVSIRCH HUB provides end-to-end infrastructure solutions, from design and implementation to management and support. We ensure your technology foundation is secure, scalable, and aligned with your business objectives.
            </p>
          </div>

          {/* Key Offerings */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Infrastructure Services</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Key Benefits of Our Infrastructure Services</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Ready to Build a Better Infrastructure?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your infrastructure needs and learn how we can help you build a foundation for success.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
              Request an Assessment
            </Link>
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
