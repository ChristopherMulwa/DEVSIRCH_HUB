
'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, [events]);

  useEffect(() => {
    setVisibleItems(Array(events.length).fill(false));
    itemsRef.current = itemsRef.current.slice(0, events.length);
  }, [events]);

  return (
    <div className="relative container mx-auto px-4">
      <div className="absolute h-full w-1 bg-gray-300 left-4 md:left-1/2 md:-translate-x-1/2"></div>
      {events.map((event, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`mb-12 flex items-center w-full md:justify-between ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="hidden md:block md:w-5/12"></div>
          <div
            className={`w-full md:w-5/12 transition-all duration-700 ease-in-out transform ${
              visibleItems[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg ml-8 md:ml-0">
              <div className="text-2xl font-bold text-blue-500 mb-2">{event.year}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveTimeline;
