'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Search, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    title: 'Fast Delivery & Performance',
    description: 'We optimize every byte. Our websites load lightning-fast, ensuring lower bounce rates and higher conversions.',
    icon: Zap,
  },
  {
    title: 'Clean, Reusable Code',
    description: 'Built with Next.js and Tailwind CSS, our codebases are scalable, secure, and incredibly easy to maintain.',
    icon: ShieldCheck,
  },
  {
    title: 'SEO Optimized from Day 1',
    description: 'We follow technical SEO best practices out of the box so your website ranks higher on search engines.',
    icon: Search,
  },
  {
    title: 'Dedicated Support',
    description: 'We don’t just launch and leave. We provide ongoing support to keep your site updated and running smoothly.',
    icon: HeadphonesIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              Why Choose <span className="text-primary">CodeHer</span>?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              We combine modern technologies with an empowering mission. When you work with CodeHer, you get unparalleled technical expertise entirely focused on your business growth.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{reason.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-border/50 bg-secondary/20 relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-accent/20 animate-[spin_20s_linear_infinite_reverse]" />
              
              <div className="bg-background border border-border rounded-2xl p-8 relative z-10 shadow-xl max-w-sm w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                    99.9% Uptime
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">Modern Technologies</h4>
                <div className="space-y-3">
                  <div className="h-2 bg-secondary rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]" />
                  </div>
                  <div className="h-2 bg-secondary rounded-full w-full overflow-hidden">
                    <div className="h-full bg-accent w-[90%]" />
                  </div>
                  <div className="h-2 bg-secondary rounded-full w-full overflow-hidden">
                    <div className="h-full bg-purple-400 w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
