import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyle = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-navy-dark hover:bg-navy-medium text-white shadow-sm border border-navy-dark',
    secondary: 'bg-brand-blue hover:bg-navy-dark text-white shadow-sm border border-brand-blue hover:border-navy-dark',
    outline: 'bg-transparent border border-navy-dark/10 hover:border-brand-blue text-navy-dark hover:text-brand-blue',
    outlineLight: 'bg-transparent border border-white/20 hover:border-white text-white hover:bg-white/10',
    accent: 'bg-accent-gold hover:bg-navy-dark text-navy-dark hover:text-white border border-accent-gold hover:border-navy-dark shadow-sm font-semibold',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  };

  const btnContent = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {btnContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {btnContent}
    </button>
  );
}
