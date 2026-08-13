import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function LoanCard({
  title,
  shortDescription,
  benefit,
  interestRate,
  icon: Icon,
  to = '/loans'
}) {
  return (
    <div className="group relative bg-[#F8FAFC] hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
      
      <div>
        {/* Header containing icon and rate */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-white text-navy-dark rounded-2xl shadow-sm border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
            {Icon && <Icon className="w-5 h-5" />}
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
            {interestRate}
          </span>
        </div>

        {/* Text Details */}
        <h3 className="text-lg font-bold text-navy-dark mb-2.5 group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted mb-6">
          {shortDescription}
        </p>
      </div>

      <div>
        {/* Core Value Benefit */}
        <div className="mb-6 pt-4 border-t border-slate-100 flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Key Advantage</span>
          <span className="text-xs font-semibold text-navy-dark">{benefit}</span>
        </div>

        {/* Button link */}
        <Link
          to={to}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-navy-dark group-hover:text-brand-blue gap-1 transition-colors"
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
