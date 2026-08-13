import { User, Briefcase, Home, Shield, GraduationCap, Building2, Landmark, Coins } from 'lucide-react';

export const loans = [
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    shortDescription: 'Unsecured personal funding for weddings, medical emergencies, travel, or debt consolidation.',
    icon: User,
    interestRate: '9.99% p.a. onwards',
    benefit: 'No collateral required',
    tenure: 'Up to 6 years',
    eligibility: 'Salaried or self-employed individuals with a stable monthly income of ₹25,000+.',
    documents: ['PAN & Aadhaar Card', 'Last 3 months salary slips', '6 months bank statements']
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    shortDescription: 'Custom business loans to scale operations, buy inventory, or expand your commercial footprint.',
    icon: Briefcase,
    interestRate: '12.50% p.a. onwards',
    benefit: 'High-ticket funding up to ₹75L',
    tenure: 'Up to 5 years',
    eligibility: 'Businesses operational for 2+ years with positive cash flows and audited accounts.',
    documents: ['Business ITR (2 Years)', 'GST return logs', 'Company registration proof', '6 months bank statements']
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    shortDescription: 'Purchase your dream home or construct on your plot with competitive long-term home loans.',
    icon: Home,
    interestRate: '8.40% p.a. onwards',
    benefit: 'Longer tenures up to 30 years',
    tenure: 'Up to 30 years',
    eligibility: 'Salaried/self-employed with stable earnings and a healthy CIBIL score (750+).',
    documents: ['Property sale agreement', 'NOC from developer', 'Applicant income proofs', 'Income tax logs']
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property',
    shortDescription: 'Unlock the equity of your residential, commercial, or industrial property to finance your milestones.',
    icon: Shield,
    interestRate: '9.00% p.a. onwards',
    benefit: 'Higher LTV (up to 70%)',
    tenure: 'Up to 15 years',
    eligibility: 'Clear legal title of property with verifiable value and borrower repayment capability.',
    documents: ['Original property deeds', 'Tax receipts of property', 'Valid valuation report', 'ITR logs']
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    shortDescription: 'Finance overseas or domestic studies covering tuition fees, travel, accommodation, and equipment.',
    icon: GraduationCap,
    interestRate: '9.50% p.a. onwards',
    benefit: 'Moratorium period benefit',
    tenure: 'Up to 15 years',
    eligibility: 'Secured admission in UGC/recognized domestic university or premier global institution.',
    documents: ['Admission confirmation letter', 'Fee structure details', 'Co-applicant financial papers']
  },
  {
    id: 'msme-loan',
    title: 'MSME Loan',
    shortDescription: 'Specialized schemes under government subsidies for micro, small, and medium enterprise growth.',
    icon: Building2,
    interestRate: '8.99% p.a. onwards',
    benefit: 'Collateral-free options available',
    tenure: 'Up to 7 years',
    eligibility: 'UDYAM-registered MSMEs meeting turnover parameters under central guidelines.',
    documents: ['UDYAM Registration Certificate', 'GST registry details', 'Income audit files']
  },
  {
    id: 'working-capital-loan',
    title: 'Working Capital Loan',
    shortDescription: 'Maintain healthy day-to-day liquidity, cover wages, or manage seasonal cash gaps smoothly.',
    icon: Landmark,
    interestRate: '11.00% p.a. onwards',
    benefit: 'Flexible drawing limits',
    tenure: '12 months (renewable)',
    eligibility: 'Firms with consistent monthly turnovers and active trade credentials.',
    documents: ['Stock & debtor statement', 'Audited Balance Sheets', 'GST logs', 'Cash flow statement']
  },
  {
    id: 'vehicle-gold-loan',
    title: 'Vehicle / Gold Loan',
    shortDescription: 'Instant liquidity against gold ornaments or fast-track funding to buy personal or commercial vehicles.',
    icon: Coins,
    interestRate: '7.90% p.a. onwards',
    benefit: 'Same-day cash disbursement',
    tenure: 'Up to 7 years',
    eligibility: 'Age 18+ for gold loan (minimal evaluation); stable earnings for vehicle finance.',
    documents: ['Purity evaluation form (gold)', 'Vehicle quotation & registration keys', 'Basic KYC proofs']
  }
];
