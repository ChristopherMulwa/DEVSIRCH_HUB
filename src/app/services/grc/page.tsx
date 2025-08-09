
import type { Metadata } from 'next';
import GRCClientPage from './grc-client';
import TrustSignals from '@/components/TrustSignals';
import StickyCTA from '@/components/StickyCTA';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Governance, Risk & Compliance (GRC) | DEVSIRCH HUB',
  description:
    'Integrated GRC services to align governance, proactively manage risk, and ensure regulatory compliance. Build resilience and govern with confidence.',
};

export default function GRCPage() {
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
              { '@type': 'ListItem', position: 2, name: 'GRC', item: '/services/grc' },
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
            name: 'Governance, Risk & Compliance (GRC)',
            provider: { '@type': 'Organization', name: 'DEVSIRCH HUB' },
            serviceType: 'GRC Advisory & Managed Services',
            areaServed: 'KE',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'GRC Offerings',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Governance Frameworks' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Risk Management' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regulatory Compliance' } },
              ],
            },
          }),
        }}
      />

      <TrustSignals className="bg-gray-50 dark:bg-gray-900/40" variant="grc" />
      <GRCClientPage />

      <FAQSection
        title="GRC FAQs"
        items={[
          {
            question: 'Which frameworks do you support?',
            answer:
              'We support ISO 27001/2, NIST CSF, SOC 2, PCI DSS, HIPAA, GDPR and more. We tailor scope to your industry and regulatory needs.',
          },
          {
            question: 'What deliverables can we expect?',
            answer:
              'Typical deliverables include current-state assessment, gap analysis, prioritized roadmap, policies/procedures, and ongoing reporting/metrics.',
          },
          {
            question: 'What is a typical timeline?',
            answer:
              'Initial assessment usually completes in 2–4 weeks depending on scope. Remediation and rollout plans are scheduled collaboratively.',
          },
          {
            question: 'Do you offer managed or ongoing support?',
            answer:
              'Yes. We offer advisory, project-based, and managed GRC options including continuous monitoring and audit readiness support.',
          },
          {
            question: 'How do you handle data security?',
            answer:
              'We follow strict access controls, least-privilege, encryption in transit and at rest (where applicable), and sign NDAs/MSAs as required.',
          },
        ]}
      />
      <StickyCTA href="/contact" label="Get a Free Consultation" />
    </>
  );
}
