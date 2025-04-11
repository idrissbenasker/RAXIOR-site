
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              <span className="block">Creative Solutions</span> 
              <span className="block text-primary">for Your Business</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We deliver cutting-edge web development, impactful digital marketing, 
              and stunning design to help your business thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/portfolio">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person working on laptop" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-primary/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
