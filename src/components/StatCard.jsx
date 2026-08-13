import React, { useEffect, useState, useRef } from 'react';

export default function StatCard({
  value,
  suffix = '',
  label,
  light = false,
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value, 10);
          if (isNaN(end)) {
            setCount(value);
            return;
          }
          const duration = 1500; // 1.5s animation
          const increment = end / (duration / 16); // ~60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col items-center justify-center p-6 text-center ${light ? 'border-r border-white/10 last:border-r-0' : 'border-r border-slate-100 last:border-r-0'} max-sm:border-r-0 max-sm:border-b max-sm:pb-6 last:border-b-0`}
    >
      <div className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-2 font-heading ${light ? 'text-accent-gold-bright' : 'text-navy-dark'}`}>
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <span className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${light ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </span>
    </div>
  );
}
