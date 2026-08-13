import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import CTA from '../components/CTA';
import { ShieldCheck, Target, BadgeCheck, Users, Lock, Milestone } from 'lucide-react';

export default function About() {
  const breadcrumbs = [{ label: 'About Us', path: '/about' }];

  return (
    <div className="flex-grow">
      <PageHero
        title="We are building trust in financial services."
        highlightedWord="trust"
        description="Learn more about our team, core corporate values, security benchmarks, and how we are restructuring loan and tax services for Indian consumers and business owners."
        breadcrumbs={breadcrumbs}
      />

      {/* Overview / Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-blue block">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark leading-tight tracking-tight">
                An organized advisory desk designed for the modern economy.
              </h2>
              <div className="w-12 h-1 bg-accent-gold rounded-full" />
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                CredVeda was established to resolve a persistent friction in the Indian financial space: complexity. Navigating multiple banking rules for business loans, auditing credit score inaccuracies, or filing complex ROC compliance returns should not drain your core productivity.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                We bring certified expertise and an end-to-end management workflow under one unified advisory desk. By mapping credit analytics with over 50 leading banks and NBFCs, we secure optimal terms for our clients while keeping applications fully aligned.
              </p>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-md">
                <img
                  src="/about_advisory.jpg"
                  alt="CredVeda corporate briefing"
                  className="rounded-2xl shadow-sm object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-navy-dark text-white py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            <StatCard value="5000" suffix="+" label="Satisfied Clients" light />
            <StatCard value="100" suffix="Cr+" label="Loans Disbursed" light />
            <StatCard value="50" suffix="+" label="Banking Networks" light />
            <StatCard value="15" suffix="+" label="Senior CA & CS Experts" light />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="OUR FOUNDATION"
            title="Values that direct our consultations."
            subtitle="We prioritize long-term stability and absolute transparency over transactional metrics."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Client Trust & Security',
                desc: 'We enforce bank-grade data security protocols. Your personal financial documentation and credit reports remain encrypted and completely confidential.'
              },
              {
                icon: Target,
                title: 'Uncompromised Transparency',
                desc: 'We present interest rates, processing timelines, and advisory terms upfront. There are no hidden fees or unexpected commission structures.'
              },
              {
                icon: BadgeCheck,
                title: 'Professional Expertise',
                desc: 'Every advisor at our desk is a credentialed specialist. We manage complex MCA regulations and credit audit disputes with high precision.'
              }
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-left space-y-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark">{val.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-text-muted">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion or CTA */}
      <CTA />
    </div>
  );
}
