import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    content: "WeFore transformed our social media presence completely. Our engagement went up 400% in just 3 months!",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, FitLife",
    content: "The reels they create are absolute fire. Our Instagram following doubled and conversions are through the roof.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleCo",
    content: "Professional, creative, and results-driven. WeFore is the best decision we made for our brand.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-gradient">Clients</span> Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <Quote className="text-primary/40 mb-4 group-hover:text-primary/60 transition-colors" size={32} />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
