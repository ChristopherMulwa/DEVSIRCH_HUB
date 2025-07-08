
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import InteractiveServices from '@/components/InteractiveServices';

export const metadata: Metadata = {
  title: 'Our Services | SIRCH SOLUTIONS KE',
  description: 'Explore the wide range of IT services offered by SIRCH SOLUTIONS KE, from cybersecurity to custom software development.',
};

const testimonials = [
    {
      text: "SIRCH SOLUTIONS KE transformed our IT infrastructure. Their team is professional, knowledgeable, and dedicated. We've seen a significant improvement in our security posture since partnering with them.",
      author: 'John Doe',
      title: 'CEO, Tech Innovators',
      avatar: 'https://placehold.co/100x100/E2E8F0/4A5568',
    },
    {
      text: "The cybersecurity awareness training was a game-changer for our employees. The content was engaging and highly relevant. I highly recommend their services to any organization looking to bolster their defenses.",
      author: 'Jane Smith',
      title: 'HR Manager, Secure Corp',
      avatar: 'https://placehold.co/100x100/E2E8F0/4A5568',
    },
  ];
  

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/ServicesHero.png"
          alt="Abstract digital network"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Comprehensive IT Services</h1>
          <p className="text-lg md:text-xl text-gray-200">Your trusted partner in cybersecurity, development, and IT infrastructure.</p>
        </div>
      </section>

      <InteractiveServices />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                What kind of businesses do you work with?
                <ChevronDown className="h-6 w-6 text-gray-500" />
              </h3>
              <p className="text-gray-600 mt-4">We work with a diverse range of clients, from small startups to large enterprises, across various industries. Our solutions are tailored to meet the unique needs of each business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                How do you ensure the security of my data?
                <ChevronDown className="h-6 w-6 text-gray-500" />
              </h3>
              <p className="text-gray-600 mt-4">Security is at the core of everything we do. We employ industry-leading best practices, conduct regular security audits, and adhere to strict data privacy regulations to ensure your information is always protected.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                What is the process for starting a project with you?
                <ChevronDown className="h-6 w-6 text-gray-500" />
              </h3>
              <p className="text-gray-600 mt-4">Our process begins with a free consultation to understand your needs. From there, we develop a detailed proposal and project plan. Once approved, our team gets to work, providing regular updates until the project is successfully completed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8">Let's discuss how our IT solutions can help you achieve your goals.</p>
          <Link href="/contact" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-flex items-center shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
