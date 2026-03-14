'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Bug, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Requirement Discussion',
    description: 'We start by understanding your goals, target audience, and specific business needs to scope the project accurately.',
    icon: MessageSquare,
  },
  {
    title: 'Design & Planning',
    description: 'Our design team creates wireframes and high-fidelity mockups, ensuring the user experience is intuitive and modern.',
    icon: PenTool,
  },
  {
    title: 'Development',
    description: 'We build the application using scalable, modern technologies like React and Next.js, focusing on clean code and performance.',
    icon: Code2,
  },
  {
    title: 'Testing',
    description: 'Rigorous QA testing across multiple devices and browsers to ensure a bug-free, seamless experience for your users.',
    icon: Bug,
  },
  {
    title: 'Launch & Support',
    description: 'We deploy the website to production and provide ongoing support and maintenance to ensure long-term success.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              A streamlined, transparent approach to bringing your digital vision to life.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative md:h-48 flex items-center">
                  <div className={`flex flex-col md:flex-row w-full items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`w-full md:w-[45%] ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'} mt-6 md:mt-0 text-center`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 md:hidden`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                        <span className="text-primary mr-2 md:hidden">{index + 1}.</span>
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Center Icon (Desktop) */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary/20 items-center justify-center shadow-lg z-10"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </motion.div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
