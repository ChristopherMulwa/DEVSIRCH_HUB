"use client";

import { motion } from 'framer-motion';
import React from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, y = 20, duration = 0.5, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


