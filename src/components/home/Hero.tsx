
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
  const isMobile = useIsMobile();
  const services = [
    { title: "Web Development", icon: <Code className="h-6 w-6" />, delay: 0 },
    { title: "Design Solutions", icon: <Palette className="h-6 w-6" />, delay: 0.1 },
    { title: "Digital Marketing", icon: <Megaphone className="h-6 w-6" />, delay: 0.2 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background Elements - Adjusted for mobile */}
        <div className="absolute -z-10 top-1/2 left-1/4 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 md:mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">Creative Solutions</span> 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">for Your Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We deliver cutting-edge web development, impactful digital marketing, 
              and stunning design to help your business thrive in the digital world.
            </motion.p>
            
            {/* Services Rotating Banner - Stack on mobile */}
            <motion.div
              className="mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 bg-muted p-3 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {isMobile ? (
                // On mobile, only show current service
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, scale: 1.05 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center text-primary transition-all duration-300"
                >
                  <div className="mr-2">{services[currentService].icon}</div>
                  <span className="font-medium">{services[currentService].title}</span>
                </motion.div>
              ) : (
                // On desktop, show all services
                services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: currentService === index ? 1 : 0.4,
                      y: 0,
                      scale: currentService === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-center ${currentService === index ? 'text-primary' : 'text-muted-foreground'} transition-all duration-300`}
                  >
                    <div className="mr-2">{service.icon}</div>
                    <span className="font-medium">{service.title}</span>
                  </motion.div>
                ))
              )}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button asChild size="lg" className="relative overflow-hidden group w-full sm:w-auto">
                <Link to="/portfolio" className="relative z-10">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Contact Us
                  <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image - Responsive adjustments */}
          <motion.div 
            className="relative mt-8 lg:mt-0 mx-auto lg:mx-0 max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative z-10 rounded-lg shadow-xl overflow-hidden"
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person working on laptop" 
                className="w-full h-auto"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </motion.div>
            <motion.div 
              className="absolute -z-10 -top-3 -right-3 md:-top-5 md:-right-5 w-full h-full bg-primary/10 rounded-lg"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            
            {/* Floating Elements - Hide on small mobile, adjust position on larger screens */}
            {!isMobile && (
              <>
                <motion.div 
                  className="absolute top-10 -left-8 sm:-left-12 md:-left-16 bg-card p-3 md:p-4 rounded-lg shadow-lg border border-border z-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="rounded-full bg-primary/20 p-1.5 md:p-2">
                      <Code className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Development</div>
                      <div className="font-medium text-xs md:text-sm">Modern Solutions</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 -right-4 sm:-right-6 md:-right-8 bg-card p-3 md:p-4 rounded-lg shadow-lg border border-border z-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="rounded-full bg-primary/20 p-1.5 md:p-2">
                      <Palette className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Design</div>
                      <div className="font-medium text-xs md:text-sm">Creative Vision</div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Mobile-only floating element (simpler version) */}
            {isMobile && (
              <motion.div 
                className="absolute bottom-4 right-4 bg-card p-3 rounded-lg shadow-lg border border-border z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1.5">
                    <Palette className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Design</div>
                    <div className="font-medium text-xs">Creative Vision</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
