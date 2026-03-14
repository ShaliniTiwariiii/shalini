'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Shalini Tiwari',
    role: 'Lead Full Stack Engineer',
    bio: 'Former senior engineer at top tech companies. Passionate about React, performance optimization, and mentoring women in tech.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              We are a collective of brilliant women engineers and designers dedicated to building the future of the web.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:border-primary/20 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-4">
                <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors text-foreground/50 border border-border hover:border-primary shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors text-foreground/50 border border-border hover:border-primary shadow-sm">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors text-foreground/50 border border-border hover:border-primary shadow-sm">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
