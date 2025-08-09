"use client";

import { useState } from 'react';
import { Landmark, ShieldCheck, BarChart, FileText, ArrowRight, CheckCircle, Users, TrendingUp, AlertTriangle, ClipboardCheck, ClipboardList } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import OutcomesGrid from '@/components/OutcomesGrid';
import ProcessSteps from '@/components/ProcessSteps';

const GRCClientPage = () => {
  const [activeTab, setActiveTab] = useState<'governance' | 'risk' | 'compliance'>('governance');

  const tabContent = {
    governance: {
      title: 'Robust Governance Frameworks',
      description:
        'We establish clear governance structures that align with your business objectives, ensuring accountability, transparency, and strategic alignment across your organization.',
      features: [
        { icon: <Icon><FileText /></Icon>, text: 'Policy & Procedure Development' },
        { icon: <Icon><Landmark /></Icon>, text: 'Roles, Committees & Reporting' },
        { icon: <Icon><TrendingUp /></Icon>, text: 'Performance & Risk Monitoring' },
      ],
    },
    risk: {
      title: 'Proactive Risk Management',
      description:
        'Our experts help you identify, assess, and mitigate risks before they impact your business. We provide a comprehensive view of your risk landscape to enable informed decision-making.',
      features: [
        { icon: <Icon><AlertTriangle /></Icon>, text: 'Enterprise Risk Assessments' },
        { icon: <Icon><BarChart /></Icon>, text: 'Third-Party Risk Analysis' },
        { icon: <Icon><CheckCircle /></Icon>, text: 'Business Continuity Planning' },
      ],
    },
    compliance: {
      title: 'Assured Regulatory Compliance',
      description:
        'Stay ahead of the complex and ever-changing regulatory landscape. We help you meet your compliance obligations, from data privacy laws like GDPR to industry-specific standards.',
      features: [
        { icon: <Icon><ClipboardCheck /></Icon>, text: 'Compliance Program Development' },
        { icon: <Icon><ShieldCheck /></Icon>, text: 'Regulatory Gap Analysis' },
        { icon: <Icon><ClipboardList /></Icon>, text: 'Audit & Assurance Support' },
      ],
    },
  } as const;

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-black text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm p-2 rounded-full self-start w-fit mb-4">
              <Landmark className="w-8 h-8 mr-2 text-blue-300" />
              <h2 className="text-lg font-semibold">Governance, Risk & Compliance</h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Achieve Clarity and Control in a Complex World
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We provide integrated GRC solutions to help you navigate risks, meet compliance demands, and govern with confidence.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/cybersecurityServicehero.png"
            alt="Abstract GRC background"
            fill
            className="opacity-20 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Interactive "Our Approach" Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">A Modern Approach to GRC</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We integrate Governance, Risk, and Compliance into a unified strategy that drives business resilience and performance.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Tabs for navigation */}
            <div className="flex md:flex-col md:w-1/3 justify-center md:justify-start">
              {Object.keys(tabContent).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg font-semibold flex items-center space-x-3 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {key === 'governance' && <FileText />}
                  {key === 'risk' && <ShieldCheck />}
                  {key === 'compliance' && <BarChart />}
                  <span className="capitalize">{key}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{tabContent[activeTab].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">{tabContent[activeTab].description}</p>
                  <div className="space-y-4">
                    {tabContent[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="bg-blue-600 rounded-full p-2 mr-4">
                          {feature.icon}
                        </div>
                        <span className="text-lg font-medium text-gray-800 dark:text-gray-100">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <OutcomesGrid
        items={[
          { label: 'Audit Prep Time', value: '-40%' },
          { label: 'Policy Coverage', value: '+100%' },
          { label: 'Control Gaps', value: '-60%' },
          { label: 'Risk Visibility', value: '+3x' },
          { label: 'Time to Remediate', value: '-35%' },
          { label: 'Stakeholder Confidence', value: '+2x' },
        ]}
        subtitle="Examples of improvements our clients typically see after standard engagements"
      />

      <ProcessSteps
        title="How We Engage"
        steps={[
          { title: 'Discovery & Current-State Assessment', description: 'Workshops, artifact review, and stakeholder interviews to map capabilities and risk posture.' },
          { title: 'Gap Analysis & Roadmap', description: 'Prioritized action plan aligned to frameworks and business priorities.' },
          { title: 'Implementation & Enablement', description: 'Policy/process updates, control rollout, training, and tooling where appropriate.' },
          { title: 'Measure & Improve', description: 'KPIs, dashboards, and periodic reviews to sustain and evolve the program.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Strengthen Your GRC Framework Today</h2>
              <p className="text-blue-100 text-lg mb-8">
                Let us help you build a resilient and compliant organization. Contact us for a consultation to discuss your GRC needs and get a tailored strategy.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-flex items-center shadow-lg"
              >
                Get a Free Consultation <ArrowRight className="ml-3" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hidden md:block"
            >
              <Image
                src="/FutureInitiativesHeroImage.png"
                alt="GRC professional at work"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GRCClientPage;


