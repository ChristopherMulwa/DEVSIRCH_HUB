"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';

// --- Testimonial Data ---
const testimonials = [
  {
    name: "John Mwangi",
    title: "CEO, TechSolutions Ltd.",
    image: "https://placehold.co/100x100/EBF4FF/333?text=JM",
    quote: "DEVSIRCH HUB transformed our security posture. Their cybersecurity awareness program was engaging and incredibly effective. We've seen a significant reduction in phishing incidents since their training."
  },
  {
    name: "Amina Hussein",
    title: "IT Manager, Creative Minds Inc.",
    image: "https://placehold.co/100x100/EBF4FF/333?text=AH",
    quote: "The IT consulting service was a game-changer. They optimized our infrastructure, leading to a 30% increase in efficiency. Their team is knowledgeable, responsive, and a pleasure to work with."
  },
  {
    name: "David Odhiambo",
    title: "Founder, O-Tech Startups",
    image: "https://placehold.co/100x100/EBF4FF/333?text=DO",
    quote: "The custom software they developed for us exceeded all expectations. It's scalable, secure, and has given us a real competitive edge. I highly recommend their development team."
  }
];

// --- Testimonial Card Component ---
const TestimonialCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col"
        >
          <div className="p-8 flex-grow">
            <MessageSquareQuote className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-6" />
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">&quot;{testimonial.quote}&quot;</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-6 mt-auto">
            <div className="flex items-center">
              <Image
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-500"
              />
              <div className="ml-4">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </div>
            </div>
            <div className="flex mt-4 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialCard;