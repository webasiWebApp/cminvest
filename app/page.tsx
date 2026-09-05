"use client";

import React from "react";
import { motion } from "framer-motion";
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
              <StatCounter value={20} prefix="$" suffix="B+" label="Energy Transactions" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
              <StatCounter value={100} suffix="%" label="Sustainable Impact" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
              <StatCounter value={9} suffix="+" label="Sectors Covered" className="[&_div]:text-white [&_div]:text-3xl md:[&_div]:text-4xl [&_div]:font-medium [&>span]:text-neutral-400 [&>span]:text-xs [&>span]:normal-case [&>span]:capitalize" />
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
      {/* SECTION 2: About & Founder Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <Tag variant="outline" className="mb-6 mx-auto">About CM Investments</Tag>
          
          <div className="hidden md:block">
            <LargeParagraph 
              text="CM Investments is the business expression of Chathura’s personal vision - shaped by his own experience as a project owner, entrepreneur, investor, fundraiser and international network builder. <br/> Having experienced first-hand the challenges of finding funding, building credible partnerships and turning ideas into real projects, Chathura believes that good opportunities should be accessible to the right people - and capital should be connected with genuine, realistic opportunities."
              highlightWords={["personal", "vision", "project", "owner,", "entrepreneur,", "investor,", "fundraiser", "accessible", "capital", "genuine,", "realistic", "opportunities."]}
            />
          </div>
          <div className="md:hidden">
            <h2 className="text-3xl font-bold text-navy-dark leading-tight mb-12">
              CM Investments is the business expression of Chathura’s personal vision shaped by his own experience as a project owner, entrepreneur, investor, fundraiser and international network builder.
            </h2>
           
          </div>
          <div className="md:hidden">
           <p className="text-lg text-neutral-600 font-medium">
              Having experienced first-hand the challenges of finding funding, building credible partnerships and turning ideas into real projects,<br /><br />Chathura believes that good opportunities should be accessible to the right people and capital should be connected with genuine, realistic opportunities.
            </p>
          </div>
          <div className="mt-16 md:mt-24">
            <h3 className="text-xl md:text-2xl font-bold text-navy-dark tracking-wide uppercase">Chathura Masinha</h3>
            <p className="text-[#3b82f6] font-semibold tracking-widest text-sm mt-2 uppercase">Founder & Visionary - CM Investments</p>
            <div className="w-12 h-1 bg-navy-light mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Giant Background Word */}
      <div className="relative h-40 md:h-64 overflow-hidden my-32 bg-white">
        <BackgroundWord text="INVESTMENT" />
      </div>

      {/* SECTION 4: A Global Investment & Advisory Firm - Hero-style full-bleed layout */}
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

      {/* SECTION 5: International Market Reach - Hero-style full-bleed layout */}
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

      {/* SECTION 5.5: Why Invest in Sri Lanka */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <Tag variant="dark" className="mb-6">FOR INTERNATIONAL INVESTORS</Tag>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark tracking-tight mb-6 leading-[1.1]">
              Why Invest in Sri Lanka?
            </h2>
            <p className="text-xl text-[#3b82f6] font-semibold mb-6">
              A Strategic Gateway to South Asia
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Sri Lanka offers a unique combination of strategic location, regional market access, skilled talent, investment incentives and emerging-sector opportunity. CM Investments helps international investors go beyond identifying opportunities - evaluating projects, finding local partners, and navigating the path from decision to implementation.
            </p>
            <Button variant="primary" size="md" href="/why-invest-sri-lanka" className="px-8 py-4 rounded-full">
              Explore Why Sri Lanka
            </Button>
          </div>

          {/* Highlight Row (Chips) */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "Strategic Indian Ocean Location",
              "100% Repatriation of Capital & Profits*",
              "DTAAs with 45 Countries",
              "100% Foreign Ownership in Many Sectors",
              "~92% Literacy Rate",
              "Tax Incentives - Subject to Project Eligibility"
            ].map((chip, idx) => (
              <div key={idx} className="px-5 py-2.5 bg-white rounded-full border border-neutral-200 text-sm font-bold text-navy-dark shadow-sm">
                {chip}
              </div>
            ))}
          </div>

          {/* Large Visual Callout */}
          <div className="bg-white border-l-4 border-[#3b82f6] p-8 md:p-12 shadow-sm rounded-r-2xl max-w-4xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              100% Repatriation of Capital & Profits*
            </h3>
            <p className="text-neutral-500 text-base italic">
              *For qualifying investments, subject to applicable laws, regulations and investment conditions.
            </p>
          </div>
          
          {/* Fine-print line */}
          <p className="text-xs text-neutral-400 max-w-4xl leading-relaxed">
            *Figures above are general and depend on investment structure, sector and applicable regulations. We recommend independent legal, tax and foreign-exchange advice for any investment.
          </p>
        </div>
      </section>

      {/* SECTION 6: Giant Background Word */}
      <div className="relative h-[50vh] md:h-[50vh] overflow-hidden mt-10 flex items-center justify-center">
        <BackgroundWord text="ADVISORY" />
      </div>

      {/* SECTION 7: Invest & Funding Hub */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark relative mt-32 pt-36 pb-32 z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">What We Offer</Tag>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 max-w-3xl">
              Capital Meets Opportunity
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
              Whether you have capital to deploy or a project that needs backing, we bridge the gap.
            </p>
          </div>

          {/* 2-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* Card 1 – INVEST */}
            <div id="invest" className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/40 scroll-mt-28">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-navy via-navy-light to-blue-400" />
              <div className="flex flex-col flex-1 p-10 md:p-12">
                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                {/* Label */}
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-300 mb-3">CM Investments</span>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
                  Have Capital to Invest?
                </h3>
                {/* Body */}
                <p className="text-neutral-300 text-base leading-relaxed flex-1">
                  Join our investor network and access carefully evaluated business opportunities across Sri Lanka and international markets.
                </p>
                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="/service?type=invest"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide border border-white/25 rounded-full px-7 py-3.5 hover:bg-white hover:text-navy-dark transition-all duration-300 group-hover:border-white/50"
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 – GET FUNDING */}
            <div id="funding" className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/30 scroll-mt-28">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300" />
              <div className="flex flex-col flex-1 p-10 md:p-12">
                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-amber-300">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="12" y1="12" x2="12" y2="16"/>
                    <line x1="10" y1="14" x2="14" y2="14"/>
                  </svg>
                </div>
                {/* Label */}
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-300 mb-3">Funding Hub</span>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
                  Need Funding for Your Project?
                </h3>
                {/* Body */}
                <p className="text-neutral-300 text-base leading-relaxed flex-1">
                  We help entrepreneurs prepare, structure, and connect projects with suitable investors and funding partners.
                </p>
                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="/service?type=funding"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide border border-amber-400/40 rounded-full px-7 py-3.5 hover:bg-amber-400 hover:text-navy-dark transition-all duration-300 group-hover:border-amber-400/70"
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: CM Million Project Teaser */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-soft-blue relative overflow-hidden">
        {/* Faint watermark */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-end pr-8">
          <span className="font-bold text-[180px] md:text-[260px] text-navy/[0.05] whitespace-nowrap leading-none select-none tracking-tighter">1M</span>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Tag variant="dark" className="mb-6">Flagship Initiative</Tag>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4 leading-snug">
                The CM Million Project CM E3™
              </h2>
              <p className="text-navy-dark/70 text-lg font-semibold mb-4 italic">
                1 Million Entrepreneurs. 1 Million Opportunities.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                CM Investments intends to invest up to LKR 1 million in selected Sri Lankan entrepreneurs - no matter their age, location, or background - to turn good ideas into real businesses.
              </p>
              {/* Stat chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: "Up to LKR 1M", icon: "💰" },
                  { label: "No age limit", icon: "🎯" },
                  { label: "Nationwide", icon: "🌍" },
                  { label: "Idea → Business", icon: "🚀" },
                ].map((chip) => (
                  <span key={chip.label} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-dark text-white text-sm font-semibold shadow-md">
                    <span>{chip.icon}</span>
                    {chip.label}
                  </span>
                ))}
              </div>
              <Button variant="primary" size="lg" href="/million-project" className="rounded-full">
                Learn More About the Million Project CM E3™
              </Button>
            </motion.div>
            {/* Right: feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="bg-navy-dark rounded-3xl p-8 md:p-10 text-white shadow-2xl"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-6">Who is it for?</p>
              <div className="space-y-5">
                {[
                  { icon: "💡", title: "Idea-stage founders", desc: "You have a problem worth solving and the ambition to build." },
                  { icon: "🏗️", title: "Early-stage businesses", desc: "You need capital to take the next step in your growth." },
                  { icon: "🌱", title: "Impact entrepreneurs", desc: "Your business creates jobs, solves problems, or protects the environment." },
                  { icon: "🌏", title: "Sri Lankan entrepreneurs", desc: "Any age, any district - Colombo to Vavuniya, 18 to 80." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a href="/million-project#apply" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Giant Background Word */}
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
              title="Entertainment"
              description=" Supporting media, music and broadcasting ventures that shape culture and connect Sri Lankan talent with global audiences."
              tags={["Music Industry","Broadcasting"]}
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
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Consulting%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="08"
              title="Hospitality & Tourism"
              description="Luxury resorts, eco-tourism projects, boutique hotels, and strategic hospitality developments across prime destinations."
              tags={["Resorts", "Eco-Tourism", "Leisure"]}
              imageSrc="https://images.unsplash.com/photo-1542314831-c6a4d14d837e?q=80&w=800&auto=format&fit=crop"
              imageAlt="Hospitality and Tourism Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Hospitality%20Sector%20Inquiry'}
            />
            <IndustryCard 
              number="09"
              title="Agriculture & Agri-Tech"
              description="Sustainable farming, precision agriculture, food security initiatives, and value-added export crop production."
              tags={["Agri-Tech", "Sustainability", "Export"]}
              imageSrc="https://images.unsplash.com/photo-1592982537447-6f2a6a0c5989?q=80&w=800&auto=format&fit=crop"
              imageAlt="Agriculture Sector"
              onExplore={() => window.location.href = 'mailto:cm@pearlbay.com?subject=Agriculture%20Sector%20Inquiry'}
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

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto mt-12">
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Bussa" className="flex flex-col items-center gap-5 group" title="Bussa">
              <div className="w-32 h-32 md:w-44 md:h-44 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/bussa.jpg" alt="Bussa" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
            </a>
            
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Pearlbay" className="flex flex-col items-center gap-5 group" title="Pearlbay">
              <div className="w-32 h-32 md:w-44 md:h-44 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/pearlbay.png" alt="Pearlbay" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
            </a>
            
            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Turu" className="flex flex-col items-center gap-5 group" title="Turu">
              <div className="w-32 h-32 md:w-44 md:h-44 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/turu.png" alt="Turu" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
              </div>
            </a>

            <a href="mailto:cm@pearlbay.com?subject=Inquiry%20regarding%20Nulife%20Biotech" className="flex flex-col items-center gap-5 group" title="Nulife Biotech">
              <div className="w-32 h-32 md:w-44 md:h-44 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img src="/company logos/nulife.jpeg" alt="Nulife Biotech" className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" />
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
                His experience spans international commercial negotiations, investment structuring, project development, commodity trading, strategic partnerships, and cross-border business expansion. <br /> He has contributed to the development of high-value commercial relationships and participated in strategic discussions involving energy transactions valued in excess of USD 100 billion over 5 years, demonstrating the firm&apos;s ability to engage with major international stakeholders.
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
