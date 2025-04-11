
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and challenges to create a tailored strategy.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Based on our findings, we develop a comprehensive plan to achieve your objectives.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our team implements the strategy with careful attention to quality and detail.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We continuously monitor results and refine our approach for maximum impact.',
  },
];

const ProcessFlow = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            A structured approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-lg shadow-md h-full">
                <div className="text-3xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connecting steps - hidden on mobile */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
