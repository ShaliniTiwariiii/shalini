'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Lumina Real Estate',
    category: 'Real Estate Website',
    image: '/portfolio-real-estate.png',
    link: '#',
  },
  {
    title: 'Nexus SaaS Platform',
    category: 'Startup Landing Page',
    image: '/portfolio-startup.png',
    link: '#',
  },
  {
    title: 'Aegis Corporate Consulting',
    category: 'Business Website',
    image: '/portfolio-business.png',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Explore some of the high-performance websites we've engineered for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
