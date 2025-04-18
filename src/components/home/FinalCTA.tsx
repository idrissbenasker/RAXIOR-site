
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card text-foreground border-t border-border">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Partner with RAXIOR today to discuss how our modern IT solutions can help you achieve your business goals and stand out in the digital landscape.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
