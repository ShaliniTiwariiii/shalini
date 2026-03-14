'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "CodeHer completely transformed our real estate business. The user experience is flawless, and the property search is incredibly fast. We've seen a 40% increase in leads since launch.",
    author: "Jessica T.",
    role: "Founder, Skyline Properties",
  },
  {
    content: "The engineering quality is top-notch. They built our SaaS landing page in record time with beautiful animations and a dark mode that our users absolutely love.",
    author: "David M.",
    role: "CEO, Nexus Tech",
  },
  {
    content: "Working with a team of female engineers was inspiring. Their attention to detail, communication, and clean code practices exceeded all our expectations.",
    author: "Rachel K.",
    role: "Director of Marketing, BrightStart",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Client <span className="text-primary">Success</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Don't just take our word for it. Here is what our clients have to say about working with CodeHer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 border border-border rounded-2xl p-8 relative hover:border-primary/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 rotate-180" />
              
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
