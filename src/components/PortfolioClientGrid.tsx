"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { createPortal } from "react-dom";
import type { RefObject } from "react";

// --- Static Data ---
const portfolioData = [
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

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Infra", value: "Infra" },
  { label: "SaaS", value: "SaaS" },
  { label: "Web3", value: "Web3" },
  { label: "Fintech", value: "Fintech" },
  { label: "API", value: "API" },
  { label: "DAO", value: "DAO" },
  { label: "Security", value: "Security" },
  { label: "HR", value: "HR" },
  { label: "Seed", value: "Seed" },
  { label: "Series A", value: "Series A" },
];

function WebsitePreviewModal({
  url,
  show,
  visible,
  onClose,
  name,
  onMouseEnter,
  onMouseLeave,
  modalWidth
}: {
  url: string;
  show: boolean;
  visible: boolean;
  onClose: () => void;
  name: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  modalWidth?: number;
}) {
  // Always render, but control visibility and animation
  if (!visible) return null;
  const portalTarget = typeof window !== "undefined" ? document.body : undefined;
  if (!portalTarget) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      tabIndex={-1}
      style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s' }}
    >
      <div
        className="relative bg-pf-black rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform animate-modalIn"
        style={{
          width: modalWidth ? modalWidth + 'px' : '80vw',
          height: '85vh',
          opacity: show ? 1 : 0,
          transform: show ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 0.5s, transform 0.5s',
          animation: show ? 'modalFadeIn 0.3s cubic-bezier(0.4,0,0.2,1)' : undefined,
        }}
        onClick={e => e.stopPropagation()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Iframe preview */}
        <div className="flex-1 w-full h-full">
          <iframe
            src={url}
            title={name + " preview"}
            className="w-full h-full border-0 rounded-b-2xl bg-pf-black"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
        {/* Visit Site Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-8 px-8 py-4 rounded-lg bg-pf-dark text-pf-gold font-bold text-lg shadow-lg hover:bg-pf-gold hover:text-pf-black transition border-2 border-pf-gold z-20"
          style={{ minWidth: '150px', textAlign: 'center' }}
          onClick={e => e.stopPropagation()}
        >
          Visit Site ↗
        </a>
      </div>
      <style>{`
        @keyframes modalFadeIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>,
    portalTarget
  );
}

function PortfolioCard({ company }: { company: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveringCard, setHoveringCard] = useState(false);
  const [hoveringModal, setHoveringModal] = useState(false);
  const [modalWidth, setModalWidth] = useState<number | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const hoverTimeout = React.useRef<number | null>(null);
  const closeTimeout = React.useRef<number | null>(null);

  // Touch device detection (must be after all hooks)
  const [isTouch, setIsTouch] = useState(false);
  React.useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  // Set modal width to match card
  React.useLayoutEffect(() => {
    if (cardRef.current) {
      setModalWidth(cardRef.current.offsetWidth);
    }
  }, [modalOpen, inView]);

  // Handle hover logic for modal (always call this effect)
  React.useEffect(() => {
    if ((hoveringCard || hoveringModal) && !modalOpen && !isTouch) {
      // Start timer to open modal after 2s
      hoverTimeout.current = window.setTimeout(() => {
        setModalOpen(true);
        setModalVisible(true);
      }, 1800);
    } else if (!(hoveringCard || hoveringModal) || isTouch) {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      setModalOpen(false);
      // Start close transition
      if (modalVisible) {
        closeTimeout.current = window.setTimeout(() => setModalVisible(false), 500);
      }
    }
    // Cleanup on unmount
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, [hoveringCard, hoveringModal, modalOpen, isTouch, modalVisible]);

  // Keyboard accessibility for modal
  React.useEffect(() => {
    if (!modalOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  // Only render the card when in view
  if (!inView) {
    return <div ref={ref} style={{ minHeight: 220, width: '100%' }} />;
  }

  // Render modal logic only for non-touch devices
  return (
    <>
      <div
        ref={el => {
          ref(el);
          cardRef.current = el;
        }}
        className="w-full bg-pf-black rounded-2xl shadow-xl p-0 flex flex-col md:flex-row items-stretch group cursor-pointer relative overflow-visible"
        style={{
          border: '4px solid #111216',
          boxShadow: '0 4px 32px 0 #000a, 0 0 0 2px #232323',
          transform: inView ? "translateY(0)" : "translateY(-10px)",
          opacity: inView ? 1 : 0,
        }}
        onMouseEnter={!isTouch ? () => setHoveringCard(true) : undefined}
        onMouseLeave={!isTouch ? () => setHoveringCard(false) : undefined}
        tabIndex={0}
        aria-label={`Preview ${company.name} website`}
      >
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center justify-center md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none w-full md:w-40 h-32 md:h-auto overflow-hidden border-4 border-pf-dark shadow-lg bg-transparent">
          {company.logo ? (
            <img src={company.logo} alt={company.name + ' logo'} className="w-full h-full object-cover" />
          ) : (
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-pf-gold flex items-center justify-center text-5xl font-bold text-pf-black font-raleway shadow-md">
              {company.name[0]}
            </div>
          )}
        </div>
        {/* Info Area */}
        <div className="flex-1 flex flex-col justify-center px-6 py-6 md:py-0 gap-2">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <span className="text-2xl md:text-3xl font-bold text-pf-gold font-raleway">
              {company.name}
            </span>
            <span className="px-3 py-1 rounded-full border border-pf-gold text-xs md:text-sm font-semibold text-pf-gold bg-pf-black">
              {company.tag}
            </span>
          </div>
          <p className="text-pf-cream text-base md:text-lg mb-2">
            {company.description}
          </p>
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pf-gold hover:text-pf-cream font-semibold text-base md:text-lg mt-1"
            onClick={e => e.stopPropagation()}
          >
            Visit site
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6m6 0v6" />
            </svg>
          </a>
        </div>
      </div>
      {!isTouch && (
        <WebsitePreviewModal
          url={company.link}
          show={modalOpen}
          visible={modalVisible}
          onClose={() => setModalOpen(false)}
          name={company.name}
          onMouseEnter={() => setHoveringModal(true)}
          onMouseLeave={() => setHoveringModal(false)}
          modalWidth={modalWidth}
        />
      )}
    </>
  );
}

export default function PortfolioClientGrid() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter(
          (c) => c.sector === active || c.stage === active
        );
  return (
    <section className="w-full px-2 sm:px-6 md:px-16 py-12 bg-pf-black">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`px-5 py-2 rounded-full font-semibold border transition text-base
              ${active === opt.value
                ? "bg-pf-gold text-pf-black border-pf-gold shadow"
                : "bg-pf-black text-pf-gold border-pf-gold hover:bg-pf-gold-light hover:text-pf-black"}
            `}
            onClick={() => setActive(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div className="flex flex-col gap-10 items-center w-full">
        {filtered.map((company) => (
          <PortfolioCard key={company.name} company={company} />
        ))}
      </div>
    </section>
  );
} 