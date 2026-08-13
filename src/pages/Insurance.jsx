import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { ShieldAlert, CheckCircle2, FileHeart, Heart, Sparkles, Truck, Activity } from 'lucide-react';

export default function Insurance() {
  const breadcrumbs = [{ label: 'Insurance', path: '/insurance' }];

  const [age, setAge] = useState(30);
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [liabilities, setLiabilities] = useState(1500000); // 15L
  const [existingSavings, setExistingSavings] = useState(500000); // 5L

  const calculateLifeCover = () => {
    // HLV Calculation
    const yearsOfEarning = Math.max(5, 60 - age);
    const futureExpenses = monthlyExpenses * 12 * yearsOfEarning;
    const coverRequired = Math.max(2500000, futureExpenses + liabilities - existingSavings);

    // Approximate Monthly premium for term life of this amount
    const ageFactor = 0.00045 + Math.pow(Math.max(0, age - 18), 1.8) * 0.000018;
    const annualPremium = coverRequired * ageFactor;
    const monthlyPremium = annualPremium / 12;

    return {
      coverRequired,
      monthlyPremium: Math.round(monthlyPremium),
      yearsOfEarning
    };
  };

  const coverResult = calculateLifeCover();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="flex-grow">
      <PageHero
        title="Review coverage. Protect your assets."
        highlightedWord="Protect"
        description="Life, health, motor, and corporate assets protection coverages from India's top 20 IRDAI-registered insurance providers."
        breadcrumbs={breadcrumbs}
      />

      {/* Insurance Showcase Grid */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="RISK PROTECTION"
            title="Premium coverages designed around you"
            subtitle="Secure your family, wellness, and business properties against unexpected liabilities."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                title: 'Term Life Insurance',
                icon: FileHeart,
                desc: 'Protect your family\'s financial future. Obtain high coverages (e.g. ₹1Cr Term life) with customizable riders (critical illness, accidental death, premium waivers).',
                benefit: 'Pure risk cover at extremely low premiums',
                eligibility: 'Ages 18 to 65 with verifiable income proofs.',
                bgImg: '/insurance_life.jpg'
              },
              {
                title: 'Wellness & Health Insurance',
                icon: Heart,
                desc: 'Get access to cashless hospitalisation at 10,000+ top Indian hospitals. Includes family floater plans, pre & post-hospitalisation costs, day-care treatments, and maternity coverages.',
                benefit: 'Direct cashless claim settlement',
                eligibility: 'Individual, family, or corporate employee policies.',
                bgImg: '/insurance_health.jpg'
              },
              {
                title: 'Comprehensive Motor Insurance',
                icon: Truck,
                desc: 'Secure your cars and two-wheelers. Offers complete third-party liability cover and own-damage protection against accidents, theft, natural disasters, and key replacements.',
                benefit: 'Fast road-side assistance & digital claims',
                eligibility: 'All personal, commercial, and fleet vehicles.',
                bgImg: '/insurance_motor.jpg'
              },
              {
                title: 'Corporate & Asset Protection',
                icon: ShieldAlert,
                desc: 'Shield your commercial premises, factories, machinery, and inventory against fire, burglary, or electrical breakdown. We also structure liability and Keyman insurances.',
                benefit: 'Tailored risk auditing & underwriting',
                eligibility: 'Registered businesses, warehouses, and factories.',
                bgImg: '/insurance_business.jpg'
              }
            ].map((ins, i) => {
              const Icon = ins.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-[#F8FAFC] border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={ins.bgImg}
                      alt={ins.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2942] to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="p-2.5 bg-white text-navy-dark rounded-xl shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-heading">{ins.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                      {ins.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block">Primary Benefit</span>
                        <span className="text-xs font-bold text-navy-dark mt-0.5 block">{ins.benefit}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block">Target Audience</span>
                        <span className="text-xs font-bold text-brand-blue mt-0.5 block">{ins.eligibility}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button to="/contact" variant="outline" className="w-full">
                        Request Quote Review
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Claim support process */}
      <section className="py-16 md:py-24 bg-bg-light border-y border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="CLAIM ASSISTANCE"
            title="Our priority when you need us most"
            subtitle="Purchasing coverage is only half the battle. We assist you during claims, managing all verification documentation with insurance providers."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Claim Intimation', desc: 'Call us immediately upon event occurrence. We register the claim log and verify policy terms.' },
              { num: '02', title: 'Document Coordination', desc: 'We collect hospital discharge sheets, repair bills, or police logs to ensure zero anomalies.' },
              { num: '03', title: 'Verification & Settlement', desc: 'Our underwriters coordinate directly with third-party surveyors for cashless payouts.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <span className="text-2xl font-black text-brand-blue font-heading block">{step.num}</span>
                <h3 className="text-base font-bold text-navy-dark">{step.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Insurance Needs Calculator */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="SAFETY RATIOS"
            title="Term Life Coverage Estimator"
            subtitle="Understand how much life insurance cover your family needs to secure their current lifestyle."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Your Current Age</span>
                  <span className="text-brand-blue font-bold font-heading">{age} Years</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="65"
                  step="1"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <span className="text-[10px] text-slate-400 block mt-1">Assuming standard retirement at age 60</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Monthly Household Expenses</span>
                  <span className="text-brand-blue font-bold font-heading">{formatCurrency(monthlyExpenses)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="300000"
                  step="2000"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Outstanding Loans / Liabilities</span>
                  <span className="text-brand-blue font-bold font-heading">{formatCurrency(liabilities)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={liabilities}
                  onChange={(e) => setLiabilities(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Active Savings & Investments</span>
                  <span className="text-brand-blue font-bold font-heading">{formatCurrency(existingSavings)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={existingSavings}
                  onChange={(e) => setExistingSavings(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-navy-dark text-white rounded-3xl p-8 border border-white/5 shadow-xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Human Life Value Result</span>
                <span className="inline-block text-xs font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended Coverage
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Estimated Term Cover Required</span>
                  <div className="text-3xl font-black font-heading text-white">{formatCurrency(coverResult.coverRequired)}</div>
                  <span className="text-[10px] text-slate-500 block mt-1">Based on {coverResult.yearsOfEarning} active working years left</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Estimated Monthly Premium starts from</span>
                  <div className="text-xl font-bold text-accent-gold-bright font-heading">
                    ₹{coverResult.monthlyPremium.toLocaleString('en-IN')} / month*
                  </div>
                  <span className="text-[9px] text-slate-500 block mt-1">*Tax rates and premium loaded for healthy, non-smokers.</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed italic">
                "Our calculation factors in annual expenses to cover household needs, adds outstanding home/business liabilities to protect assets, and deducts active liquid savings."
              </p>

              <div className="pt-2">
                <Button to="/contact" variant="accent" className="w-full">
                  Compare Insurers & Get Quote
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Insurance FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="POLICY FAQS"
            title="Insurance FAQ"
          />

          <FAQ
            faqs={[
              { id: 1, question: 'What is cashless hospitalisation and how does it work?', answer: 'Under cashless hospitalisation, the insurer settles medical bills directly with the network hospital. You only pay for non-medical expenses (consumables/registration). You must intimate the insurer at least 48 hours prior to planned hospitalisation or within 24 hours of emergency admissions.' },
              { id: 2, question: 'Why is Term Life preferred over Endowment plans?', answer: 'Term life insurance is pure protection without investment returns, allowing you to secure a high life cover (e.g. ₹1Cr) for a very low premium. Endowment plans mix investment and life insurance, but offer lower coverages and lower returns compared to mutual funds.' },
              { id: 3, question: 'What is Zero Depreciation in Motor Insurance?', answer: 'Zero Depreciation is an add-on cover. Standard policies subtract depreciation costs on plastic, rubber, and glass parts replaced after an accident. Zero Dep ensures you get the full claim amount without depreciation deductions.' }
            ]}
          />
        </div>
      </section>

      <CTA />
    </div>
  );
}
