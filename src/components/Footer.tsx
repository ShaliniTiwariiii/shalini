import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight">CodeHer</span>
            </Link>
            <p className="text-foreground/70 max-w-sm mt-4">
              CodeHer – Empowering Women, Building the Web. We build scalable, fast, and beautiful websites for modern businesses.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all text-foreground/70">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all text-foreground/70">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all text-foreground/70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all text-foreground/70">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Business Websites</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">E-Commerce</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Real Estate Portals</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">SEO Optimization</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/70">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:hello@codeher.com" className="hover:text-primary transition-colors">
                  hello@codeher.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} CodeHer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
