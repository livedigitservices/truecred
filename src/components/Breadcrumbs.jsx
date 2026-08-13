import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-1.5 text-xs tracking-wider uppercase font-semibold text-slate-400 mb-6">
      <Link to="/" className="hover:text-brand-blue transition-colors">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
            {isLast ? (
              <span className="text-navy-dark font-bold">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-brand-blue transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
