
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import USPSection from '@/components/home/USPSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import Testimonials from '@/components/home/Testimonials';
import ProcessFlow from '@/components/home/ProcessFlow';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <USPSection />
        <PortfolioPreview />
        <Testimonials />
        <ProcessFlow />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
