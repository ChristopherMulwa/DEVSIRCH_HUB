import { ShieldCheck, FileText, Lock, Handshake, Server, Network, Settings, Package, Code, LifeBuoy, AlertTriangle, ClipboardCheck, Landmark, ClipboardList, Bug, Search, Cloud, Wifi, HardDrive, ShoppingCart, BadgeCheck, Truck, Smartphone, CreditCard } from 'lucide-react';
import Icon from '@/components/ui/Icon';

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
      { icon: <Icon><Landmark /></Icon>, title: 'Governance-led', desc: 'Clear roles, policies, and oversight aligned to strategy.' },
      { icon: <Icon><AlertTriangle /></Icon>, title: 'Risk-informed', desc: 'Identify, assess, prioritize, and treat enterprise risks.' },
      { icon: <Icon><ClipboardCheck /></Icon>, title: 'Compliance-mapped', desc: 'ISO 27001, NIST CSF, SOC 2, PCI DSS, HIPAA, GDPR.' },
      { icon: <Icon><ClipboardList /></Icon>, title: 'Audit-ready', desc: 'Evidence, policies, and controls organized and maintained.' },
    ],
    cybersecurity: [
      { icon: <Icon><Search /></Icon>, title: 'Threat-led', desc: 'Assessments and pen testing that emulate real adversaries.' },
      { icon: <Icon><Bug /></Icon>, title: 'Vuln Management', desc: 'Identify, prioritize, and remediate systematically.' },
      { icon: <Icon><Lock /></Icon>, title: 'Hardening-first', desc: 'Secure baselines and guardrails from day one.' },
      { icon: <Icon><ShieldCheck /></Icon>, title: 'Response-ready', desc: 'Playbooks, detection, and rapid response.' },
    ],
    it: [
      { icon: <Icon><Settings /></Icon>, title: 'SLA-backed Support', desc: 'Responsive helpdesk with clear escalation paths.' },
      { icon: <Icon><Cloud /></Icon>, title: 'Cloud Strategy', desc: 'Right-fit cloud adoption and ongoing optimization.' },
      { icon: <Icon><Server /></Icon>, title: 'Smooth Migrations', desc: 'Planned cutovers, rollback plans, and documentation.' },
      { icon: <Icon><FileText /></Icon>, title: 'Governance & Policy', desc: 'Change, incident, and asset management that works.' },
    ],
    infrastructure: [
      { icon: <Icon><Network /></Icon>, title: 'Secure Networks', desc: 'Segmentation, zero trust principles, and HA patterns.' },
      { icon: <Icon><Server /></Icon>, title: 'Scalable Architecture', desc: 'Right-sized capacity and growth-ready designs.' },
      { icon: <Icon><Wifi /></Icon>, title: 'Wireless Done Right', desc: 'Coverage, capacity, and security aligned to needs.' },
      { icon: <Icon><HardDrive /></Icon>, title: 'Resilient Storage', desc: 'Backups, replication, and recovery objectives.' },
    ],
    procurement: [
      { icon: <Icon><Package /></Icon>, title: 'Authorized Vendors', desc: 'Multi-vendor quotes and transparent comparisons.' },
      { icon: <Icon><ShoppingCart /></Icon>, title: 'End-to-end Logistics', desc: 'Sourcing, delivery, and installation covered.' },
      { icon: <Icon><BadgeCheck /></Icon>, title: 'Warranty Managed', desc: 'Warranty registration, RMA coordination, support.' },
      { icon: <Icon><Truck /></Icon>, title: 'On-time Delivery', desc: 'Coordinated timelines and clear communication.' },
    ],
    development: [
      { icon: <Icon><Code /></Icon>, title: 'Secure Coding', desc: 'Modern standards, code review, and dependency hygiene.' },
      { icon: <Icon><Smartphone /></Icon>, title: 'Mobile & Web', desc: 'Responsive UX and performance across devices.' },
      { icon: <Icon><CreditCard /></Icon>, title: 'Commerce-ready', desc: 'Payments, catalogs, and integrations you can trust.' },
      { icon: <Icon><LifeBuoy /></Icon>, title: 'Post-launch Support', desc: 'Monitoring, SLAs, and continuous improvements.' },
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


