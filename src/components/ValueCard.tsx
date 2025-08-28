"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-72 w-full [perspective:1200px]"
    >
      <div className="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg [backface-visibility:hidden] border border-gray-200 dark:border-gray-700">
          <div className="text-blue-500 dark:text-blue-400 mb-4">
            {React.isValidElement(icon)
              ? React.cloneElement(
                  icon as React.ReactElement<{ className?: string }>,
                  {
                    ...((icon as React.ReactElement<{ className?: string }>).props || {}),
                    className: [
                      "w-16 h-16",
                      ((icon as React.ReactElement<{ className?: string }>).props && (icon as React.ReactElement<{ className?: string }>).props.className) || ""
                    ].filter(Boolean).join(" ")
                  }
                )
              : icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">{title}</h3>
        </div>
        {/* Back of the card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h4 className="text-xl font-bold mb-3">{title}</h4>
          <p className="text-center text-blue-100">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ValueCard;