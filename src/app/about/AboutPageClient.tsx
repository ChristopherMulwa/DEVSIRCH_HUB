"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaBullseye, FaEye, FaHandshake, FaUsers, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import ValueCard from '@/components/ValueCard';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 'January 2025',
    title: 'The Idea Takes Shape',
    description: 'After months of market research, our founder finalized the business plan for an IT solutions company that would prioritize innovation and client success in the Kenyan market.',
  },
  {
    year: 'March 2025',
    title: 'DEVSIRCH HUB is Founded',
    description: 'We officially registered as a company, laying the groundwork for our future operations with a clear vision and mission.',
  },
  {
    year: 'May 2025',
    title: 'Our Digital Doors Open',
    description: 'We launched our official website and were thrilled to sign our very first client, marking the beginning of our journey.',
  },
  {
    year: 'July 2025',
    title: 'Building Momentum',
    description: 'Focused on delivering exceptional service, we successfully completed our initial projects and began to build a reputation for reliability and expertise.',
  },
  {
    year: 'The Future',
    title: 'Growth and Innovation Ahead',
    description: 'We are actively expanding our service offerings, with a strong focus on introducing new, cutting-edge solutions to the market.',
  },
];

const values = [
  {
    icon: <FaLightbulb className="text-5xl text-blue-500 mb-4" />,
    title: 'Innovation',
    description: 'We constantly seek new and better ways to solve problems, embracing creativity and forward-thinking to deliver cutting-edge solutions.',
  },
  {
    icon: <FaHandshake className="text-5xl text-blue-500 mb-4" />,
    title: 'Reliability',
    description: 'We are committed to being a dependable partner, delivering on our promises and ensuring our clients can trust in our solutions.',
  },
  {
    icon: <FaUsers className="text-5xl text-blue-500 mb-4" />,
    title: 'Client-Centricity',
    description: 'Our clients are at the heart of everything we do. We listen, we understand, and we tailor our solutions to meet their unique needs.',
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-500 mb-4" />,
    title: 'Security',
    description: 'We prioritize the security and integrity of our clients\' data and systems, adhering to the highest standards of cybersecurity.',
  },
  {
    icon: <FaBullseye className="text-5xl text-blue-500 mb-4" />,
    title: 'Integrity',
    description: 'We operate with honesty and transparency, building relationships based on trust and ethical principles.',
  },
  {
    icon: <FaEye className="text-5xl text-blue-500 mb-4" />,
    title: 'Expertise',
    description: 'We are a team of seasoned professionals, dedicated to maintaining the highest level of knowledge and skill in our field.',
  },
];

const AboutPageClient = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/AboutUsHero.png"
          alt="About Us Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold">We are DEVSIRCH HUB</h1>
          <p className="mt-4 text-xl">Your Trusted Partner in Innovative IT Solutions</p>
        </motion.div>
      </section>

      {/* Meet the Founder Section */}
      <section className="pt-8 pb-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Meet the Founder</h2>
            <p className="text-gray-600 mt-2">The driving force behind our vision.</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/3">
              <Image
                src="https://placehold.co/400x400/000000/FFFFFF?text=CM"
                alt="Christopher Mulwa"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full md:w-2/3 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900">Christopher Mulwa</h3>
              <p className="text-blue-600 font-semibold mt-1">Founder & Principal IT Consultant</p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                &quot;I started DEVSIRCH HUB with a single mission: to provide businesses in Kenya with the robust, secure, and innovative IT solutions they need to thrive in a digital-first world. Technology should be an asset, not a vulnerability, and I&apos;m passionate about building that reality for our clients.&quot;
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                With a deep-rooted expertise in cybersecurity and software development, I am personally invested in the success of every project. When you partner with us, you get a dedicated expert committed to understanding your challenges and delivering solutions that are not just effective, but transformative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Guiding Principles Section */}
      <section className="bg-white pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Guiding Principles</h2>
            <p className="text-gray-600 mt-2">The values that drive us forward.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => (
              <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="pt-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Our Journey</h2>
            <p className="text-gray-600 mt-2">A timeline of our growth and achievements.</p>
          </motion.div>
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure &amp; Scale Your Business?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our expertise can help you achieve your technology goals. Get in touch for a free, no-obligation consultation.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-flex items-center shadow-lg">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPageClient;
