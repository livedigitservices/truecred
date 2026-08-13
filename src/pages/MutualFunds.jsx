import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { TrendingUp, CheckCircle2, CircleHelp, Coins, BarChart3, LineChart } from 'lucide-react';

export default function MutualFunds() {
  const breadcrumbs = [{ label: 'Mutual Funds', path: '/mutual-funds' }];

  // Calculator State
  const [calcType, setCalcType] = useState('sip'); // sip or lumpsum
  const [amount, setAmount] = useState(10000); // monthly SIP or lumpsum principal
  const [rate, setRate] = useState(12); // expected rate of return (annual)
  const [years, setYears] = useState(15); // duration

  const calculateWealth = () => {
    const r = parseFloat(rate) || 0;
    const y = parseInt(years, 10) || 0;
    const amt = parseFloat(amount) || 0;

    let investedAmount = 0;
    let futureValue = 0;

    if (calcType === 'sip') {
      const monthlyRate = (r / 12) / 100;
      const months = y * 12;
      investedAmount = amt * months;
      if (monthlyRate > 0) {
        futureValue = amt * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      } else {
        futureValue = investedAmount;
      }
    } else {
      const annualRate = r / 100;
      investedAmount = amt;
      futureValue = amt * Math.pow(1 + annualRate, y);
    }

    const wealthGained = Math.max(0, futureValue - investedAmount);

    return {
      investedAmount: Math.round(investedAmount),
      wealthGained: Math.round(wealthGained),
      futureValue: Math.round(futureValue),
    };
  };

  const results = calculateWealth();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Helper for progress bar percentage
  const investPercent = results.futureValue > 0 
    ? Math.round((results.investedAmount / results.futureValue) * 100) 
    : 100;
  const gainPercent = 100 - investPercent;

  return (
    <div className="flex-grow">
      <PageHero
        title="Grow your wealth. Secure your milestone goals."
        highlightedWord="wealth"
        description="Invest systematically in leading equity, debt, and index mutual funds with customized asset allocation and risk profiling advisory."
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="WEALTH ADVISORY"
            title="Smarter asset allocation for long-term growth"
            subtitle="Don't leave your reserves idle. We evaluate risk profiles and design structured mutual fund portfolios mapped directly to your milestones."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: LineChart,
                title: 'Equity Mutual Funds',
                desc: 'Optimize capital appreciation by investing in large-cap, mid-cap, small-cap, or sector-specific equity funds. Ideal for aggressive risk appetites seeking long-term growth (5+ years).',
                returns: '12% - 18% p.a. expected'
              },
              {
                icon: Coins,
                title: 'Debt & Hybrid Funds',
                desc: 'Balance equity volatility with stable interest-bearing bonds, corporate deposits, and government debt papers. Hybrid models offer moderate growth with lower volatility.',
                returns: '7% - 10% p.a. expected'
              },
              {
                icon: BarChart3,
                title: 'ELSS Tax-Saving Schemes',
                desc: 'Reduce taxable income under Section 80C by investing in Equity Linked Savings Schemes. Features a low 3-year lock-in period while leveraging equity markets.',
                returns: '10% - 15% p.a. expected'
              }
            ].map((fund, idx) => {
              const Icon = fund.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-4 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-500 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-2xl w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-dark font-heading">{fund.title}</h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">{fund.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100/60 mt-6 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Est. Returns</span>
                    <span className="text-xs font-bold text-brand-blue">{fund.returns}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive SIP / Lumpsum Calculator */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="WEALTH PLANNER"
            title="Mutual Funds Wealth Calculator"
            subtitle="Simulate potential wealth creation values for monthly SIPs or single lumpsum investments."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md space-y-6">
              
              {/* Type selector */}
              <div>
                <label className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Investment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setCalcType('sip')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      calcType === 'sip'
                        ? 'bg-brand-blue border-brand-blue text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-navy-dark hover:bg-slate-100'
                    }`}
                  >
                    SIP (Monthly)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcType('lumpsum')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      calcType === 'lumpsum'
                        ? 'bg-brand-blue border-brand-blue text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-navy-dark hover:bg-slate-100'
                    }`}
                  >
                    Lumpsum (One-time)
                  </button>
                </div>
              </div>

              {/* Amount slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>{calcType === 'sip' ? 'Monthly Investment' : 'Single Investment Principal'}</span>
                  <span className="text-brand-blue font-bold font-heading">{formatCurrency(amount)}</span>
                </div>
                <input
                  type="range"
                  min={calcType === 'sip' ? '500' : '5000'}
                  max={calcType === 'sip' ? '150000' : '2000000'}
                  step={calcType === 'sip' ? '500' : '5000'}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              {/* Rate slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Expected Return Rate (p.a.)</span>
                  <span className="text-brand-blue font-bold font-heading">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              {/* Years slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Investment Duration</span>
                  <span className="text-brand-blue font-bold font-heading">{years} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-navy-dark text-white rounded-3xl p-8 border border-white/5 shadow-xl space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Portfolio Projection</span>
                <span className="inline-block text-xs font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/30 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Wealth Growth Estimate
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Total Future Value</span>
                  <div className="text-3xl md:text-4xl font-black font-heading text-white">{formatCurrency(results.futureValue)}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Total Invested</span>
                    <span className="text-sm font-bold font-heading text-white">{formatCurrency(results.investedAmount)}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Wealth Gain</span>
                    <span className="text-sm font-bold font-heading text-accent-gold-bright">{formatCurrency(results.wealthGained)}</span>
                  </div>
                </div>
              </div>

              {/* Progress ratio bar comparing Invested vs Gain */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>Invested ({investPercent}%)</span>
                  <span>Returns ({gainPercent}%)</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                  <div style={{ width: `${investPercent}%` }} className="bg-white/30 h-full transition-all duration-300" />
                  <div style={{ width: `${gainPercent}%` }} className="bg-accent-gold h-full transition-all duration-300" />
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed italic">
                "Calculated based on standard compound interest rates. Mutual fund investments are subject to market risks, read all scheme related documents carefully."
              </p>

              <div className="pt-2">
                <Button to="/contact" variant="accent" className="w-full">
                  Design Custom SIP Portfolio
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Advisory Workflow */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="OUR WORKFLOW"
            title="How we allocate your portfolio"
            align="center"
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-[55px] left-[15%] right-[15%] h-0.5 bg-slate-200" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 text-center lg:text-left">
              {[
                { step: '01', title: 'Risk Profiling', desc: 'We analyze your risk tolerance thresholds and investment goals (retirement, child education).' },
                { step: '02', title: 'Fund Selection', desc: 'Select high-performing mutual funds across large, mid, debt, and ELSS categories.' },
                { step: '03', title: 'SIP Setups', desc: 'Complete automated monthly mandates with your banks via paperless registries.' },
                { step: '04', title: 'Periodic Reviews', desc: 'Perform half-yearly audits to rebalance assets and lock-in returns.' }
              ].map((proc, i) => (
                <div key={i} className="space-y-3.5 max-w-xs mx-auto lg:mx-0">
                  <div className="mx-auto lg:mx-0 w-12 h-12 rounded-full bg-navy-dark text-white flex items-center justify-center font-bold text-sm font-heading">
                    {proc.step}
                  </div>
                  <h3 className="text-base font-bold text-navy-dark">{proc.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mutual Funds FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="WEALTH FAQS"
            title="Mutual Funds FAQ"
          />

          <FAQ
            faqs={[
              { id: 1, question: 'What is a Systematic Investment Plan (SIP)?', answer: 'A Systematic Investment Plan (SIP) is a method of investing a fixed sum of money at regular intervals (usually monthly) in a mutual fund. It helps in rupee cost averaging and disciplines wealth creation without trying to time market cycles.' },
              { id: 2, question: 'How is a lumpsum investment different from a SIP?', answer: 'A lumpsum investment is a one-time single investment of capital into a mutual fund. SIP is a recurring monthly investment. Lumpsum is suited when you receive a bonus or sell property, while SIP is best mapped to monthly salary flows.' },
              { id: 3, question: 'What are ELSS Mutual Funds?', answer: 'Equity Linked Savings Schemes (ELSS) are diversified equity mutual funds that offer tax deductions up to ₹1,50,000 under Section 80C of the Income Tax Act. They have a 3-year lock-in period, which is the shortest among all tax-saving assets.' }
            ]}
          />
        </div>
      </section>

      <CTA />
    </div>
  );
}
