import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  path,
  ctaText = 'Learn More',
  features = []
}) {
  return (
    <Link
      to={path}
      className="group relative block bg-white rounded-3xl p-8 border border-navy-dark/5 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Accent hover background highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-brand-blue transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Card Header (Icon & Index Number) */}
      <div className="flex items-center justify-between mb-8">
        <div className="p-4 bg-navy-dark/5 text-brand-blue rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-4xl font-extrabold text-navy-dark/5 group-hover:text-brand-blue/10 transition-colors duration-500 font-heading">
          {number}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-muted mb-6">
        {description}
      </p>

      {/* Custom feature indicators */}
      {features.length > 0 && (
        <ul className="space-y-2.5 mb-8 border-t border-navy-dark/5 pt-6">
          {features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-center text-xs font-semibold text-text-muted">
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2.5 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
      )}

      {/* Call to action arrow link */}
      <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-blue gap-1.5 pt-2">
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
