import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({
  name,
  role,
  location,
  rating = 5,
  avatar,
  content,
}) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
      <div>
        {/* Rating stars */}
        <div className="flex items-center gap-0.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-accent-gold-bright fill-accent-gold-bright' : 'text-slate-200'}`}
            />
          ))}
        </div>

        {/* Content quote */}
        <p className="text-sm md:text-base leading-relaxed text-text-dark italic mb-8">
          "{content}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/10 flex-shrink-0"
          loading="lazy"
        />
        <div className="text-left">
          <h4 className="text-sm font-bold text-navy-dark leading-tight">{name}</h4>
          <p className="text-xs text-text-muted mt-0.5 font-medium">{role}</p>
          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{location}</p>
        </div>
      </div>
    </div>
  );
}
