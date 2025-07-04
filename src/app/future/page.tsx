
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Initiatives | SIRCH SOLUTIONS KE',
  description: 'Learn about our exciting future plans, including professional tech training and tendering partnerships.',
};

const FuturePage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Future Initiatives</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We are constantly innovating and looking for new ways to serve our clients and the community. Here are some of the exciting initiatives we have planned for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://placehold.co/600x400/000/FFF?text=Tech+Training" alt="Tech Training" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Tech Training & Online Courses</h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of education to transform lives and empower individuals with the skills they need to succeed in the tech industry. That's why we are developing a comprehensive range of professional tech training programs and online courses.
            </p>
            <p className="text-gray-600">
              Our courses will cover a wide range of topics, from cybersecurity and software development to cloud computing and data science. We will offer both in-person and online learning options to make our programs accessible to everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="md:order-2">
            <img src="https://placehold.co/600x400/000/FFF?text=Tendering" alt="Tendering" className="rounded-lg shadow-md" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tendering & Supply Partnerships</h2>
            <p className="text-gray-600 mb-4">
              We are committed to becoming a trusted tendering and supply partner for leading private sector firms and government entities. We have a proven track record of delivering high-quality ICT equipment and services, and we are confident that we can provide the best value for our partners.
            </p>
            <p className="text-gray-600">
              We are always looking for new opportunities to collaborate and build long-term partnerships. If you are interested in working with us, please get in touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePage;
