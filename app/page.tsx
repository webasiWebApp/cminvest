"use client";

import React from "react";
import Beams from './Beams';
import { Navigation } from "@/components/ui/Navigation";
import { Tag } from "@/components/ui/Tag";
import { HeroTitle } from "@/components/ui/HeroTitle";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { LargeParagraph } from "@/components/ui/LargeParagraph";
import { BackgroundWord } from "@/components/ui/BackgroundWord";
import { SplitContent } from "@/components/ui/SplitContent";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { FounderCard } from "@/components/ui/FounderCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white pb-0 relative">
      <Navigation />

      {/* SECTION 1: Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-navy-dark">
        {/* Background Beams */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={1.9}
            beamHeight={30}
            beamNumber={20}
            lightColor="#3B82F6"
            speed={2}
            noiseIntensity={0}
            scale={0.2}
            rotation={49}
            className="w-full h-full"
          />
        </div>

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
                onClick={() => window.location.href = 'mailto:cm@pearlbay.com'}
              >
                Submit Your Project
              </Button>
            </div>
          </div>

          {/* Bottom section: Stats and Description */}
          <div className="flex flex-col lg:flex-row justify-between items-end mt-24 gap-12 lg:gap-8 pb-10">
            
            {/* Stats Left */}
            <div className="flex flex-wrap gap-8 md:gap-12 items-center">
              <StatCounter value={120} prefix="$" suffix="B+" label="Energy Transactions" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
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
              onClick={() => window.location.href = 'mailto:cm@pearlbay.com'}
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
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark relative mt-32 pt-48 pb-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">Our Services</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl">
              Featured Investment Services
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              From investment consulting to project funding and commodity trading, we provide comprehensive strategic advisory for transformative growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExpertiseCard 
              title="Investment Consulting"
              description="Helping investors identify profitable and responsible investment opportunities in Sri Lanka and international markets."
              imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
              imageAlt="Investment Consulting"
            />
            <ExpertiseCard 
              title="Project Funding"
              description="Connecting projects with private equity, debt providers, institutional investors, and strategic partners."
              imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
              imageAlt="Project Funding"
            />
            <ExpertiseCard 
              title="International Business Development"
              description="Helping companies expand into the UK, Japan, China, the Middle East, and beyond."
              imageSrc="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
              imageAlt="International Business Development"
            />
            <ExpertiseCard 
              title="Commodity Trading"
              description="Facilitating responsible commodity trading with a focus on oil & gas, precious metals, precious stones, and agricultural commodities."
              imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
              imageAlt="Commodity Trading"
            />
            <ExpertiseCard 
              title="Project Evaluation"
              description="Professional feasibility studies, commercial analysis, investment readiness assessments, and due diligence."
              imageSrc="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop"
              imageAlt="Project Evaluation"
            />
            <ExpertiseCard 
              title="Government & Institutional Advisory"
              description="Economic development initiatives, PPP projects, strategic infrastructure, and foreign investment facilitation."
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              imageAlt="Government & Institutional Advisory"
            />
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
              onClick={() => window.location.href = 'mailto:cm@pearlbay.com'}
            >
              Submit Your Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <PortfolioCard 
              category="Music & IP Publishing"
              title="Pearlbay Music"
              summary="Supporting the commercial growth of music, entertainment, intellectual property, and creative businesses through strategic publishing initiatives."
              imageSrc="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
              imageAlt="Pearlbay Music Studio"
            />
            <PortfolioCard 
              category="Education & Skill Building"
              title="Pearlbay Institute"
              summary="Empowering students and professionals with industry-relevant education, creative arts training, and modern commercial capabilities."
              imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
              imageAlt="Pearlbay Institute Classroom"
            />
            <PortfolioCard 
              category="Environmental Technology"
              title="Turu (Pvt) Ltd."
              summary="Technological innovation focused on environmental sustainability, reforestation initiatives, and eco-friendly impact investments."
              imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
              imageAlt="Turu Reforestation Project"
            />
            <PortfolioCard 
              category="Business Transformation"
              title="Optimus Lanka"
              summary="Operational transformation, market strategy execution, and high-growth commercial representation across key South Asian sectors."
              imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
              imageAlt="Optimus Lanka Operations"
            />
            <PortfolioCard 
              category="Renewable Energy"
              title="Clean Energy & Infrastructure"
              summary="Financing and developing sustainable energy infrastructure and renewable grid integration projects."
              imageSrc="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
              imageAlt="Clean Energy Solar Grid"
            />
            <PortfolioCard 
              category="Commodities"
              title="Commodity Trading Division"
              summary="Facilitating responsible international trade focused on oil & gas, precious metals, gems, and agricultural commodities."
              imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
              imageAlt="Commodity Logistics"
            />
          </div>
          
          <div className="mt-10 flex justify-center md:hidden">
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:cm@pearlbay.com'}
            >
              Submit Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: Founder Section */}
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

      {/* SECTION 10: CTA Section */}
      <CTABanner 
        title="Ready to Take Your Business to the Next Level?"
        description="Let's discuss your project. Schedule a confidential consultation with our advisory team to explore funding, strategic partnerships, and growth opportunities."
        buttonText="Book a Consultation"
        onButtonClick={() => window.location.href = 'mailto:cm@pearlbay.com'}
      />

      {/* SECTION 11: Footer */}
      <Footer />
    </main>
  );
}
