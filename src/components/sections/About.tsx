'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Laptop, Code, Rocket, Blocks } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Rocket },
  { name: 'Tailwind CSS', icon: Blocks },
  { name: 'Spring Boot', icon: Laptop },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-primary">CodeHer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-foreground/80 leading-relaxed text-lg"
          >
            <p>
              CodeHer began with a simple but powerful vision: to bridge the gender gap in technology while delivering world-class web engineering. We are a modern development agency driven by a talented team of predominantly women engineers, designers, and project managers.
            </p>
            <p>
              Our mission is twofold. First, we empower women in tech by providing a platform to lead, innovate, and create. Second, we deliver high-quality, scalable, and tailored digital solutions—from dynamic business websites to complex real estate portals and agile startup landing pages.
            </p>

            <div className="mt-8 flex gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border shadow-sm">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">High Quality</h4>
                  <p className="text-sm text-foreground/70">Performance & SEO Driven</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border shadow-sm">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Mission Led</h4>
                  <p className="text-sm text-foreground/70">Empowering Women</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Visual & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group"
                >
                  <div className="bg-secondary p-4 rounded-xl inline-block mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-foreground/60">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-xl mb-1">{tech.name}</h3>
                  <p className="text-sm text-foreground/60">Core Technology</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
