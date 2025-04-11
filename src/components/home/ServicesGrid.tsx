
import { Link } from 'react-router-dom';
import { Code, Palette, LineChart, Globe } from 'lucide-react';

const serviceItems = [
  {
    title: 'Web Development',
    icon: Code,
    description: 'Custom websites that engage and convert.',
    features: [
      'Responsive design for all devices',
      'Performance optimization',
      'CMS integration',
      'E-commerce solutions'
    ]
  },
  {
    title: 'Digital Marketing',
    icon: LineChart,
    description: 'Data-driven strategies to grow your business.',
    features: [
      'SEO & content marketing',
      'Social media management',
      'Paid advertising campaigns',
      'Analytics & reporting'
    ]
  },
  {
    title: 'Design',
    icon: Palette,
    description: 'Stunning visuals that strengthen your brand.',
    features: [
      'Brand identity development',
      'UI/UX design',
      'Print & digital graphics',
      'Motion design'
    ]
  },
  {
    title: 'Editing & Content',
    icon: Globe,
    description: 'Compelling content that tells your story.',
    features: [
      'Copywriting & editing',
      'Content strategy',
      'Video production',
      'Photography'
    ]
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Explore custom solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

export default ServicesGrid;
