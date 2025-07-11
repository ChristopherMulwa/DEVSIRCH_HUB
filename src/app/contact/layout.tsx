
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | DEVSIRCH HUB',
  description: 'Get in touch with us for a free consultation or to learn more about our services.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
