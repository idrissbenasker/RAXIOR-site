
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background Elements */}
        <div className="absolute -z-10 top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">Creative Solutions</span> 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">for Your Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We deliver cutting-edge web development, impactful digital marketing, 
              and stunning design to help your business thrive in the digital world.
            </motion.p>
            
            {/* Services Rotating Banner */}
            <motion.div
              className="mb-8 flex items-center gap-3 bg-muted p-3 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {services.map((service, index) => (
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
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button asChild size="lg" className="relative overflow-hidden group">
                <Link to="/portfolio" className="relative z-10">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/contact">
                  Contact Us
                  <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative z-10 rounded-lg shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
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
              className="absolute -z-10 -top-5 -right-5 w-full h-full bg-primary/10 rounded-lg"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute top-10 -left-16 bg-card p-4 rounded-lg shadow-lg border border-border z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Development</div>
                  <div className="font-medium text-sm">Modern Solutions</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -right-8 bg-card p-4 rounded-lg shadow-lg border border-border z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Design</div>
                  <div className="font-medium text-sm">Creative Vision</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
