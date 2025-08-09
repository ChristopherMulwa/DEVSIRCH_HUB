import { ShieldCheck, FileText, Lock, Handshake } from 'lucide-react';

type TrustSignalsProps = {
  className?: string;
};

export default function TrustSignals({ className }: TrustSignalsProps) {
  const items = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security-first',
      desc: 'Least privilege, encryption in transit, and secure-by-design practices.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Framework-aligned',
      desc: 'Work aligned to ISO 27001, NIST CSF, SOC 2, PCI DSS, HIPAA, GDPR.',
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'NDA & SLAs',
      desc: 'NDA by default, clear SLAs, and transparent communication.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Outcome-focused',
      desc: 'Measurable improvements to reduce risk and improve compliance.',
    },
  ];

  return (
    <section className={className ?? ''}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 flex items-start gap-3">
              <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">{item.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


