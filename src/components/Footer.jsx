import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Twitter, Linkedin, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-400 pt-16 pb-8 border-t border-white/5 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Company Intro */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-brand-blue transition-all duration-300">
                <Award className="w-5 h-5 text-accent-gold-bright" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white uppercase">
                True<span className="text-brand-blue group-hover:text-white transition-colors">Cred</span>
              </span>
            </Link>
            
            <p className="text-xs md:text-sm leading-relaxed text-slate-400 max-w-sm">
              TrueCred is a leading financial advisory desk based in India. We specialize in structured loan facilitation, mutual funds wealth allocation, and customized wealth protection services.
            </p>

            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="mailto:support@credveda.co.in" className="hover:text-white transition-colors">support@truecred.co.in</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Level 7, Prestige Tech Center, Outer Ring Rd, Bengaluru, KA 560103</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><span className="text-slate-600 cursor-not-allowed">Careers (Hiring)</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">Privacy Policy</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">Terms & Conditions</span></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/loans" className="hover:text-white transition-colors">Customized Loans</Link></li>
              <li><Link to="/mutual-funds" className="hover:text-white transition-colors">Mutual Funds</Link></li>
              <li><Link to="/insurance" className="hover:text-white transition-colors">Insurance Solutions</Link></li>
            </ul>
          </div>

          {/* Column 4: Loan Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Loan Products</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/loans" className="hover:text-white transition-colors">Personal Loan</Link></li>
              <li><Link to="/loans" className="hover:text-white transition-colors">Business Loan</Link></li>
              <li><Link to="/loans" className="hover:text-white transition-colors">Home Loan</Link></li>
              <li><Link to="/loans" className="hover:text-white transition-colors">Education Loan</Link></li>
              <li><Link to="/loans" className="hover:text-white transition-colors">MSME Loan</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} TrueCred. All rights reserved. Made in India.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-blue hover:text-white rounded-lg transition-all text-slate-400" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-blue hover:text-white rounded-lg transition-all text-slate-400" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-blue hover:text-white rounded-lg transition-all text-slate-400" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-blue hover:text-white rounded-lg transition-all text-slate-400" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
