
"use client";

import { Landmark, ShieldCheck, BarChart, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GRCPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Landmark className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Governance, Risk & Compliance (GRC)
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate the complexities of the regulatory landscape, manage risks effectively, and ensure compliance with our expert GRC services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Integrated GRC for a Resilient Business
                </h2>
                <p className="text-gray-600 mb-4">
                  In today&apos;s rapidly evolving business environment, a reactive approach to governance, risk, and compliance is no longer sufficient. DEVSIRCH HUB provides a proactive, integrated GRC framework that aligns your IT infrastructure and operations with your business objectives.
                </p>
                <p className="text-gray-600">
                  Our holistic approach helps you break down silos, improve decision-making, and build a resilient organization that can thrive in the face of uncertainty.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-80 rounded-lg shadow-xl"
              >
                <Image
                  src="/FutureInitiativesHeroImage.png"
                  alt="GRC Strategy Session"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Core GRC Services */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Core GRC Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Governance */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <FileText className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Governance</h3>
                </div>
                <p className="text-gray-600">
                  We help you establish a robust governance framework that ensures your organization is directed and controlled effectively. This includes policy management, regulatory intelligence, and IT governance to align with your business strategy.
                </p>
              </motion.div>

              {/* Risk Management */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Risk Management</h3>
                </div>
                <p className="text-gray-600">
                  Our experts help you identify, assess, and mitigate risks across your organization. We provide comprehensive risk assessments, third-party risk management, and business continuity planning to protect your assets and reputation.
                </p>
              </motion.div>

              {/* Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <BarChart className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Stay ahead of regulatory changes with our compliance services. We offer compliance assessments, audit management, and continuous monitoring to ensure you meet industry standards and legal requirements, such as GDPR, HIPAA, and more.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Strengthen Your GRC Framework Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let us help you build a resilient and compliant organization. Contact us for a consultation to discuss your GRC needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 inline-flex items-center"
            >
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GRCPage;
