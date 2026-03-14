'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Header & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to <span className="text-primary">Build?</span>
            </h2>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed max-w-md">
              Let's engineer your next digital success. Fill out the form below, and our team will get back to you with a tailored technical proposal within 24 hours.
            </p>

            <div className="p-8 bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-4">What happens next?</h3>
              <ol className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  We review your project details and requirements.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  Our lead engineers draft an initial architecture and timeline.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  We schedule a quick discovery call to align goals.
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background border border-border p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-foreground/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-foreground/40"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-foreground/80">Estimated Budget</label>
                  <select
                    id="budget"
                    className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground appearance-none"
                  >
                    <option value="">Select a range</option>
                    <option value="under5k">Under $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-foreground/80">Expected Timeline</label>
                  <select
                    id="timeline"
                    className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground appearance-none"
                  >
                    <option value="">Select a timeline</option>
                    <option value="1month">&lt; 1 Month</option>
                    <option value="1-3months">1-3 Months</option>
                    <option value="3-6months">3-6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="description" className="text-sm font-medium text-foreground/80">Project Description</label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                  placeholder="Tell us about your project goals, features needed, and any references..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-medium text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {formStatus === 'idle' && (
                  <>Send Request <Send className="w-5 h-5" /></>
                )}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Request Sent Successfully!'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
