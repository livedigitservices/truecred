import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { loans } from '../data/loans';
import { CheckCircle2, ChevronRight, Calculator, FileText, Info } from 'lucide-react';

export default function Loans() {
  const breadcrumbs = [{ label: 'Loans', path: '/loans' }];
  const [activeTab, setActiveTab] = useState(loans[0].id);

  // Calculator State
  const [calcLoanType, setCalcLoanType] = useState('home-loan');
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEmi, setExistingEmi] = useState(5000);
  const [requestedAmount, setRequestedAmount] = useState(1500000);
  const [calcResult, setCalcResult] = useState(null);

  const selectedLoan = loans.find((l) => l.id === activeTab) || loans[0];

  const handleCalculate = (e) => {
    e.preventDefault();

    // Rates matching loan ids
    const rates = {
      'personal-loan': 9.99,
      'business-loan': 12.50,
      'home-loan': 8.40,
      'loan-against-property': 9.00,
      'education-loan': 9.50,
      'msme-loan': 8.99,
      'working-capital-loan': 11.00,
      'vehicle-gold-loan': 8.00,
    };

    const tenureYears = {
      'personal-loan': 5,
      'business-loan': 5,
      'home-loan': 20,
      'loan-against-property': 15,
      'education-loan': 10,
      'msme-loan': 7,
      'working-capital-loan': 1,
      'vehicle-gold-loan': 5,
    };

    const rate = rates[calcLoanType] || 9.0;
    const years = tenureYears[calcLoanType] || 5;
    const monthlyRate = (rate / 12) / 100;
    const totalMonths = years * 12;

    // FOIR (Fixed Obligation to Income Ratio) check - Banks usually cap at 50%
    const foirMaxEmi = (monthlyIncome * 0.5) - existingEmi;
    
    // Formula for EMI: [P x R x (1+R)^N]/[((1+R)^N)-1]
    const emi = requestedAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    let status = 'Excellent';
    let message = 'You have a very strong profile for this loan amount.';
    
    if (foirMaxEmi <= 0) {
      status = 'Limited';
      message = 'Your existing monthly commitments are high relative to your income.';
    } else if (emi > foirMaxEmi) {
      status = 'Average';
      message = 'You qualify for a slightly lower loan amount. Consider increasing tenure or reducing principal.';
    }

    // Maximum qualifying principal based on maximum allowed EMI
    const maxPrincipal = foirMaxEmi > 0 
      ? foirMaxEmi * (Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))
      : 0;

    setCalcResult({
      status,
      message,
      estimatedEmi: Math.round(emi),
      maxQualifyingAmount: Math.round(maxPrincipal),
      rate,
      tenure: years,
    });
  };

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
        title="Find the financing that fits your next chapter."
        highlightedWord="financing"
        description="Navigate personal, home, MSME, and commercial loans. Compare criteria and structure your application before submitting to banks."
        breadcrumbs={breadcrumbs}
      />

      {/* Interactive Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Column: Vertical tab list */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-3 mb-2">Select Loan Category</span>
              {loans.map((loan) => (
                <button
                  key={loan.id}
                  onClick={() => setActiveTab(loan.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-sans font-semibold text-sm transition-all flex items-center justify-between cursor-pointer ${
                    activeTab === loan.id
                      ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/10'
                      : 'bg-[#F8FAFC] text-navy-dark hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {loan.icon && <loan.icon className="w-5 h-5 flex-shrink-0" />}
                    <span>{loan.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === loan.id ? 'translate-x-1' : ''}`} />
                </button>
              ))}
            </div>

            {/* Right Column: Tab Content */}
            <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-lg text-left space-y-8">
              
              {/* Product Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark">
                    {selectedLoan.title}
                  </h2>
                  <p className="text-xs text-text-muted mt-1 font-medium">Interest benchmarks and structures</p>
                </div>
                <div className="flex items-center gap-4 bg-brand-blue/5 border border-brand-blue/10 px-5 py-3 rounded-2xl">
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Interest Rate</span>
                    <span className="text-sm font-bold text-brand-blue">{selectedLoan.interestRate}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-text-muted">
                {selectedLoan.shortDescription}
              </p>

              {/* Split Content: Eligibility & Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Eligibility */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-navy-dark font-bold text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>Eligibility Criteria</span>
                  </div>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed pl-7">
                    {selectedLoan.eligibility}
                  </p>
                  <div className="pl-7 pt-1 flex items-center gap-1.5 text-xs font-semibold text-navy-dark bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Max Tenure: {selectedLoan.tenure}</span>
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-navy-dark font-bold text-sm uppercase tracking-wider">
                    <FileText className="w-5 h-5 text-brand-blue" />
                    <span>Required Documents</span>
                  </div>
                  <ul className="space-y-2 pl-7">
                    {selectedLoan.documents.map((doc, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-text-muted flex items-center gap-2.5 font-medium">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                <Button onClick={() => {
                  setCalcLoanType(selectedLoan.id);
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }} variant="primary" showArrow>
                  Check Eligibility Calculator
                </Button>
                <Button to="/contact" variant="outline">
                  Get Personal Consultation
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ELIGIBILITY CALCULATOR */}
      <section id="calculator" className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            eyebrow="PRE-SCREENING CALCULATOR"
            title="Loan Eligibility Pre-Check"
            subtitle="Estimate your borrowing capacity and monthly EMI repayments based on banking FOIR standards instantly."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-8">
            
            {/* Input Form Column */}
            <form onSubmit={handleCalculate} className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md space-y-6">
              
              {/* Selector */}
              <div>
                <label className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">Loan Type</label>
                <select
                  value={calcLoanType}
                  onChange={(e) => setCalcLoanType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  {loans.map((l) => (
                    <option key={l.id} value={l.id}>{l.title}</option>
                  ))}
                </select>
              </div>

              {/* Sliders */}
              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Net Monthly Income / Profit</span>
                  <span className="text-brand-blue font-heading">{formatCurrency(monthlyIncome)}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Existing Monthly EMIs</span>
                  <span className="text-brand-blue font-heading">{formatCurrency(existingEmi)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150000"
                  step="1000"
                  value={existingEmi}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  <span>Requested Loan Amount</span>
                  <span className="text-brand-blue font-heading">{formatCurrency(requestedAmount)}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="50000"
                  value={requestedAmount}
                  onChange={(e) => setRequestedAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-navy-dark hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Eligibility Status</span>
              </button>

            </form>

            {/* Results Panel */}
            <div className="lg:col-span-5">
              {calcResult ? (
                <div className="bg-navy-dark text-white rounded-3xl p-8 border border-white/5 shadow-xl space-y-6">
                  <div className="pb-4 border-b border-white/10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Pre-qualification Status</span>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      calcResult.status === 'Excellent' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                      calcResult.status === 'Average' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {calcResult.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Estimated Monthly EMI</span>
                      <div className="text-3xl font-black text-white font-heading">{formatCurrency(calcResult.estimatedEmi)}</div>
                      <span className="text-[10px] text-slate-500 block mt-1">Calculated at {calcResult.rate}% p.a. for {calcResult.tenure} Years</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Max Qualifying Amount</span>
                      <div className="text-xl font-bold text-accent-gold-bright font-heading">
                        {calcResult.maxQualifyingAmount > 0 ? formatCurrency(calcResult.maxQualifyingAmount) : 'N/A'}
                      </div>
                      <span className="text-[9px] text-slate-500 block leading-tight mt-1">Maximum loan size banks allow based on your net income and existing EMIs.</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed italic">
                    "{calcResult.message}"
                  </p>

                  <div className="pt-2">
                    <Button to="/contact" variant="accent" className="w-full">
                      Submit Pre-Screening Request
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center h-[420px] text-slate-400">
                  <Calculator className="w-12 h-12 text-slate-200 mb-4" />
                  <h3 className="text-base font-bold text-navy-dark mb-1">Check Eligibility Now</h3>
                  <p className="text-xs text-text-muted max-w-xs leading-relaxed">
                    Set your sliders and click the calculate button to see qualified principals and EMIs based on RBI/banking regulations.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <CTA />
    </div>
  );
}
