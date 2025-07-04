
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SIRCH SOLUTIONS KE',
  description: 'Learn more about SIRCH SOLUTIONS KE, our mission, vision, and values.',
};

const AboutPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About SIRCH SOLUTIONS KE</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://placehold.co/600x400/000/FFF?text=Our+Story" alt="Our Story" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for technology and a commitment to solving complex IT challenges, SIRCH SOLUTIONS KE has grown into a leading provider of comprehensive IT services in Kenya. Our journey began with a simple mission: to empower businesses and organizations with the tools and expertise they need to thrive in a digital world.
            </p>
            <p className="text-gray-600">
              Today, we are proud to serve a diverse range of clients, from small startups to large corporations, helping them navigate the ever-changing landscape of technology with confidence.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Mission, Vision, and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mission</h3>
              <p className="text-gray-600">To empower individuals and organizations in Kenya with innovative, reliable, and secure IT solutions that drive growth, efficiency, and resilience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600">To be the leading and most trusted IT solutions partner in Kenya, recognized for our commitment to cutting-edge technology, cybersecurity excellence, and fostering long-term client success.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Core Values</h3>
              <p className="text-gray-600">Innovation, Reliability, Integrity, Client-Centricity, Security, Expertise.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Approach</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            At SIRCH SOLUTIONS KE, we believe in a collaborative and client-centric approach. We take the time to understand your unique needs and challenges, allowing us to develop tailored solutions that deliver real results. Our team of experts is dedicated to providing the highest level of service and support, ensuring that you have a trusted partner you can rely on every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
