
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-primary">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary mt-0.5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-0.5" />
                <span>contact@raxior.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-0.5" />
                <span>123 Tech Street, Innovation City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {currentYear} RAXIOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
