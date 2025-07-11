
import type { Metadata } from 'next';
import NewFuturePage from '@/components/NewFuturePage';

export const metadata: Metadata = {
  title: 'The Future of Your Business | DEVSIRCH HUB',
  description: 'Discover our upcoming services in professional tech training and strategic procurement, designed to give your business a competitive advantage.',
};

const FuturePage = () => {
  return <NewFuturePage />;
};

export default FuturePage;
