"use client";

import { useState, useMemo } from 'react';
import { ChevronDown, Search, ThumbsUp, ThumbsDown } from 'lucide-react';

// --- Data ---
const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What kind of businesses do you work with?',
        a: 'We partner with a diverse range of clients, from ambitious startups to established enterprises, across various industries. Our solutions are always tailored to meet the unique operational and strategic needs of each business.',
      },
      {
        q: 'What makes DEVSIRCH HUB different from other IT providers?',
        a: 'Our core difference lies in our partnership approach. We don\'t just provide services; we integrate with your team to understand your long-term goals. We combine deep expertise in cybersecurity with proactive IT strategy to drive growth and mitigate risk.',
      },
    ],
  },
  {
    category: 'Services & Process',
    questions: [
      {
        q: 'What is the process for starting a project with you?',
        a: 'Our process begins with a free, no-obligation consultation to understand your challenges and goals. We then develop a detailed proposal and project plan. Once approved, our team gets to work, providing transparent updates until the project is successfully delivered.',
      },
      {
        q: 'Do you offer custom software development?',
        a: 'Yes. Beyond website development, we build custom software solutions, from internal business applications to specialized customer-facing platforms, designed to streamline your operations and create new opportunities.',
      },
      {
        q: 'Can you help us procure IT equipment?',
        a: 'Absolutely. Our ICT Equipment Procurement service ensures you get the right hardware and software at competitive prices. We handle the entire process, from needs analysis and sourcing to installation and configuration.',
      },
    ],
  },
  {
    category: 'Security',
    questions: [
      {
        q: 'How do you ensure the security of my company\'s data?',
        a: 'Security is at the core of everything we do. We employ a multi-layered strategy, including industry-leading best practices, regular vulnerability assessments, 24/7 monitoring, and strict adherence to data privacy regulations to ensure your information is always protected.',
      },
      {
        q: 'Do you offer cybersecurity awareness training for our employees?',
        a: 'Yes, we believe the human element is a critical part of security. We provide comprehensive cybersecurity awareness training to equip your staff with the knowledge to identify and prevent threats like phishing and social engineering.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of IT support do you offer?',
        a: 'We offer flexible IT support packages, from on-demand troubleshooting to fully managed IT services. Our goal is to provide proactive maintenance and rapid response to keep your systems running smoothly and minimize downtime.',
      },
      {
        q: 'What are your support hours?',
        a: 'Our standard support hours are from 8 AM to 5 PM on weekdays. We also offer extended and 24/7 support plans for businesses with critical operational needs.',
      },
    ],
  },
];

// --- Helper Components ---
const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last-of-type:border-b-0">
    <button
      onClick={onToggle}
      className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        {faq.q}
      </h3>
      <ChevronDown
        className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
          isOpen ? 'transform rotate-180' : ''
        }`}
      />
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="p-6 pt-0 text-gray-700 leading-relaxed">
          <p>{faq.a}</p>
          <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-4">
            <span className="text-sm text-gray-600">Was this helpful?</span>
            <button className="p-1.5 rounded-full hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
              <ThumbsUp className="h-5 w-5 text-gray-500 hover:text-green-600" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
              <ThumbsDown className="h-5 w-5 text-gray-500 hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const ModernFAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) {
      return faqData.find(cat => cat.category === activeCategory)?.questions || [];
    }
    return faqData
      .flatMap(cat => cat.questions.map(q => ({ ...q, category: cat.category })))
      .filter(faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, activeCategory]);

  const handleToggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>

          {!searchTerm && (
            <div className="flex justify-center flex-wrap gap-2 mb-10">
              {faqData.map(cat => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setOpenFaqIndex(null); // Close open FAQ when changing category
                  }}
                  className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                    activeCategory === cat.category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.category}
                </button>
              ))
            }
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  onToggle={() => handleToggleFaq(index)}
                />
              ))
            ) : (
              <div className="p-8 text-center text-gray-600">
                <p className="font-semibold">No questions found.</p>
                <p>Try adjusting your search term or select a different category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;
