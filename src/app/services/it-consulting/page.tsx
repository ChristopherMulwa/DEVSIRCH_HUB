
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Briefcase, Settings, Phone } from 'lucide-react';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'IT Consulting & Technical Support | DEVSIRCH HUB',
  description: 'Strategic IT consulting and reliable technical support to optimize your technology investments and streamline your business operations.',
};

const ITConsultingPage = () => {
  const offerings = [
    {
      title: 'Strategic IT Planning',
      description: 'We align your technology roadmap with your business goals, ensuring your IT investments deliver maximum value and drive growth.',
      icon: <Briefcase className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Infrastructure Optimization',
      description: 'Our experts assess and enhance your current IT infrastructure for improved performance, scalability, and cost-efficiency.',
      icon: <Settings className="w-8 h-8 text-blue-500" />
    },
    {
      title: '24/7 Helpdesk Support',
      description: 'Get round-the-clock technical assistance from our dedicated support team to resolve issues quickly and minimize downtime.',
      icon: <Phone className="w-8 h-8 text-blue-500" />
    },
    {
        title: 'Cloud Services & Migration',
        description: 'We provide expert guidance on cloud strategy, migration, and management to help you leverage the power of the cloud.',
        icon: <CheckCircle className="w-8 h-8 text-blue-500" />
      },
  ];

  const benefits = [
    'Gain a competitive edge with a strategic technology plan.',
    'Improve operational efficiency and employee productivity.',
    'Reduce IT operational costs and complexity.',
    'Access a team of experienced IT professionals.',
    'Minimize business disruptions with reliable support.',
    'Scale your technology as your business grows.',
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
              { '@type': 'ListItem', position: 2, name: 'IT Consulting & Support', item: '/services/it-consulting' },
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
            name: 'IT Consulting & Support',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'IT Strategy, Optimization & Helpdesk',
            areaServed: 'KE',
          }),
        }}
      />

      <TrustSignals className="bg-gray-100 dark:bg-gray-800/40" />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image 
          src="/ITConsulting&SupportImage.png" 
          alt="IT professionals collaborating" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Expert IT Consulting & Support</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your trusted partner for strategic guidance and reliable technical assistance.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Optimize Your Technology</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Effective technology management is key to business success. DEVSIRCH HUB offers expert IT consulting and technical support to help you navigate the complexities of the digital landscape. We work with you to develop and implement IT strategies that enhance efficiency, reduce costs, and support your long-term goals.
            </p>
          </div>

          {/* Key Offerings */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Core Consulting & Support Services</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Key Benefits of Partnering With Us</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Ready to Elevate Your IT Strategy?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us handle the technology so you can focus on what you do best. Contact us today for a consultation.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
              Get in Touch
            </Link>
          </div>
          <FAQSection
            title="IT Consulting FAQs"
            items={[
              { question: 'Do you work with existing IT teams?', answer: 'Yes, we augment internal teams or provide end-to-end services depending on your needs.' },
              { question: 'What engagement models do you offer?', answer: 'Project-based, retainer, and fully managed support options are available.' },
              { question: 'Can you help with cloud migrations?', answer: 'Absolutely. We plan and execute migrations with minimal downtime and clear rollback plans.' },
            ]}
          />
        </div>
      </section>
      <StickyCTA href="/contact" label="Talk to an IT Consultant" />
    </div>
  );
};

export default ITConsultingPage;
