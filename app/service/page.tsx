"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/ui/Navigation";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { Footer } from "@/components/ui/Footer";


/* ─── Data ─────────────────────────────────────────────────────────────── */

const INVEST_SERVICES = [
  {
    number: "01",
    category: "Matching",
    title: "Investment Opportunity Matching",
    description:
      "Connect investors with vetted projects aligned to their sector, investment size, and geographic interests.",
    imageSrc:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Investment Opportunity Matching",
  },
  {
    number: "02",
    category: "Due Diligence",
    title: "Project Due Diligence Coordination",
    description:
      "Coordinate commercial, legal, technical, and operational due diligence with qualified professionals before investment decisions.",
    imageSrc:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Project Due Diligence Coordination",
  },
  {
    number: "03",
    category: "Review",
    title: "Investment Readiness Review",
    description:
      "Review business plans, financial assumptions, risks, and scalability from an investor perspective.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Investment Readiness Review",
  },
  {
    number: "04",
    category: "Cross-Border",
    title: "Cross-Border Investment Advisory",
    description:
      "Support investors entering Sri Lanka or expanding into the UK, Japan, China, and the Middle East.",
    imageSrc:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Cross-Border Investment Advisory",
  },
  {
    number: "05",
    category: "Partnerships",
    title: "Joint Venture & Strategic Partnerships",
    description:
      "Identify local partners and structure collaborations between Sri Lankan and international companies.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Joint Venture & Strategic Partnerships",
  },
  {
    number: "06",
    category: "Market Entry",
    title: "Market Entry Consulting",
    description:
      "Sector research, local introductions, regulatory guidance, and business establishment support.",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Market Entry Consulting",
  },
  {
    number: "07",
    category: "Commodities",
    title: "Commodity Investment Advisory",
    description:
      "Commercial advisory on commodity projects including energy, metals, agriculture, and industrial commodities.",
    imageSrc:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Commodity Investment Advisory",
  },
];

const FUNDING_SERVICES = [
  {
    number: "01",
    category: "Strategy",
    title: "Funding Strategy Consultation",
    description:
      "Identify the most suitable funding route based on your business stage, sector, and growth objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Funding Strategy Consultation",
  },
  {
    number: "02",
    category: "Readiness",
    title: "Investment Readiness Programme",
    description:
      "Prepare your business to present confidently to investors and lenders.",
    imageSrc:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Investment Readiness Programme",
  },
  {
    number: "03",
    category: "Documentation",
    title: "Business Plan Development",
    description:
      "Professional business plans, investment memorandums, and executive summaries.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Business Plan Development",
  },
  {
    number: "04",
    category: "Pitch",
    title: "Pitch Deck Preparation",
    description: "Create investor-ready presentations.",
    imageSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Pitch Deck Preparation",
  },
  {
    number: "05",
    category: "Financial Modelling",
    title: "Financial Model Coordination",
    description:
      "Work with finance professionals where required to prepare investment projections and funding models.",
    imageSrc:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Financial Model Coordination",
  },
  {
    number: "06",
    category: "Structure",
    title: "Project Structuring",
    description:
      "Develop ownership structures, investment phases, revenue models, and partnership strategies.",
    imageSrc:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Project Structuring",
  },
  {
    number: "07",
    category: "Introductions",
    title: "Investor Introductions",
    description:
      "Connect suitable projects with our international investor network where appropriate.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Investor Introductions",
  },
  {
    number: "08",
    category: "Grants",
    title: "Grant & Development Funding Guidance",
    description:
      "Identify applicable development finance, impact investment, and institutional funding opportunities.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Grant & Development Funding Guidance",
  },
  {
    number: "09",
    category: "Negotiation",
    title: "Commercial Negotiation Support",
    description:
      "Assist founders during investment negotiations and partnership discussions.",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Commercial Negotiation Support",
  },
];

/* ─── Config per type ───────────────────────────────────────────────────── */

const CONFIG = {
  invest: {
    tagClass: "border-blue-400/30 text-blue-300 bg-blue-400/10",
    title: "Have Capital to Invest?",
    subtitle:
      "Join our investor network and access carefully evaluated business opportunities across Sri Lanka and international markets.",
    accentBar: "from-navy via-navy-light to-blue-400",
    ctaLabel: "Enquire About Investing",
    ctaClass:
      "bg-white text-navy-dark hover:bg-blue-50 shadow-lg hover:shadow-white/20",
    ctaMailSubject: "Investment%20Enquiry",
    services: INVEST_SERVICES,
  },
  funding: {
    tagClass: "border-amber-400/30 text-amber-300 bg-amber-400/10",
    title: "Need Funding for Your Project?",
    subtitle:
      "We help entrepreneurs prepare, structure, and connect projects with suitable investors and funding partners.",
    accentBar: "from-amber-600 via-yellow-400 to-amber-300",
    ctaLabel: "Submit Your Project",
    ctaClass:
      "bg-amber-400 text-navy-dark hover:bg-amber-300 shadow-lg hover:shadow-amber-400/30",
    ctaMailSubject: "Project%20Funding%20Enquiry",
    services: FUNDING_SERVICES,
  },
};

/* ─── Inner component (reads search params) ─────────────────────────────── */

function ServiceContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const type: "invest" | "funding" =
    typeParam === "funding" ? "funding" : "invest";

  const cfg = CONFIG[type];

  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-dark pt-40 pb-28 px-6 md:px-12 overflow-hidden">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(26,54,128,0.55) 0%, transparent 70%)",
          }}
        />

        {/* Top accent bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cfg.accentBar}`}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Tab switcher */}
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 rounded-full p-1.5">
            <a
              href="/service?type=invest"
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                type === "invest"
                  ? "bg-white text-navy-dark shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Invest
            </a>
            <a
              href="/service?type=funding"
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                type === "funding"
                  ? "bg-amber-400 text-navy-dark shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Get Funding
            </a>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            {cfg.title}
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {cfg.subtitle}
          </p>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cfg.services.map((svc) => (
              <ExpertiseCard
                key={svc.number}
                number={svc.number}
                category={svc.category}
                title={svc.title}
                description={svc.description}
                imageSrc={svc.imageSrc}
                imageAlt={svc.imageAlt}
                onAction={() =>
                  (window.location.href = `mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20${encodeURIComponent(svc.title)}`)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-navy-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Ready to take the next step?
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            Our team is ready to assist you. Reach out and we will respond within one business day.
          </p>
          <a
            href={`mailto:cm@pearlbay.com?subject=${cfg.ctaMailSubject}`}
            className={`inline-flex items-center gap-2 font-bold text-sm tracking-wide rounded-full px-9 py-4 transition-all duration-300 ${cfg.ctaClass}`}
          >
            {cfg.ctaLabel}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Page export (Suspense required for useSearchParams) ────────────────── */

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServiceContent />
    </Suspense>
  );
}
