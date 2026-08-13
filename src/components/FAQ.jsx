import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={faq.id}
            className={`border rounded-2xl transition-all duration-300 bg-white ${
              isOpen
                ? 'border-brand-blue/30 shadow-md shadow-brand-blue/5'
                : 'border-slate-100 shadow-sm hover:border-slate-200'
            }`}
          >
            {/* Accordion trigger */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left p-6 md:p-7 font-sans font-semibold text-navy-dark focus:outline-none gap-4 cursor-pointer"
            >
              <span className="text-sm md:text-base leading-snug">{faq.question}</span>
              <span className="flex-shrink-0 p-1.5 bg-slate-50 text-slate-400 rounded-full transition-all duration-300">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-brand-blue" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>

            {/* Smooth expanding content using CSS grid-template-rows */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-7 md:pb-7 text-xs md:text-sm leading-relaxed text-text-muted border-t border-slate-50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
