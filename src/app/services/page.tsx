
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Briefcase, Code, Network, ShoppingCart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | SIRCH SOLUTIONS KE',
  description: 'Explore the wide range of IT services offered by SIRCH SOLUTIONS KE.',
};

const services = [
  {
    title: 'Cybersecurity Awareness Programs',
    description: 'Comprehensive training and awareness programs to protect your organization from cyber threats.',
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    slug: 'cybersecurity-awareness',
  },
  {
    title: 'IT Consulting & Technical Support',
    description: 'Strategic IT guidance and reliable technical support to optimize your business operations.',
    icon: <Briefcase className="w-12 h-12 text-blue-600" />,
    slug: 'it-consulting',
  },
  {
    title: 'Website & Software Development',
    description: 'Custom websites and software solutions tailored to your specific business needs.',
    icon: <Code className="w-12 h-12 text-blue-600" />,
    slug: 'web-software-development',
  },
  {
    title: 'ICT Infrastructure Setup',
    description: 'Design and implementation of robust and scalable ICT infrastructure.',
    icon: <Network className="w-12 h-12 text-blue-600" />,
    slug: 'ict-infrastructure',
  },
  {
    title: 'Procurement, Supply, and Delivery of ICT Equipment',
    description: 'Reliable procurement and delivery of a wide range of ICT equipment and accessories.',
    icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
    slug: 'ict-procurement',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="flex items-center text-blue-600 font-bold">
                  Learn More <ArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
