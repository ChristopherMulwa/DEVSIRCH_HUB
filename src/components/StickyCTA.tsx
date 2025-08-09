"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

type StickyCTAProps = {
  href: string;
  label: string;
};

export default function StickyCTA({ href, label }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 160);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-4 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-24'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <Link
          href={href}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}



