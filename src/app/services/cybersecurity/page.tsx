
import type { Metadata } from 'next';
import CybersecurityClientPage from './cybersecurity-client';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | DEVSIRCH HUB',
  description: 'Comprehensive cybersecurity solutions to protect your business from modern threats. We offer penetration testing, network security assessments, digital forensics, and expert training to safeguard your digital assets.',
};

const CybersecurityPage = () => {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Services', item: '/services' },
              { '@type': 'ListItem', position: 2, name: 'Cybersecurity', item: '/services/cybersecurity' },
            ],
          }),
        }}
      />
      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Cybersecurity Services',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'Cybersecurity Assessment & Managed Security',
            areaServed: 'KE',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Cybersecurity Offerings',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penetration Testing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DFIR' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Awareness Training' } },
              ],
            },
          }),
        }}
      />

      <TrustSignals className="bg-gray-900/30" variant="cybersecurity" />
      <Reveal>
        <CybersecurityClientPage />
      </Reveal>
      <FAQSection
        title="Cybersecurity FAQs"
        items={[
          { question: 'What security frameworks do you follow?', answer: 'We align with NIST CSF, ISO 27001, CIS Controls and tailor to your compliance needs.' },
          { question: 'Do you provide remediation support?', answer: 'Yes, we deliver prioritized remediation plans and can support implementation or managed services.' },
          { question: 'How quickly can you start?', answer: 'Typical kickoff within 1–2 weeks; urgent engagements can be expedited based on scope.' },
        ]}
      />
      <StickyCTA href="/contact" label="Get a Free Security Consultation" />
    </>
  );
};

export default CybersecurityPage;
