
'use client';



import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg [backface-visibility:hidden]">
          {icon}
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        {/* Back of the card */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white p-6 rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
