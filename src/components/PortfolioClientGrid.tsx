"use client";
import { useState } from 'react';
import PortfolioCard from './PortfolioCard';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Web3', value: 'Web3' },
  { label: 'Infra', value: 'Infra' },
  { label: 'SaaS', value: 'SaaS' },
  { label: 'DAO', value: 'DAO' },
  { label: 'Security', value: 'Security' },
  { label: 'Fintech', value: 'Fintech' },
  { label: 'API', value: 'API' },
  { label: 'HR', value: 'HR' },
];

// Original portfolio companies data
const portfolioCompanies = [
  {
    name: "Alliance DAO",
    logo: "/logos/alliance.jpg",
    sector: "Web3",
    stage: "Seed",
    tag: "Seed - Infra",
    description: "Y Combinator-style accelerator for Web3 founders.",
    link: "https://alliance.xyz/",
  },
  {
    name: "EigenLayer",
    logo: "/logos/eigen_layer.jpg",
    sector: "Infra",
    stage: "Seed",
    tag: "Seed - Infra",
    description: "Ethereum re-staking marketplace.",
    link: "https://www.eigenlayer.xyz/",
  },
  {
    name: "CharmVerse",
    logo: "/logos/charmverse.jpg",
    sector: "DAO",
    stage: "Seed",
    tag: "Seed - DAO",
    description: "DAO operations & knowledge base.",
    link: "https://www.charmverse.io/",
  },
  {
    name: "Cypherock",
    logo: "/logos/cypherock.jpg",
    sector: "Security",
    stage: "Seed",
    tag: "Seed - Security",
    description: "Seed-phrase-free hardware wallet.",
    link: "https://www.cypherock.com/",
  },
  {
    name: "Coinshift",
    logo: "/logos/coinshift.png",
    sector: "Fintech",
    stage: "Seed",
    tag: "Seed - Fintech",
    description: "Multi-chain treasury OS.",
    link: "https://www.coinshift.xyz/",
  },
  {
    name: "Zamp",
    logo: "/logos/zamp.png",
    sector: "SaaS",
    stage: "Series A",
    tag: "Series A - SaaS",
    description: "All-in-one U.S. sales-tax compliance.",
    link: "https://www.zamp.com/",
  },
  {
    name: "Doola",
    logo: "/logos/doola.jpg",
    sector: "SaaS",
    stage: "Seed",
    tag: "Seed - SaaS",
    description: "Business-in-a-box for global founders incorporating in the U.S.",
    link: "https://www.doola.com/",
  },
  {
    name: "Appsmith",
    logo: "/logos/appsmith.png",
    sector: "SaaS",
    stage: "Series A",
    tag: "Series A - SaaS",
    description: "Open-source low-code internal-tools builder.",
    link: "https://www.appsmith.com/",
  },
  {
    name: "Veremark",
    logo: "/logos/veremark.png",
    sector: "API",
    stage: "Seed",
    tag: "Seed - API",
    description: "Global background-verification API.",
    link: "https://www.veremark.com/",
  },
  {
    name: "Mesh",
    logo: "/logos/mesh.png",
    sector: "HR",
    stage: "Seed",
    tag: "Seed - HR",
    description: "OKR & people-analytics platform.",
    link: "https://www.mesh.ai/",
  },
  {
    name: "Everstage",
    logo: "/logos/everstage.jpg",
    sector: "SaaS",
    stage: "Seed",
    tag: "Seed - SaaS",
    description: "No-code commission automation.",
    link: "https://www.everstage.com/",
  },
];

export default function PortfolioClientGrid() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.sector === active);

  return (
    <section className="w-full px-12 md:px-20 lg:px-32 py-32 bg-gray-50">
      {/* Minimal text filter links */}
      <div className="flex flex-wrap gap-12 mb-20 justify-center">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`text-lg font-medium pb-2 border-b-2 ${
              active === opt.value
                ? "text-pf-black border-pf-black"
                : "text-gray-500 border-transparent hover:text-pf-black hover:border-gray-300"
            }`}
            onClick={() => setActive(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      
      {/* Improved grid layout with better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {filtered.map((company) => (
          <PortfolioCard key={company.name} company={company} />
        ))}
      </div>
    </section>
  );
} 