type FAQ = { question: string; answer: string };

type FAQSectionProps = {
  items: FAQ[];
  className?: string;
  title?: string;
};

export default function FAQSection({ items, className, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  return (
    <section className={className ?? ''}>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{title}</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {items.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



