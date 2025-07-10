
"use client";

import { useModal } from '@/context/ModalContext';
import { ArrowRight, ShieldCheck, BarChart, MessageSquareQuote } from 'lucide-react';

const ModernCTA = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                <span className="block">Ready to Elevate Your Business?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
                Let's build a secure, efficient, and scalable IT foundation for your future. Our initial consultation is always free, with no obligation. We're here to listen to your challenges and chart a path to success.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <BarChart className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">Strategic Roadmapping:</span> A clear, actionable plan for your IT future.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">Expert Security Insights:</span> Uncover and mitigate your most critical risks.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MessageSquareQuote className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">No-Obligation Quote:</span> Understand your options, completely pressure-free.
                  </p>
                </li>
              </ul>
              <button
                onClick={() => openModal('a free consultation')}
                className="mt-10 inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform hover:scale-105 shadow-lg"
              >
                Get a Free Consultation
                <ArrowRight className="ml-3 -mr-1 h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="relative aspect-w-16 aspect-h-9 lg:aspect-none h-64 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="A team of professionals collaborating"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent"></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
