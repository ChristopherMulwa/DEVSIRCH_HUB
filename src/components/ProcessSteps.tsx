type Step = { title: string; description: string };

type ProcessStepsProps = {
  title?: string;
  steps: Step[];
  className?: string;
};

export default function ProcessSteps({ title = 'Our Process', steps, className }: ProcessStepsProps) {
  return (
    <section className={className ?? ''}>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


