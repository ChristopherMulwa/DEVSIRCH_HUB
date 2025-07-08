
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, title, avatar }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
      <img src={avatar} alt={`${author}'s avatar`} className="w-24 h-24 rounded-full mb-6 border-4 border-blue-100" />
      <Quote className="w-10 h-10 text-blue-500 mb-4" />
      <p className="text-lg text-gray-700 italic mb-6">{text}</p>
      <div className="text-center">
        <p className="font-bold text-gray-800">- {author}</p>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
