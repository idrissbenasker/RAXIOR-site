
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/home/FinalCTA';

const serviceCategories = [
  {
    title: 'Web Development',
    description: 'Custom websites built to perform and convert.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    services: [
      {
        name: 'Custom Website Development',
        description: 'Tailored websites designed to meet your specific business needs and goals.',
        features: [
          'Responsive design for all devices',
          'Fast loading speeds',
          'SEO optimization',
          'Custom functionality',
        ],
      },
      {
        name: 'E-commerce Solutions',
        description: 'Powerful online stores that drive sales and enhance customer experience.',
        features: [
          'User-friendly product management',
          'Secure payment processing',
          'Inventory management',
          'Marketing integrations',
        ],
      },
      {
        name: 'Website Maintenance',
        description: 'Keep your site secure, updated, and performing at its best.',
        features: [
          'Regular security updates',
          'Performance optimization',
          'Content updates',
          'Technical support',
        ],
      },
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    services: [
      {
        name: 'Search Engine Optimization (SEO)',
        description: 'Improve your visibility in search results and drive organic traffic.',
        features: [
          'Keyword research and strategy',
          'On-page optimization',
          'Technical SEO',
          'Content strategy',
        ],
      },
      {
        name: 'Paid Advertising',
        description: 'Targeted ads that reach your ideal customers at the right time.',
        features: [
          'Google Ads management',
          'Social media advertising',
          'Display and remarketing',
          'Performance tracking',
        ],
      },
      {
        name: 'Social Media Management',
        description: 'Build your brand and engage with your audience across platforms.',
        features: [
          'Content creation and scheduling',
          'Community management',
          'Analytics and reporting',
          'Growth strategies',
        ],
      },
    ],
  },
  {
    title: 'Design',
    description: 'Visually stunning designs that elevate your brand.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    services: [
      {
        name: 'Brand Identity',
        description: 'Create a distinctive and memorable brand that resonates with your audience.',
        features: [
          'Logo design',
          'Brand guidelines',
          'Visual identity systems',
          'Brand messaging',
        ],
      },
      {
        name: 'UI/UX Design',
        description: 'Intuitive interfaces that enhance user experience and drive conversions.',
        features: [
          'User research',
          'Wireframing and prototyping',
          'Interactive design',
          'Usability testing',
        ],
      },
      {
        name: 'Print & Packaging',
        description: 'High-quality designs for all your physical marketing materials.',
        features: [
          'Business cards and stationery',
          'Brochures and flyers',
          'Product packaging',
          'Signage and displays',
        ],
      },
    ],
  },
  {
    title: 'Content & Editing',
    description: 'Compelling content that tells your story and engages your audience.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    services: [
      {
        name: 'Copywriting',
        description: 'Persuasive content that drives action and communicates your value.',
        features: [
          'Website copy',
          'Blog posts and articles',
          'Email marketing',
          'Product descriptions',
        ],
      },
      {
        name: 'Video Production',
        description: 'High-quality videos that capture attention and showcase your brand.',
        features: [
          'Promotional videos',
          'Product demonstrations',
          'Testimonials',
          'Social media content',
        ],
      },
      {
        name: 'Content Strategy',
        description: 'Comprehensive plans to create and distribute valuable content.',
        features: [
          'Audience research',
          'Content planning',
          'Distribution strategy',
          'Performance measurement',
        ],
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive solutions tailored to help your business thrive in the digital landscape
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section key={index} className={`py-16 px-4 sm:px-6 lg:px-8 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={`${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <h2 className="text-3xl font-bold font-heading mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold font-heading mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Custom Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold font-heading mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand that every business is unique. Contact us to discuss your specific needs and how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
