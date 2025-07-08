"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/homepagehero.png"
          alt="A modern office with a team collaborating"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowering Your Digital Future with Secure IT Solutions</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">From cybersecurity to custom software, we are your trusted partner in technology.</p>
          <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 text-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <ShieldCheck className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Cybersecurity Awareness</h3>
              <p className="text-gray-600 text-center mb-6">Protect your organization from the latest cyber threats with our expert training and assessments.</p>
              <Link href="/services/cybersecurity" className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            {/* Service 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <Briefcase className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">IT Consulting & Support</h3>
              <p className="text-gray-600 text-center mb-6">Get strategic guidance and reliable technical support to optimize your IT infrastructure.</p>
              <Link href="/services/it-consulting" className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            {/* Service 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <Code className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Website & Software Development</h3>
              <p className="text-gray-600 text-center mb-6">We build custom websites and software solutions to meet your unique business needs.</p>
              <Link href="/services/development" className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            {/* Service 4 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <Network className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">ICT Infrastructure Setup</h3>
              <p className="text-gray-600 text-center mb-6">We design and implement robust and scalable ICT infrastructure for your organization.</p>
              <Link href="/services/infrastructure" className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            {/* Service 5 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <ShoppingCart className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">ICT Equipment Procurement</h3>
              <p className="text-gray-600 text-center mb-6">We procure and deliver a wide range of ICT equipment to meet your needs.</p>
              <Link href="/services/procurement" className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            {/* Explore All Services */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-white text-center transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6">Explore All Our Services</h3>
              <Link href="/services" className="bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 flex items-center shadow-md">
                Learn More <ArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner with SIRCH SOLUTIONS KE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full p-4 mb-4">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Unmatched Security</h3>
              <p className="text-gray-300">We safeguard your digital assets with cutting-edge cybersecurity solutions, ensuring your business stays protected.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full p-4 mb-4">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Tailored IT Strategies</h3>
              <p className="text-gray-300">Our experts provide strategic IT consulting to optimize your infrastructure and drive business growth.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full p-4 mb-4">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom-Built Solutions</h3>
              <p className="text-gray-300">We develop bespoke software and websites that are perfectly aligned with your unique business objectives.</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link href="/about" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition duration-300 text-lg">
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">What Our Clients Say</h2>
          <TestimonialCard />
        </div>
      </section>

      {/* General CTA */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Your Digital Future, Together</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">Ready to secure and scale your business? We provide the expertise and solutions to help you achieve your goals.</p>
          <Link href="/contact" className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 text-lg inline-flex items-center shadow-lg">
            Get a Free Consultation <ArrowRight className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}