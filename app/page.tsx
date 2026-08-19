"use client";

import React from "react";
import { HeroSlider } from '@/components/ui/HeroSlider';
import { Navigation } from "@/components/ui/Navigation";
import { Tag } from "@/components/ui/Tag";
import { HeroTitle } from "@/components/ui/HeroTitle";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { LargeParagraph } from "@/components/ui/LargeParagraph";
import { BackgroundWord } from "@/components/ui/BackgroundWord";
import { SplitContent } from "@/components/ui/SplitContent";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { GlobalPresence } from "@/components/ui/GlobalPresence";
import { Gallery } from "@/components/ui/Gallery";
import { FounderCard } from "@/components/ui/FounderCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { Footer } from "@/components/ui/Footer";
import { InvestmentForm } from "@/components/ui/InvestmentForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white pb-0 relative">
      <Navigation />

      {/* SECTION 1: Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-navy-dark">
        {/* Background Slider */}
        <HeroSlider />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between flex-grow mt-12 md:mt-24">
          
          {/* Top section: Title & Button */}
          <div className="flex flex-col items-start max-w-4xl mb-auto">
            <h1 className="text-white font-medium tracking-tight leading-[1.15] text-4xl sm:text-5xl md:text-7xl lg:text-[80px] mb-12">
              Building Sustainable Investments. <br />
              <span className="text-[#3b82f6]">Connecting Global Capital.</span>
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-10 py-4 font-semibold uppercase tracking-wide text-sm rounded-full"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                className="px-10 py-4 font-semibold uppercase tracking-wide text-sm rounded-full bg-navy-light hover:bg-navy-light/90 border border-white/20"
                href="mailto:cm@pearlbay.com"
              >
                Submit Your Project
              </Button>
            </div>
          </div>

          {/* Bottom section: Stats and Description */}
          <div className="flex flex-col lg:flex-row justify-between items-end mt-24 gap-12 lg:gap-8 pb-10">
            
            {/* Stats Left */}
            <div className="flex flex-wrap gap-8 md:gap-12 items-center">
              <StatCounter value={18} prefix="$" suffix="B+" label="Energy Transactions" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
              <StatCounter value={100} suffix="%" label="Sustainable Impact" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
              <StatCounter value={15} prefix="+" label="Sectors Covered" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
              <StatCounter value={5} prefix="" suffix="+" label="Global Markets" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
            </div>

            {/* Description Right */}
            <div className="w-full lg:max-w-md xl:max-w-[500px]">
              <p className="text-lg md:text-[20px] text-neutral-300 leading-relaxed font-normal">
                CM Investments (Pvt) Ltd. is a Sri Lankan investment advisory, project development, and international business consulting firm connecting governments, institutions, investors, and entrepreneurs to develop commercially successful and socially impactful projects.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* SECTION 2: Scroll Paragraph Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white relative">
        <LargeParagraph 
          text="CM Investments (Pvt) Ltd. is a Sri Lankan investment, advisory, and project development company committed to creating sustainable economic growth through strategic investments, international partnerships, and responsible business practices."
          highlightWords={["sustainable", "economic", "growth", "strategic", "investments,", "international", "partnerships,"]}
        />
      </section>

      {/* SECTION 3: Giant Background Word */}
      <div className="relative h-40 md:h-64 overflow-hidden my-32 bg-white">
        <BackgroundWord text="INVESTMENT" />
      </div>

      {/* SECTION 4: A Global Investment & Advisory Firm — Hero-style full-bleed layout */}
      <section className="bg-white pt-20 md:pt-28 mt-48 overflow-hidden">
        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <Tag variant="outline" className="mb-8">
              Why CM Investments
            </Tag>
            <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-navy-dark">Investing in Sustainable Growth.{" "}</span>
              <span className="text-[#3b82f6]">Creating Lasting Value.</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Founded by Chathura Masinha, CM Investments serves as the strategic investment and advisory arm behind a growing portfolio of businesses and projects across multiple industries. We connect entrepreneurs, investors, governments, institutions, and international partners to transform visionary ideas into commercially successful and socially impactful ventures.
            </p>
            <Button 
              variant="primary" 
              size="md" 
              className="px-8 py-4 rounded-full"
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
        {/* Full-bleed image */}
        <div className="w-full h-[420px] md:h-[560px] lg:h-[640px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Corporate Office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-dark/20" />
        </div>
      </section>

      {/* SECTION 5: International Market Reach — Hero-style full-bleed layout */}
      <section className="bg-white pt-20 md:pt-28 mt-32 overflow-hidden">
        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <Tag variant="outline" className="mb-8">
              International Business Development
            </Tag>
            <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-navy-dark">Connecting Global Capital with{" "}</span>
              <span className="text-[#3b82f6]">Strategic Opportunity</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              We maintain strong relationships across Asia, Europe, the Middle East, and international financial markets. We assist entrepreneurs and companies looking to establish or expand operations globally across the United Kingdom, Japan, China, the Middle East, ASEAN, and Sri Lanka. Services include company registration, local partnerships, investment structuring, and investor introductions.
            </p>
            <Button 
              variant="primary" 
              size="md" 
              className="px-8 py-4 rounded-full"
              href="mailto:cm@pearlbay.com"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
        {/* Full-bleed image */}
        <div className="w-full h-[420px] md:h-[560px] lg:h-[640px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop"
            alt="Global Investment Advisory Meeting"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-dark/20" />
        </div>
      </section>

      {/* SECTION 6: Giant Background Word */}
      <div className="relative h-[50vh] md:h-[50vh] overflow-hidden mt-10 flex items-center justify-center">
        <BackgroundWord text="ADVISORY" />
      </div>

      {/* SECTION 7: Our Services */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark relative mt-32 pt-36 pb-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">Our Services</Tag>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
              Comprehensive Investment &amp; Advisory Solutions
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              Tailored investment strategies, capital syndication, cross-border business development, and rigorous due diligence for global stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExpertiseCard 
              number="01"
              category="Advisory"
              title="Project Consulting"
              description="End-to-end strategic advisory, feasibility evaluation, and commercial guidance for transformative ventures and high-growth initiatives."
              imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
              imageAlt="Project Consulting"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Project%20Consulting'}
            />
            <ExpertiseCard 
              number="02"
              category="Capital"
              title="Project Funding"
              description="Connecting high-potential projects with private equity, debt providers, institutional syndicates, and strategic international partners."
              imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
              imageAlt="Project Funding"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Project%20Funding'}
            />
            <ExpertiseCard 
              number="03"
              category="Global Expansion"
              title="International Business"
              description="Facilitating cross-border market entry, global expansion, joint ventures, and strategic investor introductions across the UK, Middle East, Asia, and Sri Lanka."
              imageSrc="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
              imageAlt="International Business"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20International%20Business'}
            />
            <ExpertiseCard 
              number="04"
              category="Asset Management"
              title="Investment Management"
              description="Professional management of client portfolios across selected asset classes, with strategies designed around risk tolerance, investment objectives, and time horizons."
              imageSrc="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
              imageAlt="Investment Management"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Investment%20Management'}
            />
            <ExpertiseCard 
              number="05"
              category="Private Wealth"
              title="Wealth Management"
              description="Integrated wealth solutions covering portfolio construction, diversification, wealth preservation, and long-term financial objectives."
              imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
              imageAlt="Wealth Management"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Wealth%20Management'}
            />
            <ExpertiseCard 
              number="06"
              category="Alternative Assets"
              title="Alternative Investments"
              description="Access to selected alternative investment opportunities that may complement traditional stocks and bonds and enhance portfolio diversification."
              imageSrc="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
              imageAlt="Alternative Investments"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Alternative%20Investments'}
            />
            <ExpertiseCard 
              number="07"
              category="Yield & Debt"
              title="Fixed Income Investments"
              description="Capital preservation and predictable yield generation through structured debt, sovereign and corporate bonds, and credit instruments."
              imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
              imageAlt="Fixed Income Investments"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Fixed%20Income%20Investments'}
            />
            <ExpertiseCard 
              number="08"
              category="Commodities"
              title="Commodity Markets & Trading"
              description="Facilitating responsible physical and structured commodity trade with a focus on oil & gas, precious metals, gems, and agricultural commodities."
              imageSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
              imageAlt="Commodity Markets & Trading"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Commodity%20Markets'}
            />
            <ExpertiseCard 
              number="09"
              category="Advisory"
              title="Portfolio Advisory & Financial Planning"
              description="Holistic asset allocation models, bespoke financial strategies, and customized advisory for high-net-worth individuals and corporate entities."
              imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
              imageAlt="Portfolio Advisory & Financial Planning"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Portfolio%20Advisory'}
            />
            <ExpertiseCard 
              number="10"
              category="Institutional"
              title="Corporate & Institutional Investment Solutions"
              description="Custom capital structuring, institutional fund placement, joint ventures, and strategic corporate investment advisory."
              imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
              imageAlt="Corporate & Institutional Investment Solutions"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Institutional%20Solutions'}
            />
            <ExpertiseCard 
              number="11"
              category="Risk & Governance"
              title="Risk Management & Portfolio Diversification"
              description="Robust risk assessment frameworks, multi-asset diversification strategies, and downside exposure hedging to insulate and preserve capital."
              imageSrc="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
              imageAlt="Risk Management & Portfolio Diversification"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Risk%20Management'}
            />
            <ExpertiseCard 
              number="12"
              category="Due Diligence"
              title="Investment Due Diligence & Verification"
              description="Comprehensive commercial feasibility studies, risk audits, regulatory compliance verification, and investment readiness assessments."
              imageSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
              imageAlt="Investment Due Diligence & Verification"
              onAction={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Due%20Diligence'}
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: Giant Background Word */}
      <div className="relative h-[40vh] overflow-hidden my-20 flex items-center justify-center bg-white">
        <BackgroundWord text="INDUSTRIES" />
      </div>

      {/* SECTION 9: Industries */}
      <section id="industries" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Tag variant="dark" className="mb-6">Industry Focus</Tag>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-6">
                Key Industries &amp; Strategic Sectors
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                CM Investments deploys capital, advisory, and cross-border partnerships across key economic sectors driving long-term sustainability and global growth.
              </p>
            </div>
            <Button 
              variant="primary" 
              size="md"
              className="hidden md:inline-flex rounded-full px-8 py-4"
              href="mailto:cm@pearlbay.com?subject=Industry%20Partnership%20Inquiry"
            >
              Discuss Your Sector
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard 
              number="01"
              title="Energy"
              description="Renewable energy infrastructure, clean power transitions, solar & wind utilities, and strategic cross-border energy transactions."
              tags={["Renewables", "Clean Power", "Infrastructure"]}
              imageSrc="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
              imageAlt="Energy Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Energy%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="02"
              title="Healthcare and Pharmaceuticals"
              description="Advanced healthcare facilities, pharmaceutical manufacturing, medical innovation, and specialized healthcare infrastructure."
              tags={["Pharma", "Medical Tech", "Healthcare"]}
              imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
              imageAlt="Healthcare and Pharmaceuticals Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Healthcare%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="03"
              title="Education"
              description="Higher education institutes, creative arts academies, vocational skill-building programs, and cross-border academic partnerships."
              tags={["Academia", "Institutes", "Skill Building"]}
              imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
              imageAlt="Education Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Education%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="04"
              title="Technology & Software"
              description="Enterprise software development, fintech ecosystems, artificial intelligence, cloud architectures, and digital transformation."
              tags={["Enterprise Tech", "Fintech", "AI & Cloud"]}
              imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
              imageAlt="Technology & Software Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Technology%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="05"
              title="Financial Services"
              description="Capital markets, asset management, private equity placement, banking advisory, and institutional wealth structuring."
              tags={["Capital Markets", "Asset Management", "Banking"]}
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              imageAlt="Financial Services Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Financial%20Services%20Inquiry'}
            />
            <IndustryCard 
              number="06"
              title="Metals & Mining"
              description="Precious metals trading, industrial mineral extraction, physical bullion structuring, and high-value global commodities."
              tags={["Precious Metals", "Minerals", "Trade"]}
              imageSrc="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=800&auto=format&fit=crop"
              imageAlt="Metals Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Metals%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="07"
              title="Professional Services / Consulting"
              description="Corporate advisory, international market entry, cross-border M&A consulting, legal structuring, and commercial representation."
              tags={["Strategic Advisory", "Corporate M&A", "Consulting"]}
              imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
              imageAlt="Professional Services and Consulting Sector"
              className="md:col-span-2 lg:col-span-1"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Consulting%20Sector%20Inquiry'}
            />
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto rounded-full"
              href="mailto:cm@pearlbay.com?subject=Industry%20Partnership%20Inquiry"
            >
              Discuss Your Sector
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: Investment Portfolio */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Tag variant="dark" className="mb-6">Portfolio Ecosystem</Tag>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-6">
                Featured Businesses &amp; Ventures
              </h2>
              <p className="text-neutral-600 text-lg">
                CM Investments is associated with a growing ecosystem of high-impact businesses, creative enterprises, and strategic development initiatives.
              </p>
            </div>
            <Button 
              variant="text" 
              className="hidden md:inline-flex mb-2 text-lg"
              href="mailto:cm@pearlbay.com"
            >
              Submit Your Project
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 max-w-5xl mx-auto mt-12">
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Bussa" className="flex flex-col items-center gap-5 group">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/bussa.jpg" alt="Bussa" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
      
            </a>
            
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Pearlbay" className="flex flex-col items-center gap-5 group">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/pearlbay.png" alt="Pearlbay" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
            
            </a>
            
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Turu" className="flex flex-col items-center gap-5 group">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/turu.png" alt="Turu" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
             
            </a>
          </div>
          
          <div className="mt-10 flex justify-center md:hidden">
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              href="mailto:cm@pearlbay.com"
            >
              Submit Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: International Footprint & Country Flags */}
      <GlobalPresence />

      {/* SECTION 10: Global Gallery Section */}
      <Gallery />

      {/* SECTION 11: Founder Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <FounderCard 
          name="Chathura Masinha"
          position="Founder & Chief Executive Officer"
          biography={
            <>
              <p>
                Chathura Masinha established CM Investments with a long-term vision of positioning Sri Lanka as a preferred destination for responsible international investment.
              </p>
              <p>
                His experience spans international commercial negotiations, investment structuring, project development, commodity trading, strategic partnerships, and cross-border business expansion. He has contributed to the development of high-value commercial relationships and participated in strategic discussions involving energy transactions valued in excess of USD 120 billion, demonstrating the firm&apos;s ability to engage with major international stakeholders.
              </p>
            </>
          }
          quote="Every project should strengthen communities, generate employment, encourage innovation, protect the environment, and deliver fair returns for every stakeholder involved."
          imageSrc="/chathura-masinha.jpg"
          imageAlt="Chathura Masinha Portrait"
          linkedInUrl="mailto:cm@pearlbay.com"
        />
      </section>

      {/* SECTION 12: Investment Form Section */}
      <InvestmentForm />

      {/* SECTION 13: CTA Section */}
      <CTABanner 
        title="Ready to Take Your Business to the Next Level?"
        description="Let's discuss your project. Schedule a confidential consultation with our advisory team to explore funding, strategic partnerships, and growth opportunities."
        buttonText="Book a Consultation"
        buttonHref="mailto:cm@pearlbay.com"
      />

      {/* SECTION 13: Footer */}
      <Footer />
    </main>
  );
}
