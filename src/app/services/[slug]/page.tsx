import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

const serviceData = {
  'cybersecurity-awareness': {
    title: 'Cybersecurity Awareness Programs',
    description: 'In today\'s digital age, cybersecurity is more important than ever. Our cybersecurity awareness programs are designed to educate your employees about the latest cyber threats and best practices for staying safe online. We offer a variety of training options, from online courses to in-person workshops, to meet the needs of your organization.',
    offerings: [
      'Phishing simulations and training',
      'Social engineering awareness',
      'Password security best practices',
      'Data protection and privacy training',
    ],
    benefits: [
      'Reduce the risk of data breaches and cyber attacks',
      'Protect your company\'s reputation and customer trust',
      'Comply with industry regulations and standards',
      'Empower your employees to be your first line of defense',
    ],
  },
  'it-consulting': {
    title: 'IT Consulting & Technical Support',
    description: 'Our IT consulting and technical support services are designed to help you make the most of your technology investments. We provide expert advice and guidance on a wide range of IT issues, from strategic planning to day-to-day troubleshooting. Our goal is to help you optimize your IT infrastructure and improve your business operations.',
    offerings: [
      'IT strategy and planning',
      'Network design and implementation',
      'Cloud migration and management',
      '24/7 helpdesk and technical support',
    ],
    benefits: [
      'Improve business efficiency and productivity',
      'Reduce IT costs and complexity',
      'Gain access to a team of experienced IT experts',
      'Focus on your core business while we handle the technology',
    ],
  },
  'web-software-development': {
    title: 'Website & Software Development',
    description: 'We build custom websites and software solutions to meet your unique business needs. Our team of experienced developers will work with you to create a solution that is tailored to your specific requirements. We use the latest technologies and development methodologies to ensure that your project is a success.',
    offerings: [
      'Custom website design and development',
      'E-commerce solutions',
      'Mobile application development',
      'Enterprise software development',
    ],
    benefits: [
      'Get a website or software solution that is tailored to your business',
      'Improve your online presence and reach more customers',
      'Automate business processes and improve efficiency',
      'Gain a competitive advantage with a custom solution',
    ],
  },
  'ict-infrastructure': {
    title: 'ICT Infrastructure Setup',
    description: 'We design and implement robust and scalable ICT infrastructure for your organization. Our team of experts will work with you to create a solution that meets your specific needs and budget. We use the latest technologies and best practices to ensure that your infrastructure is reliable, secure, and scalable.',
    offerings: [
      'Network infrastructure design and implementation',
      'Server and storage solutions',
      'Data center design and management',
      'Wireless network solutions',
    ],
    benefits: [
      'Get a reliable and scalable ICT infrastructure',
      'Improve business continuity and disaster recovery',
      'Reduce IT costs and complexity',
      'Gain a competitive advantage with a modern infrastructure',
    ],
  },
  'ict-procurement': {
    title: 'Procurement, Supply, and Delivery of ICT Equipment',
    description: 'We procure and deliver a wide range of ICT equipment to meet your needs. We have established relationships with leading manufacturers and distributors, which allows us to offer competitive pricing and fast delivery. We can also provide installation and configuration services to ensure that your new equipment is up and running quickly.',
    offerings: [
      'Laptops, desktops, and servers',
      'Networking equipment (routers, switches, firewalls)',
      'Printers, scanners, and other peripherals',
      'Software licensing and management',
    ],
    benefits: [
      'Get the right ICT equipment at the right price',
      'Save time and money on procurement',
      'Get fast and reliable delivery',
      'Ensure that your new equipment is installed and configured correctly',
    ],
  },
};

interface ServicePageProps {
  params: { slug: string };
}


export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = serviceData[params.slug as keyof typeof serviceData];
  if (!service) {
    return notFound();
  }
  return { title: `${service.title} | SIRCH SOLUTIONS KE` };
}

const ServiceDetailPage = ({ params }: ServicePageProps) => {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    return notFound();
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">{service.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={`https://placehold.co/600x400/000/FFF?text=${service.title.replace(/\s/g, '+')}`} alt={service.title} width={600} height={400} className="rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Overview</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Offerings</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {service.offerings.map((offering) => (
              <li key={offering} className="text-gray-600">{offering}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-gray-100 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Benefits to Your Business</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="text-gray-600">{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
