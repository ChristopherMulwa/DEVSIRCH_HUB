import { ShieldCheck, FileText, Lock, Handshake, Server, Network, Settings, Package, Code, LifeBuoy } from 'lucide-react';

type TrustSignalsProps = {
  className?: string;
  variant?: 'grc' | 'cybersecurity' | 'it' | 'infrastructure' | 'procurement' | 'development';
};

export default function TrustSignals({ className, variant }: TrustSignalsProps) {
  const base = [
    { icon: <Lock className="w-6 h-6" />, title: 'Security-first', desc: 'Least privilege, encryption in transit, and secure-by-design practices.' },
    { icon: <Handshake className="w-6 h-6" />, title: 'NDA & SLAs', desc: 'NDA by default, clear SLAs, and transparent communication.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Outcome-focused', desc: 'Measurable improvements that matter to your business.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Clear Deliverables', desc: 'Documented scope, timelines, and handover artifacts.' },
  ];

  const map: Record<NonNullable<TrustSignalsProps['variant']>, typeof base> = {
    grc: [
      { icon: <FileText className="w-6 h-6" />, title: 'Framework-aligned', desc: 'ISO 27001, NIST CSF, SOC 2, PCI DSS, HIPAA, GDPR.' },
      { icon: <ShieldCheck className="w-6 h-6" />, title: 'Audit-ready', desc: 'Evidence, policies, and controls mapped and maintained.' },
      base[1],
      base[2],
    ],
    cybersecurity: [
      { icon: <ShieldCheck className="w-6 h-6" />, title: 'Threat-led', desc: 'Pen testing, assessments, and incident readiness.' },
      { icon: <Lock className="w-6 h-6" />, title: 'Hardening-first', desc: 'Secure configurations and prioritized remediation.' },
      base[1],
      base[2],
    ],
    it: [
      { icon: <Settings className="w-6 h-6" />, title: 'SLA-backed Support', desc: 'Responsive helpdesk and clear escalation paths.' },
      { icon: <Server className="w-6 h-6" />, title: 'Smooth Migrations', desc: 'Planned cutovers, rollback plans, and documentation.' },
      base[1],
      base[3],
    ],
    infrastructure: [
      { icon: <Network className="w-6 h-6" />, title: 'Secure Network Design', desc: 'Segmentation, zero trust principles, and HA patterns.' },
      { icon: <Server className="w-6 h-6" />, title: 'Scalable Architecture', desc: 'Right-sized capacity and growth-ready designs.' },
      base[1],
      base[3],
    ],
    procurement: [
      { icon: <Package className="w-6 h-6" />, title: 'Authorized Vendors', desc: 'Multi-vendor quotes and transparent comparisons.' },
      { icon: <ShieldCheck className="w-6 h-6" />, title: 'Warranty Managed', desc: 'Warranty registration, RMA coordination, support.' },
      base[3],
      base[1],
    ],
    development: [
      { icon: <Code className="w-6 h-6" />, title: 'Secure Coding', desc: 'Modern standards, code review, and dependency hygiene.' },
      { icon: <LifeBuoy className="w-6 h-6" />, title: 'Post-launch Support', desc: 'Monitoring, SLAs, and continuous improvements.' },
      base[2],
      base[3],
    ],
  };

  const items = variant ? map[variant] : base;

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


