"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Eye, ShieldOff, BarChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Penetration Testing',
    description: 'Simulate real-world attacks to identify vulnerabilities in your systems before malicious actors do.',
    icon: <ShieldOff className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Network Security Assessments',
    description: 'We analyze your network architecture and configurations to identify weaknesses and ensure your infrastructure is secure.',
    icon: <BarChart className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Digital Forensics & Incident Response',
    description: 'In the event of a breach, our experts conduct detailed forensic analysis to understand the attack and contain the damage.',
    icon: <Zap className="w-8 h-8 text-blue-400" />
  },
  {
      title: 'Cybersecurity Awareness Training',
      description: 'Empower your employees to be the first line of defense with training on phishing, social engineering, and more.',
      icon: <Eye className="w-8 h-8 text-blue-400" />
    },
];

const processSteps = [
  {
    title: '1. Discovery & Assessment',
    description: 'We start by understanding your business and identifying critical assets and potential threats through comprehensive audits.'
  },
  {
    title: '2. Strategy & Remediation',
    description: 'Based on our findings, we develop a tailored security strategy and implement robust solutions to remediate vulnerabilities.'
  },
  {
    title: '3. Monitoring & Response',
    description: 'We provide continuous monitoring of your systems to detect and respond to threats in real-time, ensuring ongoing protection.'
  }
];

const CybersecurityClientPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center text-center">
        <Image 
          src="/cybersecurityServicehero.png" 
          alt="Abstract high-tech cybersecurity background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Cybersecurity for the Modern Enterprise</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">Proactive, intelligent, and comprehensive solutions to protect your digital assets from evolving threats.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-base sm:text-lg text-gray-400 mb-4">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 opacity-60">
            <p className="font-semibold text-sm sm:text-base">Placeholder Inc.</p>
            <p className="font-semibold text-sm sm:text-base">Innovate Corp.</p>
            <p className="font-semibold text-sm sm:text-base">Secure Solutions</p>
            <p className="font-semibold text-sm sm:text-base">Tech Giants</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Why It Matters Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">The High Stakes of Digital Security</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              In today&apos;s interconnected world, a single vulnerability can lead to devastating financial and reputational damage. Proactive cybersecurity is not just an IT issue—it&apos;s a fundamental business requirement for protecting your data, your customers, and your future.
            </p>
          </div>

          {/* Bento Box for Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700 shadow-lg hover:border-blue-500 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">{offering.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{offering.title}</h3>
                    <p className="text-gray-400 text-base sm:text-lg">{offering.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Process Section */}
          <div className="mt-20 md:mt-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Our Protection Process</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 pl-12 md:pl-0"
                >
                  <div className="md:flex items-center">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                      <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full border-4 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-base sm:text-lg">{step.description}</p>
                    </div>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 md:mt-24 text-center bg-gray-800 p-8 md:p-12 rounded-lg border border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Fortify Your Business?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                                                        Don&apos;t wait for a threat to become a crisis. Let&apos;s build a resilient security strategy for your organization together.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-base sm:text-lg">
              Get a Free Security Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityClientPage;
