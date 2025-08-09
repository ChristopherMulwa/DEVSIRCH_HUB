import ServicesPageClient from './ServicesPageClient';
import type { Metadata } from 'next';

const ServicesPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Services', item: '/services' }
            ],
          }),
        }}
      />
      <ServicesPageClient />
    </>
  );
};

export default ServicesPage;
