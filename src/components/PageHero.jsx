import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({
  title,
  highlightedWord = '',
  description,
  breadcrumbs = [],
  className = '',
}) {
  // Split title to insert highlighted word if provided
  let mainTitle = title;
  let splitParts = [];
  if (highlightedWord && title.includes(highlightedWord)) {
    splitParts = title.split(highlightedWord);
  }

  return (
    <section className={`relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F2F6FA] to-white ${className}`}>
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#DFE7F0]">
          <path d="M100 0 L50 0 L100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-dark leading-tight tracking-tight mb-6">
            {splitParts.length > 0 ? (
              <>
                {splitParts[0]}
                <span className="text-brand-blue relative inline-block">
                  {highlightedWord}
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent-gold/40 -z-10 rounded-full"></span>
                </span>
                {splitParts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          
          {description && (
            <p className="text-base md:text-lg leading-relaxed text-text-muted max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
