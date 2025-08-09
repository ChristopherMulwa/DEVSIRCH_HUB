type OutcomeItem = { label: string; value: string };

type OutcomesGridProps = {
  title?: string;
  subtitle?: string;
  items: OutcomeItem[];
  className?: string;
};

export default function OutcomesGrid({ title = 'Measurable Outcomes', subtitle, items, className }: OutcomesGridProps) {
  return (
    <section className={className ?? ''}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
          {subtitle && <p className="text-gray-600 dark:text-gray-300 mt-2">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-extrabold text-blue-600">{item.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


