import Image from 'next/image';

type LogoStripProps = {
  title?: string;
  className?: string;
};

const clientLogos = [
  '/images/logos/client-a.svg',
  '/images/logos/client-b.svg',
  '/images/logos/client-c.svg',
  '/images/logos/client-d.svg',
  '/images/logos/client-e.svg',
  '/images/logos/client-f.svg',
  '/images/logos/client-g.svg',
  '/images/logos/client-h.svg',
  '/images/logos/client-i.svg',
];

export default function LogoStrip({ title = 'Trusted by forward-thinking teams', className }: LogoStripProps) {
  return (
    <section className={className ?? ''}>
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
          {clientLogos.map((src) => (
            <div key={src} className="h-8 w-28 relative grayscale">
              <Image src={src} alt="Client logo" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



