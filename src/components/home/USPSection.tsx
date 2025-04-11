
import { Award, Clock, Target, Zap } from 'lucide-react';

const benefits = [
  {
    title: 'Proven Results',
    description: 'Our strategies have consistently delivered measurable ROI for businesses across industries.',
    icon: Award,
  },
  {
    title: 'Fast Turnaround',
    description: 'We deliver high-quality work on time, ensuring your projects stay on schedule.',
    icon: Clock,
  },
  {
    title: 'Tailored Approach',
    description: 'Every solution is customized to your specific business needs and goals.',
    icon: Target,
  },
  {
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge technologies and strategies to keep you ahead of competitors.',
    icon: Zap,
  },
];

const USPSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            We deliver exceptional results through our unique approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
