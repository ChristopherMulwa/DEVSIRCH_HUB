
import type { Metadata } from 'next';
import CybersecurityClientPage from './cybersecurity-client';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | DEVSIRCH HUB',
  description: 'Comprehensive cybersecurity solutions to protect your business from modern threats. We offer penetration testing, network security assessments, digital forensics, and expert training to safeguard your digital assets.',
};

const CybersecurityPage = () => {
  return <CybersecurityClientPage />;
};

export default CybersecurityPage;
