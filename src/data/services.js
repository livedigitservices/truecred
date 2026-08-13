import { Landmark, TrendingUp, HeartPulse } from 'lucide-react';

export const services = [
  {
    id: 'loans',
    number: '01',
    title: 'Customized Loans',
    description: 'Gain access to personalized financing options with structured terms from over 50 leading Indian banks and NBFCs.',
    icon: Landmark,
    path: '/loans',
    ctaText: 'Explore Loans',
    features: [
      'Personal & business funding',
      'Home & mortgage assistance',
      'MSME & collateral-free setups',
      'Optimized interest rates'
    ]
  },
  {
    id: 'mutual-funds',
    number: '02',
    title: 'Mutual Funds',
    description: 'Invest in equity, debt, or hybrid funds via structured SIPs or lumpsum plans to achieve your long-term wealth goals.',
    icon: TrendingUp,
    path: '/mutual-funds',
    ctaText: 'Explore Mutual Funds',
    features: [
      'SIP & Lumpsum planners',
      'Tax-saving ELSS funds',
      'Risk profiling assessments',
      'Portfolio review reports'
    ]
  },
  {
    id: 'insurance',
    number: '03',
    title: 'Wealth Protection',
    description: 'Secure your family, assets, and business against risks with customized life, health, motor, and corporate insurance.',
    icon: HeartPulse,
    path: '/insurance',
    ctaText: 'Explore Insurance',
    features: [
      'Premium life coverages',
      'Cashless health policies',
      'Commercial assets protection',
      'Motor & transit insurances'
    ]
  }
];
