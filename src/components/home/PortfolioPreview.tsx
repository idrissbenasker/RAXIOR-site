
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample portfolio projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: 3,
    title: 'SEO Campaign',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 4,
    title: 'Mobile App UI',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  },
  {
    id: 5,
    title: 'Content Strategy',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  },
  {
    id: 6,
    title: 'Website Development',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Dev' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
];

const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Check out some of our recent projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link to={`/portfolio/${project.id}`} key={project.id}>
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-64 transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold font-heading">{project.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/portfolio" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
