"use client";

import { useModal } from '@/context/ModalContext';
import { ArrowRight, Mail, Zap, GraduationCap, Briefcase, Shield, BarChart, Wind } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveTimeline from '@/components/InteractiveTimeline';

// --- Timeline Data ---
const timelineEvents = [
  {
    year: "Q3 2025",
    title: "Launch of Strategic Procurement Desk",
    description: "Official rollout of our partnership program for transparent and efficient ICT procurement and tender navigation."
  },
  {
    year: "Q4 2025",
    title: "SIRCH Academy: Early Access Program",
    description: "Inviting our first cohort of students to experience our cutting-edge cybersecurity and cloud engineering courses."
  },
  {
    year: "Q1 2026",
    title: "Introduction of Managed SOC Services",
    description: "Launching our Security Operations Center as a service to provide 24/7 threat monitoring and response for our clients."
  },
  {
    year: "Q2 2026",
    title: "Expansion into AI-Powered Business Analytics",
    description: "Introducing a new suite of services focused on leveraging AI and machine learning for actionable business insights."
  }
];

// --- Early Access Form Component ---
const EarlyAccessForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          subject: 'New Early Access Signup for SIRCH Academy',
          message: `${email} has signed up for early access.`
        }),
      });
      if (response.ok) {
        setStatus('Success! You are on the list.');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus(data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Early access submission error:', error);
      setStatus('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-200/50">
        <p className="font-bold text-lg text-gray-900">Be the First to Know</p>
        <p className="text-sm text-gray-700 mb-4">Get launch updates, early access discounts, and free resources.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500"
                />
            </div>
            <button type="submit" disabled={isLoading} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:bg-blue-400 flex-shrink-0 shadow-lg hover:shadow-blue-500/50">
                {isLoading ? 'Joining...' : 'Get Early Access'}
            </button>
        </form>
        {status && <p className="text-sm text-center mt-3 font-medium text-gray-800">{status}</p>}
    </motion.div>
  );
};


// --- Main Page Component ---
const NewFuturePage = () => {
  const { openModal } = useModal();

  return (
    <div className="bg-gray-900 text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black z-10 opacity-80"></div>
        <Image src="/FutureInitiativesHeroImage.png" alt="Digital network connections" layout="fill" objectFit="cover" className="z-0 opacity-30" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto px-4 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            Innovating for Tomorrow
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            We are not just keeping pace; we are setting it. Discover our upcoming initiatives designed to propel your business into the future of technology and security.
          </p>
        </motion.div>
      </section>

      {/* 2. Interactive Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Roadmap to the Future</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Follow our journey as we roll out transformative services and partnerships.</p>
          </div>
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </section>

      {/* 3. Initiative Spotlight: SIRCH Academy */}
      <section className="py-20 md:py-28 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1">
              <div className="inline-flex items-center bg-blue-500/10 text-blue-300 rounded-full px-4 py-1 mb-4 font-semibold">
                <GraduationCap className="w-5 h-5 mr-2" />
                Coming Soon: Q4 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">The SIRCH Academy</h2>
              <p className="text-lg text-gray-300 mb-6">
                Closing the skills gap is no longer optional. The SIRCH Academy is our commitment to fostering the next generation of tech talent in Kenya, offering hands-on, certified training in the most in-demand fields.
              </p>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start"><Shield className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" /><span><span className="font-semibold">Cybersecurity Defense:</span> From ethical hacking to threat intelligence, become a certified security professional.</span></div>
                <div className="flex items-start"><BarChart className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" /><span><span className="font-semibold">Data & AI Analytics:</span> Master data science, machine learning, and AI implementation to drive business value.</span></div>
                <div className="flex items-start"><Wind className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" /><span><span className="font-semibold">Cloud Engineering:</span> Gain expertise in AWS, Azure, and GCP to build and manage scalable cloud infrastructure.</span></div>
              </div>
              <EarlyAccessForm />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2 flex justify-center">
                <Image src="/CybersecurityAwarenessImage.png" alt="Students learning in a modern classroom" width={550} height={550} className="rounded-2xl shadow-2xl shadow-blue-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Initiative Spotlight: Strategic Procurement */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center">
              <Image src="/ICTEquipmentProcurementImage.png" alt="Seamless supply chain logistics" width={550} height={550} className="rounded-2xl shadow-2xl shadow-teal-500/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center bg-teal-500/10 text-teal-300 rounded-full px-4 py-1 mb-4 font-semibold">
                <Briefcase className="w-5 h-5 mr-2" />
                Partnerships Open Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Strategic Procurement Desk</h2>
              <p className="text-lg text-gray-300 mb-8">
                Simplify your supply chain and gain a competitive edge in tendering. Our procurement desk offers a transparent, efficient, and cost-effective way to acquire ICT assets and win major contracts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-center">
                <div className="bg-gray-800 p-6 rounded-lg"><h3 className="text-2xl font-bold text-teal-400">15%+</h3><p className="text-gray-400">Average Cost Savings</p></div>
                <div className="bg-gray-800 p-6 rounded-lg"><h3 className="text-2xl font-bold text-teal-400">40%</h3><p className="text-gray-400">Increased Tender Success Rate</p></div>
              </div>
              <button onClick={() => openModal('Strategic Procurement Partnership')} className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 transition-all duration-300 text-lg inline-flex items-center justify-center shadow-lg hover:shadow-teal-500/40">
                Become a Partner <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking to upskill your team, streamline procurement, or simply stay ahead of the curve, let&apos;s connect. Our future initiatives are your future advantages.
          </p>
          <button onClick={() => openModal('General Inquiry about Future Initiatives')} className="bg-white text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 text-lg inline-flex items-center shadow-2xl">
            Contact Us Today <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewFuturePage;
