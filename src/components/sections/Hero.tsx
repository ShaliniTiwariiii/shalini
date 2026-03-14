'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top-Tier Web Development
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Powerful Websites</span> for Modern Businesses
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              CodeHer builds fast, scalable, and beautiful websites tailored for startups, real estate, and local businesses. Empowering women in tech to engineer your digital success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get Your Website <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex justify-center items-center gap-2 bg-background border-2 border-border hover:bg-secondary/50 text-foreground px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-md hover:-translate-y-1"
              >
                <Play className="w-5 h-5" /> View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105 blur-lg" />
              <Image
                src="/hero-img.png"
                alt="Women developing a modern website"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
