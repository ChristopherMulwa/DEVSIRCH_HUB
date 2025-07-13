import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | DEVSIRCH HUB',
  description: 'Learn about the mission, vision, and the founder of DEVSIRCH HUB, your trusted partner in innovative IT solutions.',
};

const AboutPage = () => {
  return <AboutPageClient />;
};

export default AboutPage;
