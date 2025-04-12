
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
    { title: "Web Development", icon: <Code className="h-5 w-5 md:h-6 md:w-6" />, delay: 0 },
    { title: "Design Solutions", icon: <Palette className="h-5 w-5 md:h-6 md:w-6" />, delay: 0.1 },
    { title: "Digital Marketing", icon: <Megaphone className="h-5 w-5 md:h-6 md:w-6" />, delay: 0.2 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Define variants for animations to ensure consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggeredServices = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Improved background elements - better mobile positioning */}
        <div className="absolute -z-10 top-1/3 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-1/4 right-1/3 w-48 h-48 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-[80px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content - Improved spacing for mobile */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto lg:mx-0 px-1"
          >
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight mb-4 text-center lg:text-left"
            >
              <span className="block">Creative Solutions</span> 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">for Your Business</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-5 text-center lg:text-left"
            >
              We deliver cutting-edge web development, impactful digital marketing, 
              and stunning design to help your business thrive in the digital world.
            </motion.p>
            
            {/* Services Banner - Simplified & smoother animation for mobile */}
            <motion.div
              variants={staggeredServices}
              initial="hidden"
              animate="visible"
              className="mb-6 flex items-center justify-center lg:justify-start gap-3 bg-muted/60 backdrop-blur-sm p-3 rounded-lg shadow-sm"
            >
              {isMobile ? (
                // Improved mobile service display with smoother transitions
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center text-primary"
                >
                  <div className="mr-2 bg-primary/10 p-1.5 rounded-full">
                    {services[currentService].icon}
                  </div>
                  <span className="font-medium">{services[currentService].title}</span>
                </motion.div>
              ) : (
                // Desktop displays all services
                services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={serviceVariant}
                    animate={{ 
                      opacity: currentService === index ? 1 : 0.6,
                      scale: currentService === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center ${currentService === index ? 'text-primary' : 'text-muted-foreground'} transition-all duration-300`}
                  >
                    <div className={`mr-2 ${currentService === index ? 'bg-primary/10' : 'bg-muted/80'} p-1.5 rounded-full transition-colors duration-300`}>
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.title}</span>
                  </motion.div>
                ))
              )}
            </motion.div>
            
            {/* Call to action buttons - Improved spacing and animation */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="relative overflow-hidden group w-full sm:w-auto">
                <Link to="/portfolio" className="relative z-10">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
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

          {/* Hero Image - Enhanced mobile experience with better positioning */}
          <motion.div 
            className="relative mt-10 lg:mt-0 mx-auto lg:mx-0 max-w-sm sm:max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main image with optimized mobile shadow and animation */}
            <motion.div 
              className="relative z-10 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person working on laptop" 
                className="w-full h-auto"
                loading="eager"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </motion.div>
            
            {/* Image background shadow - more subtle on mobile */}
            <motion.div 
              className="absolute -z-10 -top-2 -right-2 sm:-top-3 sm:-right-3 w-full h-full bg-primary/10 rounded-lg"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
            
            {/* Desktop floating elements */}
            {!isMobile && (
              <>
                <motion.div 
                  className="absolute top-10 -left-8 md:-left-10 bg-card p-3 rounded-lg shadow-lg border border-border z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1.5">
                      <Code className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Development</div>
                      <div className="font-medium text-xs md:text-sm">Modern Solutions</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 -right-4 md:-right-6 bg-card p-3 rounded-lg shadow-lg border border-border z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1.5">
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
            
            {/* Enhanced Mobile floating elements - improved to match design */}
            {isMobile && (
              <>
                <motion.div 
                  className="absolute bottom-14 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-border/50 z-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/20 p-2.5">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Design</div>
                      <div className="font-medium text-base">Creative Vision</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-10 left-3 bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-border/50 z-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-2">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Development</div>
                      <div className="font-medium text-sm">Modern Solutions</div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
