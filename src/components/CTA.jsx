import React from 'react';
import Button from './Button';
import { PhoneCall } from 'lucide-react';

export default function CTA({ className = '' }) {
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden rounded-[3rem] mx-6 md:mx-12 my-12 bg-gradient-navy ${className}`}>
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle abstract financial graphics (glowing circular lines) */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-blue/15 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-72 h-72 bg-accent-gold/10 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-accent-gold-bright mb-4 block">
          READY TO START?
        </span>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
          Let's put your financial plans into motion.
        </h2>
        
        <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-xl mx-auto mb-10">
          Talk to an expert and understand your options before making your next financial decision. We offer transparent guidance with end-to-end support.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/contact" variant="accent" showArrow>
            Get Free Consultation
          </Button>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 text-white hover:text-accent-gold-bright transition-colors text-sm font-semibold border border-white/10 hover:border-accent-gold-bright px-6 py-3 rounded-full hover:bg-white/5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call an Expert</span>
          </a>
        </div>
      </div>
    </section>
  );
}
