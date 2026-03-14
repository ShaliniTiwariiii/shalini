'use client';

import { motion } from 'framer-motion';
import { Layout, Globe, Building2, Paintbrush, TrendingUp, Settings } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance web applications built with modern frameworks like Next.js and React.',
    icon: Layout,
  },
  {
    title: 'Business Websites',
    description: 'Professional, lead-generating websites designed to establish your brand and drive online growth.',
    icon: Globe,
  },
  {
    title: 'Real Estate Websites',
    description: 'Feature-rich property portals with advanced search, filtering, and seamless user experiences.',
    icon: Building2,
  },
  {
    title: 'Website Redesign',
    description: 'Modernizing outdated websites with fresh UI/UX, improved performance, and mobile responsiveness.',
    icon: Paintbrush,
  },
  {
    title: 'SEO Optimization',
    description: 'Technical and on-page SEO strategies to improve your search rankings and organic visibility.',
    icon: TrendingUp,
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing support, security updates, and performance monitoring to keep your site running smoothly.',
    icon: Settings,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              We provide end-to-end web development services designed to elevate your brand and drive measurable results.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
