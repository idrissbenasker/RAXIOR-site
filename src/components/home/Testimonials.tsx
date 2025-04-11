
import { User, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with this agency transformed our online presence. They delivered a website that perfectly represents our brand and has significantly increased our conversion rates.",
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    rating: 5,
  },
  {
    id: 2,
    quote: "The team's expertise in digital marketing helped us achieve a 200% increase in qualified leads within just three months. Their strategic approach and data-driven decisions made all the difference.",
    name: "Mark Williams",
    company: "Growth Ventures",
    rating: 5,
  },
  {
    id: 3,
    quote: "Not only did they create a stunning website for us, but they also provided valuable insights that helped improve our overall business strategy. They truly care about their clients' success.",
    name: "Jennifer Chen",
    company: "Innovative Retail",
    rating: 5,
  },
];

const partnerLogos = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - see what our clients have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-bold font-heading">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="h-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                <img src={partner.logo} alt={partner.name} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
