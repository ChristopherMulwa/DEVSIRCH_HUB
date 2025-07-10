
"use client";

import ModernCTA from '@/components/ModernCTA';
import Image from 'next/image';
import InteractiveServices from '@/components/InteractiveServices';
import ModernFAQ from '@/components/ModernFAQ';

const ServicesPage = () => {
  // FAQ data for schema markup
  const faqsForSchema = [
    {
      "@type": "Question",
      "name": "What kind of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We partner with a diverse range of clients, from ambitious startups to established enterprises, across various industries. Our solutions are always tailored to meet the unique operational and strategic needs of each business."
      }
    },
    {
      "@type": "Question",
      "name": "What is the process for starting a project with you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our process begins with a free, no-obligation consultation to understand your challenges and goals. We then develop a detailed proposal and project plan. Once approved, our team gets to work, providing transparent updates until the project is successfully delivered."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure the security of my company's data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security is at the core of everything we do. We employ a multi-layered strategy, including industry-leading best practices, regular vulnerability assessments, 24/7 monitoring, and strict adherence to data privacy regulations to ensure your information is always protected."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of IT support do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer flexible IT support packages, from on-demand troubleshooting to fully managed IT services. Our goal is to provide proactive maintenance and rapid response to keep your systems running smoothly and minimize downtime."
      }
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsForSchema
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/ServicesHero.png"
            alt="Abstract digital network"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Comprehensive IT Services</h1>
            <p className="text-lg md:text-xl text-gray-200">Your trusted partner in cybersecurity, development, and IT infrastructure.</p>
          </div>
        </section>

        <InteractiveServices />

        <ModernFAQ />

        <ModernCTA />
      </div>
    </>
  );
};

export default ServicesPage;
