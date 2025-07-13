"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What kind of IT services do you offer?",
    answer: "We offer a comprehensive range of IT solutions, including cybersecurity awareness, IT consulting, web and software development, ICT infrastructure setup, and equipment procurement. Our goal is to be your all-in-one partner for technology needs."
  },
  {
    question: "How can your cybersecurity services help my business?",
    answer: "Our cybersecurity services are designed to protect your business from the ground up. We provide employee training to prevent common threats, conduct penetration testing to find vulnerabilities, and offer digital forensics to investigate breaches, ensuring your digital assets are secure."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely. We tailor our services for businesses of all sizes, from individuals and SMEs to large corporate organizations. We believe every business deserves robust IT solutions and provide scalable services that grow with you."
  },
  {
    question: "What is the process for starting a web development project?",
    answer: "Our process begins with a free consultation to understand your vision and requirements. We then move to planning and design, followed by development, testing, and deployment. We ensure you are involved and informed at every stage of the project."
  },
  {
    question: "What are your future plans for tech training?",
    answer: "We are excited to be developing a range of professional tech training and online courses. These programs will cover in-demand skills in areas like cybersecurity, software development, and IT management, designed to empower the next generation of tech professionals in Kenya."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-6 focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 text-gray-600 dark:text-gray-300">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ModernFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep the first item open by default

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;