import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = {
    left: 'text-left items-start mr-auto',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${light ? 'text-accent-gold-bright' : 'text-brand-blue'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 ${light ? 'text-white' : 'text-navy-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${light ? 'text-slate-300' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
