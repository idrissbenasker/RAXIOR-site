
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/home/FinalCTA';

// Sample portfolio projects with more details
const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    client: 'Fashion Boutique',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    description: 'Complete redesign of an e-commerce platform resulting in 45% increase in conversion rate.',
    tags: ['UI/UX', 'Shopify', 'Conversion Optimization'],
    results: ['45% increase in conversion rate', '30% reduction in bounce rate', '2x increase in mobile sales'],
  },
  {
    id: 2,
    title: 'Brand Identity',
    client: 'Green Energy Inc.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'Comprehensive brand identity development for a renewable energy company entering the market.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    results: ['Successfully launched in 3 new markets', 'Won industry design award', '95% brand recall in target audience'],
  },
  {
    id: 3,
    title: 'SEO Campaign',
    client: 'Legal Services Firm',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'Targeted SEO campaign to improve visibility for key practice areas and generate qualified leads.',
    tags: ['SEO', 'Content Strategy', 'Local Search'],
    results: ['Page 1 rankings for 15 target keywords', '85% increase in organic traffic', '67% increase in qualified leads'],
  },
  {
    id: 4,
    title: 'Mobile App UI',
    client: 'Health & Fitness Startup',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    description: 'Intuitive mobile app interface design for a health tracking application with personalized features.',
    tags: ['Mobile UI', 'User Experience', 'Prototyping'],
    results: ['4.8/5 app store rating', '89% user retention after 30 days', 'Featured in App Store'],
  },
  {
    id: 5,
    title: 'Content Strategy',
    client: 'Educational Platform',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    description: 'Comprehensive content strategy to position client as an industry thought leader and drive engagement.',
    tags: ['Content Marketing', 'Email Campaigns', 'Social Media'],
    results: ['135% increase in blog traffic', '10,000+ new email subscribers', '28% higher engagement rate'],
  },
  {
    id: 6,
    title: 'Website Development',
    client: 'Real Estate Agency',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    description: 'Custom property listing website with advanced search functionality and virtual tour integration.',
    tags: ['Web Development', 'CMS', 'API Integration'],
    results: ['65% reduction in bounce rate', '3x increase in lead generation', '25% improvement in page load speed'],
  },
  {
    id: 7,
    title: 'Social Media Campaign',
    client: 'Food Delivery Service',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'Multi-platform social media campaign to launch a new food delivery service in competitive markets.',
    tags: ['Social Media', 'Paid Advertising', 'Influencer Marketing'],
    results: ['50,000+ app downloads in first month', '320% ROI on ad spend', '18% market share achieved in 3 months'],
  },
  {
    id: 8,
    title: 'Product Packaging',
    client: 'Organic Skincare Brand',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'Sustainable packaging design for premium organic skincare line emphasizing eco-friendly values.',
    tags: ['Packaging Design', 'Sustainability', 'Retail'],
    results: ['40% increase in retail placement', 'Sustainability award winner', '25% reduction in packaging costs'],
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Dev' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const currentProject = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Explore our work and see how we've helped businesses achieve their goals
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
            {/* Category Filter */}
            <div className="flex justify-center flex-wrap gap-2 mb-10">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSelectedProject(null);
                  }}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {selectedProject === null ? (
              // Project Grid
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-card rounded-lg overflow-hidden shadow-md border border-border hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-64 transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-card-foreground capitalize">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Client: {project.client}</p>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full mt-2 group">
                        View Project Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Project Detail View
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mb-6"
                  onClick={() => setSelectedProject(null)}
                >
                  ← Back to All Projects
                </Button>

                {currentProject && (
                  <div className="bg-card rounded-lg shadow-md border border-border overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title} 
                        className="object-cover w-full max-h-[500px] opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <h2 className="text-3xl font-bold font-heading mb-2">{currentProject.title}</h2>
                          <p className="text-muted-foreground">Client: {currentProject.client}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tags.map((tag, index) => (
                            <span key={index} className="text-sm px-3 py-1 bg-primary/10 rounded-full text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold font-heading mb-4 text-primary">Project Overview</h3>
                        <p className="text-card-foreground">{currentProject.description}</p>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold font-heading mb-4 text-primary">Results</h3>
                        <ul className="space-y-2">
                          {currentProject.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary font-bold mr-2">•</span>
                              <span className="text-card-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-center">
                        <Button asChild>
                          <a href="#" className="inline-flex items-center">
                            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
