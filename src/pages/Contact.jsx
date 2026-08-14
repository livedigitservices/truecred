import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const breadcrumbs = [{ label: 'Contact Us', path: '/contact' }];

  return (
    <div className="grow">
      <PageHero
        title="Let's start your next financial move."
        highlightedWord="start"
        description="Connect with our advisory desk for customized loans, credit reports auditing, and corporate statutory compliance."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-blue block mb-3">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-extrabold text-navy-dark leading-tight tracking-tight">
                  Reach out to our Hyderabad office
                </h2>
                <p className="text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                  We look forward to structuring your finances. Drop us an email, give us a call, or fill out the consultation request on the right.
                </p>
              </div>

              <div className="w-12 h-1 bg-accent-gold rounded-full" />

              {/* Specific detail channels */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Support Hotline</span>
                    <a href="tel:+917993054750" className="text-base font-bold text-navy-dark hover:text-brand-blue transition-colors mt-0.5 block">
                      +91 7993054750
                    </a>
                    <p className="text-[11px] text-slate-400 font-medium">Toll-free across India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Email Inquiries</span>
                    <a href="mailto:srikanth10290@gmail.com" className="text-sm font-semibold text-navy-dark hover:text-brand-blue transition-colors mt-0.5 block">
                      srikanth10290@gmail.com
                    </a>
                    <p className="text-[11px] text-slate-400 font-medium">For details and audit support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Office Address</span>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed font-semibold">
                      No.6-50, SN colony, Ramachandra puram, Hyderabad -502032
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Working Hours</span>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed font-semibold">
                      Monday — Saturday: 9:30 AM — 6:30 PM
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">Sundays & Public Holidays Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Google map mock wrapper */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="w-full h-80 rounded-3xl bg-slate-200 overflow-hidden relative shadow-inner flex items-center justify-center text-slate-400">
            <div className="absolute inset-0 bg-cover bg-center filter opacity-60 grayscale" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&h=400')` }} />
            <div className="absolute inset-0 bg-navy-medium/10" />
            <div className="relative z-10 text-center bg-white rounded-2xl p-5 shadow-lg border border-slate-100 max-w-xs">
              <MapPin className="w-8 h-8 text-brand-blue mx-auto mb-2" />
              <h4 className="text-xs font-bold text-navy-dark">TrueCred Headquarters</h4>
              <p className="text-[10px] text-text-muted mt-1 leading-normal">Level 7, Prestige Tech Center, Outer Ring Rd, Bellandur, Bengaluru</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
