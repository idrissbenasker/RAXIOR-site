
import { Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/home/FinalCTA';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    title: 'CEO & Creative Director',
    bio: 'With over 15 years of experience in design and digital strategy, Sarah leads our team with vision and creativity.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Michael Chen',
    title: 'Lead Developer',
    bio: 'Michael brings technical expertise and innovation to every project, ensuring cutting-edge solutions for our clients.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Marketing Strategist',
    bio: 'Emily combines data-driven insights with creative thinking to develop marketing strategies that deliver results.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'David Wilson',
    title: 'Design Lead',
    bio: "David's passion for beautiful, functional design helps our clients stand out in crowded markets.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15', label: 'Industry Awards' }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
              <p className="text-lg text-gray-600">
                We're a team of passionate creatives and strategists dedicated to helping businesses thrive
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're on a mission to empower businesses with creative solutions that drive growth and make a lasting impact. We believe in combining data-driven strategies with innovative design to create experiences that resonate with audiences and deliver measurable results.
                </p>
                <p className="text-lg text-gray-700">
                  Our approach is collaborative and client-focused. We take the time to understand your business, goals, and challenges to develop tailored solutions that meet your specific needs. We're committed to building long-term partnerships and helping our clients succeed in today's rapidly evolving digital landscape.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-heading mb-6 text-center">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Excellence', description: 'We strive for excellence in everything we do' },
                    { title: 'Innovation', description: 'We embrace new ideas and creative solutions' },
                    { title: 'Integrity', description: 'We act with honesty and transparency' },
                    { title: 'Collaboration', description: 'We believe in the power of teamwork' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold font-heading mb-1">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The talented people behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
