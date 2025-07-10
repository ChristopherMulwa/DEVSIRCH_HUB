"use client";

import { useModal } from '@/context/ModalContext';
import { ArrowRight, Check, Mail, Building, Users, BarChart, ShieldCheck, MessageSquareQuote } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

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
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('Success! You\'re on the list.');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus(data.message || 'An error occurred.');
      }
    } catch (error) {
      setStatus('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
        <p className="font-bold text-lg text-gray-800">Be the first to know.</p>
        <p className="text-sm text-gray-600 mb-4">Get early access, launch discounts, and free resources.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your business email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button type="submit" disabled={isLoading} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:bg-blue-400 flex-shrink-0">
                {isLoading ? '...' : 'Get Early Access'}
            </button>
        </form>
        {status && <p className="text-sm text-center mt-3 font-medium">{status}</p>}
    </div>
  );
};


// --- Main Page Component ---
const NewFuturePage = () => {
  const { openModal } = useModal();

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative bg-gray-900 text-white text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
            <Image src="/homepagehero.png" alt="Abstract background" layout="fill" objectFit="cover" className="opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Future of Your Business Starts Here.</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            Discover the upcoming services designed to give you an unfair advantage in security, efficiency, and growth. Be the first to benefit.
          </p>
        </div>
      </section>

      {/* 2. Initiative #1: SIRCH Academy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">The SIRCH Academy</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Unlock Your Team's Potential.</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're building a premier learning destination to transform your employees from a potential risk into your strongest security asset. Move beyond simple compliance and foster a true culture of security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">Expert-Led Courses:</span> Master cybersecurity, development, and cloud concepts.</span></li>
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">Actionable Training:</span> Go from theory to practice with hands-on labs and real-world scenarios.</span></li>
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">Flexible Learning:</span> On-demand modules designed to fit the schedules of busy professionals.</span></li>
              </ul>
              <EarlyAccessForm />
            </div>
            <div className="order-1 md:order-2">
                <Image src="/CybersecurityAwarenessImage.png" alt="Mockup of SIRCH Academy dashboard" width={600} height={450} className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Initiative #2: Procurement Desk */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Image src="/ICTEquipmentProcurementImage.png" alt="Illustration of a seamless supply chain" width={600} height={450} className="rounded-xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Strategic Procurement Desk</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Procurement, Perfected.</h3>
              <p className="text-lg text-gray-600 mb-6">
                Navigating the complexities of ICT procurement and government tenders is a full-time job. Let us handle it for you. We provide a transparent, reliable, and strategic partnership to ensure you get the best value and the right technology, every time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">Expert Tender Navigation:</span> Increase your success rate with our specialized guidance.</span></li>
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">Tier-1 Equipment Access:</span> Leverage our network for competitive pricing on top-tier hardware and software.</span></li>
                <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span><span className="font-semibold">End-to-End Reliability:</span> From sourcing to delivery and installation, we manage the entire lifecycle.</span></li>
              </ul>
              <button onClick={() => openModal('Strategic Procurement Desk')} className="bg-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 text-lg inline-flex items-center shadow-lg">
                Become a Preferred Partner <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Trust Section */}
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Our Vision?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Our initiatives are led by seasoned professionals with a deep understanding of the technology landscape and a passion for client success.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                  <div className="text-center">
                      <Image src="https://placehold.co/128x128/000/FFF?text=CM" alt="Headshot of Christopher Mulwa" width={128} height={128} className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                      <h3 className="text-xl font-bold">Christopher Mulwa</h3>
                      <p className="text-blue-600 font-semibold">Founder & Lead Strategist</p>
                      <p className="text-gray-600 max-w-xs mx-auto mt-2">A certified cybersecurity expert dedicated to building secure and resilient digital futures for our partners.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Horizon Section */}
      <section className="py-16 text-center">
          <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-gray-500 tracking-widest uppercase mb-6">On The Horizon</h3>
              <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap text-gray-700 font-semibold text-lg">
                  <span>Managed SOC Services</span>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <span>AI-Powered Business Analytics</span>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <span>IoT Solutions</span>
              </div>
          </div>
      </section>
    </div>
  );
};

export default NewFuturePage;
