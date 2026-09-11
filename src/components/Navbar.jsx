import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll handler to make navbar glassy on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page navigation
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Loans', path: '/loans' },
    { label: 'Mutual Funds', path: '/mutual-funds' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'Contact', path: '/contact' },
  ];

  // const servicesLinks = [
  //   { label: 'Customized Loans', path: '/loans' },
  //   { label: 'Mutual Funds Advisory', path: '/mutual-funds' },
  //   { label: 'Insurance Solutions', path: '/insurance' },
  // ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Company Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white group-hover:bg-brand-blue transition-all duration-300">
            <img src="/logo.png" alt="" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-navy-dark uppercase">
            True<span className="text-brand-blue group-hover:text-navy-medium transition-colors">Cred</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/about' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            About
          </Link>

        

          <Link
            to="/loans"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/loans' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            Loans
          </Link>
          <Link
            to="/mutual-funds"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/mutual-funds' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            Mutual Funds
          </Link>
          <Link
            to="/insurance"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/insurance' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            Insurance
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-semibold transition-colors duration-300 ${
              location.pathname === '/contact' ? 'text-brand-blue font-bold' : 'text-navy-dark/70 hover:text-brand-blue'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" size="sm" showArrow>
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-navy-dark hover:text-brand-blue focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-white z-40 lg:hidden flex flex-col justify-between border-t border-slate-100 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 space-y-4 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-base font-semibold border-b border-slate-50 transition-colors ${
                location.pathname === link.path ? 'text-brand-blue font-bold' : 'text-navy-dark/80 hover:text-brand-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <Button to="/contact" variant="primary" className="w-full">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}
