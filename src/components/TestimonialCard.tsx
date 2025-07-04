
"use client";

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SIRCH SOLUTIONS KE transformed our IT infrastructure and provided exceptional support. Their expertise and professionalism are second to none.",
    author: "John Doe",
    title: "CEO of ExampleCorp"
  },
  {
    quote: "The cybersecurity awareness training was incredibly insightful. Our team is now much more equipped to handle phishing attacks.",
    author: "Jane Smith",
    title: "HR Manager at TechForward"
  },
  {
    quote: "Working with SIRCH SOLUTIONS KE on our new website was a fantastic experience. They delivered a high-quality product on time and on budget.",
    author: "Samuel Green",
    title: "Marketing Director at Innovate Inc."
  },
  {
    quote: "The IT consulting services we received were invaluable. We now have a clear roadmap for our digital transformation.",
    author: "Emily White",
    title: "COO of Global Solutions"
  }
];

const TestimonialCard = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    setCurrentTestimonial(testimonials[randomIndex]);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <Quote className="w-12 h-12 text-blue-600 mb-4" />
      <p className="text-xl text-gray-700 italic mb-6">{currentTestimonial.quote}</p>
      <div className="text-right">
        <p className="font-bold text-gray-800">- {currentTestimonial.author}</p>
        <p className="text-gray-500">{currentTestimonial.title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
