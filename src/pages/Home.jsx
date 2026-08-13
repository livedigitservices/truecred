import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck,
  Landmark,
  FileText,
  HeartPulse,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Lock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Calculator
} from 'lucide-react';

import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import LoanCard from '../components/LoanCard';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

import { services } from '../data/services';
import { loans } from '../data/loans';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const dashboardRef = useRef(null);

  // Floating badges refs
  const badge1 = useRef(null);
  const badge2 = useRef(null);
  const badge3 = useRef(null);
  const badge4 = useRef(null);

  // Testimonial Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mutual Funds Refactor

  useEffect(() => {
    // 1. Hero Intro GSAP Animation
    const ctx = gsap.context(() => {
      // Fade in up items
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        dashboardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      // Float effect for badges
      gsap.to(badge1.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 2.5,
        delay: 0.2,
      });
      gsap.to(badge2.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 2.2,
        delay: 0.3,
      });
      gsap.to(badge3.current, {
        y: -8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 2,
        delay: 0.4,
      });
      gsap.to(badge4.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 2.7,
        delay: 0.1,
      });

      // 2. Viewport Scroll Reveal animations
      const reveals = gsap.utils.toArray('.scroll-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      const cards = gsap.utils.toArray('.card-reveal');
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            delay: (idx % 4) * 0.12
          }
        );
      });
    }); // document-wide animations (no scope limit)

    return () => ctx.revert();
  }, []);

  // Carousel handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 >= testimonials.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <div className="flex-grow pt-16">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-[#F2F6FA] to-white pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
        {/* Abstract vector shapes */}
        <div className="absolute top-0 right-0 w-[45%] h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-brand-blue/30">
            <path d="M100 0 C70 40 80 80 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-7 space-y-6 text-left relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-bold tracking-widest text-[10px] rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FINANCIAL SOLUTIONS • BUILT AROUND YOU</span>
              </span>

              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-dark leading-tight tracking-tight">
                Financial clarity for the decisions that{' '}
                <span className="text-brand-blue relative inline-block">
                  move your life forward.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent-gold/40 -z-10 rounded-full"></span>
                </span>
              </h1>

              <p ref={textRef} className="text-sm md:text-base leading-relaxed text-text-muted max-w-xl">
                CredVeda is your dedicated financial desk, helping you navigate customized loans, mutual funds wealth advisory, and robust asset protection under one secure banner.
              </p>

              <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button to="/contact" variant="primary" showArrow>
                  Get Free Consultation
                </Button>
                <Button to="/mutual-funds" variant="outline">
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Right side graphical dashboard + floaters */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div ref={dashboardRef} className="relative z-10 w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img
                  src="/hero_dashboard.jpg"
                  alt="CredVeda premium financial dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div
                ref={badge1}
                className="absolute top-10 -left-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 animate-none pointer-events-none"
              >
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">Loan Approved</h4>
                  <p className="text-[10px] text-emerald-500 font-semibold mt-0.5">Disbursement Ready</p>
                </div>
              </div>

              <div
                ref={badge2}
                className="absolute bottom-16 -right-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 pointer-events-none"
              >
                <div className="p-2 bg-cyan-50 text-cyan-500 rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">SIP Active</h4>
                  <p className="text-[10px] text-cyan-500 font-semibold mt-0.5">ROI: 12% - 15%*</p>
                </div>
              </div>

              <div
                ref={badge3}
                className="absolute -top-6 right-10 z-20 bg-navy-dark text-white rounded-2xl p-3.5 shadow-xl border border-white/5 flex items-center gap-2.5 pointer-events-none"
              >
                <span className="text-xs font-bold text-accent-gold-bright">₹25L Funding</span>
                <span className="w-1.5 h-1.5 bg-accent-gold-bright rounded-full"></span>
                <span className="text-[9px] uppercase tracking-wider text-slate-300">MSME Scheme</span>
              </div>

              <div
                ref={badge4}
                className="absolute -bottom-8 left-12 z-20 bg-white rounded-2xl py-2.5 px-4 shadow-xl border border-slate-50 flex items-center gap-2 pointer-events-none"
              >
                <Lock className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-[10px] font-bold text-navy-dark tracking-wide uppercase">Secure & Confidential</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-slate-100 bg-white py-10 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trusted guidance across your financial journey
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            <div className="card-reveal">
              <StatCard value="5000" suffix="+" label="Clients Assisted" />
            </div>
            <div className="card-reveal">
              <StatCard value="100" suffix="Cr+" label="Loans Facilitated" />
            </div>
            <div className="card-reveal">
              <StatCard value="98" suffix="%" label="Satisfaction Rate" />
            </div>
            <div className="card-reveal">
              <StatCard value="50" suffix="+" label="Financial Partners" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / INTRODUCTION */}
      <section className="py-20 md:py-28 bg-[#FDFDFD]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side text headings */}
            <div className="lg:col-span-6 space-y-6 text-left scroll-reveal">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                More than financial services. A partner for your next move.
              </h2>
              
              <div className="w-16 h-1 bg-accent-gold rounded-full" />
              
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                At CredVeda, we believe secure financial growth isn't just about matching transactions. It's about structuring long-term trust. We work alongside individuals and corporate business owners, ensuring your funding is organized, your liabilities are insured, and your taxation credentials remain fully compliant.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  'Personalized financial planning and profiling',
                  'Vast network of over 50 banking partner institutions',
                  'Fully transparent advisory fees and compliance checks',
                  'Comprehensive pre-qualification and dispute resolutions',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-text-dark font-medium gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button to="/about" variant="outline" showArrow>
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Right side professional Indian business meeting image */}
            <div className="lg:col-span-6 scroll-reveal">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="/about_advisory.jpg"
                  alt="CredVeda advisors meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="OUR SERVICE SPECTRUM"
            title="One advisory desk. Multiple financial solutions."
            subtitle="Explore our specialized services mapped out to address your financing, credit improvement, regulatory, and safety requirements."
            className="scroll-reveal"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {services.map((svc) => (
              <div key={svc.id} className="card-reveal flex flex-col h-full">
                <ServiceCard
                  number={svc.number}
                  title={svc.title}
                  description={svc.description}
                  icon={svc.icon}
                  path={svc.path}
                  ctaText={svc.ctaText}
                  features={svc.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOAN SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="LOAN PORTFOLIO"
            title="Find the financing that fits your next chapter."
            subtitle="Whether it is personal milestones or scaling commercial operations, we match you with the right loan terms."
            className="scroll-reveal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loans.slice(0, 4).map((loan) => (
              <div key={loan.id} className="card-reveal flex flex-col h-full">
                <LoanCard
                  title={loan.title}
                  shortDescription={loan.shortDescription}
                  benefit={loan.benefit}
                  interestRate={loan.interestRate}
                  icon={loan.icon}
                  to={`/loans`}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Button to="/loans" variant="primary" showArrow>
              View All Loan Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FEATURED LOAN SECTION */}
      <section className="py-20 md:py-28 bg-bg-light border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphics */}
            <div className="lg:col-span-6 relative scroll-reveal">
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 space-y-6">
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-dark">Pre-Application Advisory</h4>
                    <p className="text-xs text-text-muted mt-0.5">Optimize eligibility prior to banking submission</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-semibold text-text-muted">
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
                    <span>Target Principal</span>
                    <span className="text-navy-dark font-bold">₹25,00,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
                    <span>Indicative Interest</span>
                    <span className="text-brand-blue font-bold">8.4% p.a. (Home)</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
                    <span>Structured Tenure</span>
                    <span className="text-navy-dark font-bold">20 Years</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact" className="w-full py-3.5 bg-navy-dark hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl block text-center transition-all shadow-sm">
                    Calculate Custom Eligibility
                  </Link>
                </div>
              </div>
            </div>

            {/* Right content info */}
            <div className="lg:col-span-6 text-left space-y-6 scroll-reveal">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">
                SMARTER BORROWING
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                Structure your loan before you submit your application.
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                Applying directly to banks without checking criteria can lead to rejections, which negatively impacts your credit rating. Our consultants evaluate your profile against multiple bank guidelines first, ensuring a clean pre-screening process.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Better lender matching',
                  'Document preparation',
                  'Eligibility assessment',
                  'Application support',
                  'Follow-up assistance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 text-xs md:text-sm font-semibold text-navy-dark">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button to="/loans" variant="secondary" showArrow>
                  Check Eligibility Guidelines
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (DARK NAVY SECTION) */}
      <section className="relative py-20 md:py-28 bg-navy-dark text-white overflow-hidden rounded-[3rem] mx-6 md:mx-12">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-gold-bright mb-3 block">
              OUR PLEDGE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Why clients choose CredVeda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Personalized Guidance',
                desc: 'We do not sell cookie-cutter packages. Every loan, credit solution, or compliance audit is mapped directly to your current financial position.'
              },
              {
                num: '02',
                title: 'Transparent Process',
                desc: 'No hidden processing fees, no unexpected bank charges. We layout all calculations, interest structures, and regulatory parameters beforehand.'
              },
              {
                num: '03',
                title: 'Expert Advisors',
                desc: 'Our team comprises experienced loan facilitators and wealth allocators who stay updated on the latest policy rules.'
              },
              {
                num: '04',
                title: 'End-to-End Support',
                desc: 'From checking your eligibility criteria, selecting SIP strategies, planning tax savers, up to final fund disbursement - we handle it all.'
              }
            ].map((feature, i) => (
              <div key={i} className="card-reveal text-left space-y-4 border-l border-white/10 pl-6 relative">
                <span className="text-4xl font-extrabold text-accent-gold font-heading block">
                  {feature.num}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section className="py-20 md:py-28 bg-[#FDFDFD]">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="OUR WORKFLOW"
            title="From first conversation to final approval."
            subtitle="We maintain an organized, swift, and completely stress-free process to align your applications."
            className="scroll-reveal"
          />

          {/* Timeline Layout */}
          <div className="relative scroll-reveal">
            {/* Line connecting steps (Desktop only) */}
            <div className="hidden lg:block absolute top-[57px] left-[12%] right-[12%] h-0.5 bg-slate-100 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Free Consultation',
                  desc: 'Fill out our review form or call us to explain your financial requirements and parameters.'
                },
                {
                  step: '02',
                  title: 'Profiling & Matching',
                  desc: 'We analyze your banking records, risk tolerance, and asset portfolios to pre-screen gaps.'
                },
                {
                  step: '03',
                  title: 'Application & Setup',
                  desc: 'We submit your polished applications to lenders or set up systematic fund investments paperlessly.'
                },
                {
                  step: '04',
                  title: 'Approval & Growth',
                  desc: 'Congratulations! Your loan is disbursed, mutual funds compound, or insurance structures lock in.'
                }
              ].map((proc, i) => (
                <div key={i} className="text-center lg:text-left space-y-4">
                  <div className="mx-auto lg:mx-0 w-14 h-14 bg-white text-brand-blue border-2 border-slate-100 rounded-full flex items-center justify-center font-bold font-heading text-lg shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    {proc.step}
                  </div>
                  <h3 className="text-base font-bold text-navy-dark pt-2">
                    {proc.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-text-muted max-w-xs mx-auto lg:mx-0">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. MUTUAL FUNDS & WEALTH ADVISORY */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side Graphic */}
            <div className="lg:col-span-5 flex justify-center scroll-reveal">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 w-full max-w-sm text-left">
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200/60">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-dark">SIP Future Planner</h4>
                    <p className="text-xs text-text-muted mt-0.5">Wealth compounder simulation</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-semibold text-text-muted">
                  <div className="flex items-center justify-between p-3.5 bg-white rounded-xl shadow-sm border border-slate-100">
                    <span>Monthly SIP</span>
                    <span className="text-navy-dark font-bold">₹10,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-white rounded-xl shadow-sm border border-slate-100">
                    <span>Earning Duration</span>
                    <span className="text-navy-dark font-bold">15 Years</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-white rounded-xl shadow-sm border border-slate-100">
                    <span>Expected Returns (12%)</span>
                    <span className="text-brand-blue font-bold">₹50,45,760</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/mutual-funds" className="w-full py-3.5 bg-navy-dark hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl block text-center transition-all shadow-sm">
                    Simulate Your SIP Returns
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side Information */}
            <div className="lg:col-span-7 text-left space-y-6 scroll-reveal">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">
                WEALTH ADVISORY
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                Plan your future. Let compounding do the rest.
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                Investing systematically through Mutual Fund SIPs helps you capture long-term equity growth, average market entry costs, and achieve key lifecycle milestones securely.
              </p>

              <div className="space-y-3.5">
                {[
                  'Customized risk profiling (Conservative, Moderate, Aggressive)',
                  'Curated portfolios spanning Large-Cap, Mid-Cap, and Index Funds',
                  'ELSS Tax-Saving investments for maximum returns under 80C',
                  'Periodic rebalancing to protect and secure your capital gains'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-navy-dark">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button to="/mutual-funds" variant="primary" showArrow>
                  Start Wealth Planner
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. INSURANCE SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="WEALTH PROTECTION"
            title="Secure what matters. Protect your legacy."
            subtitle="Compare coverages from over 20 top insurance providers. We design policies to shield your family, business, and assets from liabilities."
            className="scroll-reveal"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Life Insurance',
                desc: 'Shield your family\'s future with custom Term, Endowment, and savings plans.',
                img: '/insurance_life.jpg'
              },
              {
                title: 'Health Insurance',
                desc: 'Cashless hospitalisation networks, critical illness checks, and family floater policies.',
                img: '/insurance_health.jpg'
              },
              {
                title: 'Motor Insurance',
                desc: 'Comprehensive protection packages for personal cars, commercial fleets, and two-wheelers.',
                img: '/insurance_motor.jpg'
              },
              {
                title: 'Business Insurance',
                desc: 'Asset fire insurance, transit liabilities, plant breakdown, and keyman safety schemes.',
                img: '/insurance_business.jpg'
              }
            ].map((ins, i) => (
              <div
                key={i}
                className="card-reveal group relative h-[360px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Background Image with overlay */}
                <img
                  src={ins.img}
                  alt={ins.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Info Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left space-y-2.5 z-10">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {ins.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {ins.desc}
                  </p>
                  <Link
                    to="/insurance"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold-bright uppercase tracking-wider"
                  >
                    <span>View Coverages</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Button to="/insurance" variant="outline">
              Review Your Coverage Options
            </Button>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 scroll-reveal">
            <div className="text-left">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue block mb-3">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                Trusted by people building what's next.
              </h2>
            </div>
            
            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2.5 mt-6 md:mt-0">
              <button
                onClick={prevSlide}
                className="p-3 bg-white text-navy-dark border border-slate-100 rounded-full hover:bg-brand-blue hover:text-white transition-colors cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white text-navy-dark border border-slate-100 rounded-full hover:bg-brand-blue hover:text-white transition-colors cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial slider grid */}
          <div className="relative scroll-reveal">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 0}px)` }} // Since we do simple index slices, we can just slice
            >
              {testimonials.slice(currentSlide, currentSlide + 3).map((item) => (
                <div key={item.id} className="w-full card-reveal">
                  <TestimonialCard
                    name={item.name}
                    role={item.role}
                    location={item.location}
                    rating={item.rating}
                    avatar={item.avatar}
                    content={item.content}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="FAQ GUIDE"
            title="Have questions? We have answers."
            subtitle="Review answers to standard onboarding queries. For specific queries, reach out to our desk."
            className="scroll-reveal"
          />

          <div className="scroll-reveal">
            <FAQ faqs={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* 14. CONTACT / CONSULTATION FORM SECTION */}
      <section id="consultation-form" className="py-20 md:py-28 bg-bg-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Contact details */}
            <div className="lg:col-span-5 text-left space-y-6 scroll-reveal">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue block">
                GET IN TOUCH
              </span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                Let's talk about your next financial move.
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                Our onboarding desk is operational Monday to Saturday from 9:30 AM to 6:30 PM. Complete the request form and a dedicated specialist will assist you.
              </p>

              <div className="w-12 h-0.5 bg-accent-gold rounded-full" />

              <div className="space-y-4 pt-4 text-sm font-semibold text-navy-dark">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Support Hotline</span>
                  <a href="tel:+919876543210" className="hover:text-brand-blue transition-colors mt-0.5 block text-lg font-bold font-heading">+91 98765 43210</a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Email Inquiries</span>
                  <a href="mailto:support@credveda.co.in" className="hover:text-brand-blue transition-colors mt-0.5 block">support@truecred.co.in</a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Office Address</span>
                  <p className="text-xs text-text-muted mt-0.5 leading-relaxed font-normal">Level 7, Prestige Tech Center, Outer Ring Road, Bellandur, Bengaluru, KA 560103</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 scroll-reveal">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
