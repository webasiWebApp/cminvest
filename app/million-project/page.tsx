"use client";

import React, { useState, useEffect } from "react";
import { motion, type Transition } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { BackgroundWord } from "@/components/ui/BackgroundWord";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { FounderCard } from "@/components/ui/FounderCard";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

const SL_DISTRICTS = ["Ampara","Anuradhapura","Badulla","Batticaloa","Colombo","Galle","Gampaha","Hambantota","Jaffna","Kalutara","Kandy","Kegalle","Kilinochchi","Kurunegala","Mannar","Matale","Matara","Monaragala","Mullaitivu","Nuwara Eliya","Polonnaruwa","Puttalam","Ratnapura","Trincomalee","Vavuniya"];
const inputStyles = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all text-sm";
const labelStyles = "block text-sm font-medium text-navy-dark mb-2";

const LOOKING_FOR = [
  { number:"01", title:"A Real Problem", description:"What genuine problem are you solving? We want to understand the need, the gap, and why it matters.", imageSrc:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", imageAlt:"A Real Problem", tags:["Challenge","Need"] },
  { number:"02", title:"A Practical Solution", description:"How will your business actually solve the problem? Simplicity and viability matter more than complexity.", imageSrc:"https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", imageAlt:"A Practical Solution", tags:["Innovation","Viability"] },
  { number:"03", title:"Entrepreneurial Ambition", description:"Are you prepared to build, learn, adapt, and work through uncertainty to make this happen?", imageSrc:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", imageAlt:"Entrepreneurial Ambition", tags:["Drive","Resilience"] },
  { number:"04", title:"Commercial Potential", description:"Can the idea become a sustainable, scalable business that generates real economic value over time?", imageSrc:"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop", imageAlt:"Commercial Potential", tags:["Scalability","Revenue"] },
  { number:"05", title:"Positive Impact", description:"Does it create employment, benefit communities, protect the environment, or contribute to economic growth?", imageSrc:"https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop", imageAlt:"Positive Impact", tags:["Jobs","Community"] },
];

const MAKES_MILLION = [
  { number:"01", title:"Create Jobs", description:"Businesses that create meaningful employment for Sri Lankans at every level.", imageSrc:"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop", imageAlt:"Create Jobs", tags:["Employment"] },
  { number:"02", title:"Solve Problems", description:"Ventures that address real, pressing challenges faced by people, industries or environment and wildlife.", imageSrc:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", imageAlt:"Solve Problems", tags:["Innovation"] },
  { number:"03", title:"Create Local Value", description:"Businesses that strengthen local supply chains and communities.", imageSrc:"https://images.unsplash.com/photo-1534951009808-766d18891ab0?q=80&w=800&auto=format&fit=crop", imageAlt:"Create Local Value", tags:["Local"] },
  { number:"04", title:"Have Export Potential", description:"Products or services with potential to generate foreign currency.", imageSrc:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop", imageAlt:"Export Potential", tags:["Global"] },
  { number:"05", title:"Use Technology", description:"Leveraging technology to deliver better products or operational efficiency.", imageSrc:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", imageAlt:"Use Technology", tags:["Tech"] },
  { number:"06", title:"Protect the Environment", description:"Businesses that are environmentally responsible or contribute to sustainability.", imageSrc:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop", imageAlt:"Environment", tags:["Green"] },
  { number:"07", title:"Create Social Impact", description:"Ventures that improve quality of life or address social inequality.", imageSrc:"https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop", imageAlt:"Social Impact", tags:["Social"] },
  { number:"08", title:"Inspire Others", description:"Ventures that inspire others to invest and grow the entrepreneurial ecosystem.", imageSrc:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", imageAlt:"Inspire Others", tags:["Inspire", "Invest"] },

];

const STEPS = [
  { num:"01", title:"Apply", body:"Tell us about your idea, business, or project using the application form on this page." },
  { num:"02", title:"Evaluate", body:"Our team reviews the opportunity, business model, market, entrepreneur, risks, and potential impact." },
  { num:"03", title:"Develop", body:"Selected entrepreneurs may receive guidance to improve their proposition and investment readiness." },
  { num:"04", title:"Invest", body:"CM Investments may invest up to LKR 1 million, subject to approval and agreed investment terms." },
  { num:"05", title:"Build", body:"The entrepreneur puts the investment to work, supported by agreed milestones." },
  { num:"06", title:"Grow", body:"CM Investments may continue supporting successful businesses through its wider network." },
];

const QUESTIONS = ["Who do I speak to about my business?","How do I price my product or service?","How do I find my first customers?","How do I register my business?","How do I approach an investor?","How do I expand internationally?","How do I manage my digital marketing","How do I manage my accounts and finance","Anything else"];

export default function MillionProjectPage() {
  const initialApplyData = {
    formType: "million-project",
    name: "",
    age: "",
    district: "",
    email: "",
    phone: "",
    background: "",
    businessName: "",
    industry: "",
    stage: "",
    problem: "",
    solution: "",
    customers: "",
    revenueModel: "",
    fundingAmount: "",
    fundingUse: "",
    differentiation: "",
    jobsCreated: "",
    benefitToSriLanka: "",
    socialAngle: "",
    exportPotential: "",
  };

  const initialPartnerData = {
    formType: "million-project-partner",
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentInterest: "",
    message: "",
  };

  const [applyData, setApplyData] = useState(initialApplyData);
  const [applyStatus, setApplyStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [applyError, setApplyError] = useState("");

  const [partnerData, setPartnerData] = useState(initialPartnerData);
  const [partnerStatus, setPartnerStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [partnerError, setPartnerError] = useState("");

  const onApplyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplyData((p) => ({ ...p, [name]: value }));
  };

  const onPartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPartnerData((p) => ({ ...p, [name]: value }));
  };

  const onApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus("loading");
    setApplyError("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applyData),
      });
      const res = await r.json().catch(() => ({}));
      if (r.ok && res.success !== false) {
        setApplyStatus("success");
      } else {
        setApplyError(res.error || "Failed to submit application. Please try again or email cm@pearlbay.com directly.");
        setApplyStatus("error");
      }
    } catch {
      setApplyError("Network connection error. Please try again or email cm@pearlbay.com directly.");
      setApplyStatus("error");
    }
  };

  const onPartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerStatus("loading");
    setPartnerError("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnerData),
      });
      const res = await r.json().catch(() => ({}));
      if (r.ok && res.success !== false) {
        setPartnerStatus("success");
      } else {
        setPartnerError(res.error || "Failed to submit enquiry. Please try again or email cm@pearlbay.com directly.");
        setPartnerStatus("error");
      }
    } catch {
      setPartnerError("Network connection error. Please try again or email cm@pearlbay.com directly.");
      setPartnerStatus("error");
    }
  };

  // Smooth scroll to target section when landing with a hash (e.g. #apply or #partner)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const el = document.getElementById(hash.replace("#", ""));
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
          }
        }
      };

      scrollToHash();
      window.addEventListener("hashchange", scrollToHash);
      return () => window.removeEventListener("hashchange", scrollToHash);
    }
  }, []);

  const fadeTransition: Transition = { duration: 0.7, ease: "easeOut" };
  const fu = { initial:{opacity:0,y:30}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-80px"}, transition: fadeTransition };

  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white">
      <Navigation />

      {/* A1: HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-36 pb-24 bg-navy-dark overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(ellipse 80% 70% at 50% -10%, rgba(26,54,128,0.7) 0%, transparent 70%)"}} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-[200px] md:text-[320px] text-white/[0.03] whitespace-nowrap leading-none select-none tracking-tighter">1 MILLION</div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div {...fu}>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-6 border border-blue-400/30 rounded-full px-4 py-1.5 bg-blue-400/10">Emerging Entrepreneurs & Enterprises (CM E3™)</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              1,000,000 Entrepreneurs.<br /><span className="text-blue-400">1,000,000 Opportunities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Up to <strong className="text-white">LKR 1 Million</strong> to help turn a good idea into a real business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="#apply">Apply for Funding</Button>
              <Button variant="secondary" size="lg" href="#partner">Partner With Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A2: INTRO */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fu}>
            <Tag variant="dark" className="mb-6">Why It Exists</Tag>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark tracking-tight mb-6 leading-snug">Sri Lanka Has No Shortage of Ambitious People or opportunities</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">What is often missing is the opportunity to take that first step. The Million Project CM E3™ was created to change that  identifying and supporting entrepreneurs across Sri Lanka who have the ambition to build businesses, solve real-world problems, create employment, and make a positive impact.</p>
            <p className="text-neutral-600 text-lg leading-relaxed">We believe opportunity should not belong only to those who already have capital, connections, or credentials.</p>
          </motion.div>
          <motion.div {...fu} transition={{duration:0.7,delay:0.15,ease:"easeOut"}}>
            <h3 className="text-sm font-bold text-navy-dark mb-6 uppercase tracking-wider">We Believe</h3>
            <ul className="space-y-4">
              {["A person with a great idea should have the opportunity to prove it.","A young entrepreneur should not be told they are too inexperienced.","An older entrepreneur should not be told they are too late.","Someone from a rural community should have the same opportunity as someone from Colombo.","A business should be judged by the problem it solves and the value it creates  ” not only by profit."].map((b,i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-navy-dark flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <p className="text-neutral-700 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Watermark: OPPORTUNITY */}
      <div className="relative h-[35vh] overflow-hidden flex items-center justify-center bg-white">
        <BackgroundWord text="OPPORTUNITY" />
      </div>

      {/* A3: WHAT WE LOOK FOR */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fu} className="text-center mb-16">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">What We Look For</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Five Things That Matter</h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">We do not need a perfect plan. We need these five things.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOOKING_FOR.map((c,i) => (
              <motion.div key={c.number} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.6,delay:i*0.08,ease:"easeOut"}}>
                <IndustryCard {...c} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A4: WHO CAN APPLY */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fu}>
            <Tag variant="dark" className="mb-6 mx-auto">Who Can Apply</Tag>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-dark tracking-tight mb-8">There Is No Age Limit.</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Open to Sri Lankan entrepreneurs of any age  ” first-time founders, students, experienced professionals, existing small-business owners, rural entrepreneurs, returning Sri Lankans, product developers, tech founders, and social or environmental entrepreneurs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["First-Time Founders","Students","Professionals","Small-Business Owners","Rural Entrepreneurs","Returning Sri Lankans","Tech Founders","Social Entrepreneurs","Product Developers","Environmental Ventures"].map(t => (
                <span key={t} className="px-4 py-2 rounded-full bg-soft-blue text-navy-dark text-sm font-medium border border-navy/10">{t}</span>
              ))}
            </div>
            <p className="text-navy-dark font-semibold text-xl italic max-w-2xl mx-auto">
              &ldquo;We are interested in the entrepreneur and the opportunity  ” not simply the age on your identity card.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* A5: HOW MUCH */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fu} className="text-center mb-16">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">Investment</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How Much, and What It&apos;s For</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fu}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">Investment Amount</p>
              <p className="text-5xl md:text-6xl font-bold text-white mb-4">Up to<br/>LKR 1,000,000</p>
              <p className="text-neutral-400 text-base leading-relaxed mb-8">The amount depends on the business, requirement, investment structure, commercial potential, and project assessment. Funding may be released in stages.</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">What funding can be used for:</p>
              <div className="flex flex-wrap gap-2">
                {["Equipment","Product development","Technology","Initial stock","Marketing","Business setup","Digital platforms","Manufacturing","R&D","Working capital","Sustainable technologies","Business expansion"].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fu} transition={{duration:0.7,delay:0.15,ease:"easeOut"}} className="rounded-2xl border border-amber-400/40 bg-amber-400/5 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Important Notice</span>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed">
                The Million Project CM E3™ is <strong className="text-white">not a grant programme</strong> and submission does not guarantee funding. Selected investments are subject to project evaluation, due diligence, investment approval, documentation, and agreed investment terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A6: WHAT MAKES A MILLION PROJECT */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fu} className="text-center mb-16">
            <Tag variant="dark" className="mb-6 mx-auto">The Standard</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">What Makes a Million Project CM E3™?</h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">The businesses we back are defined by the value they create  ” not just the profit they generate.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MAKES_MILLION.map((c,i) => (
              <motion.div key={c.number} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.6,delay:i*0.07,ease:"easeOut"}}>
                <IndustryCard {...c} className="h-full min-h-[260px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A7: PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fu} className="text-center mb-16">
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">The Process</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">From Idea to Business</h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">A clear, honest path from your first application to your first investment.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS.map((s,i) => (
              <motion.div key={s.num} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.6,delay:i*0.1,ease:"easeOut"}} className="flex gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <span className="flex-shrink-0 text-3xl font-mono font-bold text-blue-400">{s.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A8: MORE THAN MONEY */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fu}>
            <Tag variant="dark" className="mb-6">More Than Money</Tag>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark tracking-tight mb-6 leading-snug">Capital is only the beginning.</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Every entrepreneur faces questions beyond funding. Million Project CM E3™ entrepreneurs may gain access to CM Investments&apos; wider network  ” introductions, strategic guidance, business development support, and future investment opportunities.
            </p>
          </motion.div>
          <motion.div {...fu} transition={{duration:0.7,delay:0.15,ease:"easeOut"}}>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">Common questions we can help with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUESTIONS.map((q,i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-soft-blue border border-navy/5">
                  <span className="text-navy-light font-bold text-lg flex-shrink-0">?</span>
                  <p className="text-navy-dark text-sm leading-relaxed font-medium">{q}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Watermark: ENTREPRENEURS */}
      <div className="relative h-[35vh] overflow-hidden flex items-center justify-center bg-white">
        <BackgroundWord text="ENTREPRENEURS" />
      </div>

      {/* A9: BIG VISION */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 bg-navy-dark overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-[160px] md:text-[260px] text-white/[0.03] whitespace-nowrap leading-none select-none tracking-tighter">1 MILLION</div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fu}>
            <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">Our Vision</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-snug">The Big Vision</h2>
          </motion.div>
          <div className="space-y-6 text-left mb-12">
            {[
              <>Imagine one entrepreneur creating five jobs. Then another creating ten. Another developing an export product, reaching international markets. Another solving a healthcare problem that affects a rural community.</>,
              <>Each business creating value. Each entrepreneur inspiring others. Each investment building towards something larger than itself.</>,
              <>The ultimate ambition of the Million Project CM E3™ is to support the creation and growth of one million entrepreneurial opportunities over the long term, with a long-term aspiration to help facilitate businesses capable of generating more than USD 9 billion in cumulative economic value.</>
            ].map((p,i) => (
              <motion.p key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.12}} className="text-neutral-300 text-lg leading-relaxed">{p}</motion.p>
            ))}
          </div>
          <motion.div {...fu} transition={{duration:0.7,delay:0.25}} className="rounded-2xl border border-white/15 bg-white/5 p-6 text-left">
            <p className="text-neutral-400 text-sm leading-relaxed">
              <strong className="text-neutral-300">Note:</strong> This is a long-term ambition, not a promise of guaranteed investment or economic output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A10: FOR INVESTORS */}
      <section id="partner" className="py-24 md:py-32 px-6 md:px-12 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fu}>
            <Tag variant="dark" className="mb-6">For Investors</Tag>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark tracking-tight mb-6 leading-snug">Why Partner With Us?</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Access to emerging businesses with high growth potential",
                "Diversified entrepreneurial investment opportunities",
                "Early-stage investment exposure across multiple sectors",
                "Social and economic impact alongside commercial returns",
                "Participation in Sri Lanka's entrepreneurial ecosystem",
                "Potential commercial returns from selected investments"
              ].map((b,i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <p className="text-neutral-700 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-amber-400/30 bg-amber-50 p-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>We approach every opportunity as a partnership.</strong> evaluated carefully, with terms agreed together. As with any investment, risk is real and past performance doesn't guarantee future results, but our goal is always a relationship where both sides win.
              </p>
            </div>
          </motion.div>
          <motion.div {...fu} transition={{duration:0.7,delay:0.15,ease:"easeOut"}}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold text-navy-dark mb-6">Become a Million Project CM E3™ Partner & Investor</h3>
              {partnerStatus === "success" ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-200 text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <h4 className="font-bold text-lg mb-1">Thank you for reaching out!</h4>
                  <p className="text-sm text-green-800 leading-relaxed">Your partner enquiry has been received. Our team will review the details and connect with you shortly.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setPartnerStatus("idle");
                      setPartnerData(initialPartnerData);
                    }}
                    className="mt-5 text-xs font-bold text-navy-dark bg-white hover:bg-neutral-100 px-5 py-2.5 rounded-full border border-neutral-200 transition-colors shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onPartnerSubmit} className="space-y-5">
                  {[
                    {id:"name",label:"Full Name *",type:"text",placeholder:"Your name",req:true},
                    {id:"email",label:"Email *",type:"email",placeholder:"you@example.com",req:true},
                    {id:"phone",label:"Phone *",type:"tel",placeholder:"+94 77 000 0000",req:true},
                    {id:"company",label:"Company / Organisation",type:"text",placeholder:"Optional",req:false}
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={`p-${f.id}`} className={labelStyles}>{f.label}</label>
                      <input id={`p-${f.id}`} type={f.type} name={f.id} required={f.req} placeholder={f.placeholder} value={(partnerData as any)[f.id]} onChange={onPartnerChange} className={inputStyles} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="p-investmentInterest" className={labelStyles}>Investment Interest *</label>
                    <select id="p-investmentInterest" name="investmentInterest" required value={partnerData.investmentInterest} onChange={onPartnerChange} className={inputStyles}>
                      <option value="" disabled>Select range</option>
                      <option value="Under LKR 1 Million">Under LKR 1 Million</option>
                      <option value="LKR 1M – 10M">LKR 1M – 10M</option>
                      <option value="LKR 10M – 50M">LKR 10M – 50M</option>
                      <option value="LKR 50M+">LKR 50M+</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="p-message" className={labelStyles}>Message</label>
                    <textarea id="p-message" name="message" rows={4} value={partnerData.message} onChange={onPartnerChange} className={inputStyles} placeholder="Tell us more about your interest..." />
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input required type="checkbox" id="partner-consent" className="mt-1 w-4 h-4 text-blue-600 bg-white border-neutral-300 rounded focus:ring-blue-500" />
                    <label htmlFor="partner-consent" className="text-sm text-neutral-600 leading-relaxed text-left">
                      I agree to the <a href="/termsandcon" target="_blank" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="/privacypolicy" target="_blank" className="text-blue-500 hover:underline">Privacy & Confidentiality Notice</a>.
                    </label>
                  </div>

                  {partnerStatus === "error" && (
                    <div className="bg-red-50 text-red-600 text-sm p-3.5 rounded-xl border border-red-200">
                      {partnerError || "Something went wrong. Please email cm@pearlbay.com directly."}
                    </div>
                  )}
                  <Button type="submit" variant="primary" size="md" className="w-full mt-4" loading={partnerStatus === "loading"} disabled={partnerStatus === "loading"}>
                    {partnerStatus === "loading" ? "Submitting..." : "Become a Partner"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* A11: APPLICATION FORM */}
      <section id="apply" className="py-24 md:py-32 px-6 md:px-12 bg-soft-blue scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fu} className="text-center mb-12">
            <Tag variant="dark" className="mb-6 mx-auto">Apply Now</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">Think You Have What It Takes?</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">You do not need a large office or a perfect pitch deck. You need an idea, a problem worth solving, the ambition to build, the willingness to learn, and a realistic plan.</p>
          </motion.div>
          {applyStatus === "success" ? (
            <div className="bg-green-50 text-green-700 p-10 rounded-3xl border border-green-200 text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-green-800 leading-relaxed max-w-lg mx-auto">Thank you for submitting your project. Our team will review your application and be in touch soon.</p>
              <button
                type="button"
                onClick={() => {
                  setApplyStatus("idle");
                  setApplyData(initialApplyData);
                }}
                className="mt-6 inline-flex items-center px-6 py-2.5 text-sm font-semibold text-green-900 bg-green-200/70 hover:bg-green-200 rounded-full transition-colors"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={onApplySubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 space-y-10">
              {/* 1. Personal */}
              <div>
                <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-6 pb-3 border-b border-neutral-100">1. Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="a-name" className={labelStyles}>Full Name *</label><input id="a-name" type="text" name="name" required value={applyData.name} onChange={onApplyChange} className={inputStyles} placeholder="Your full name" /></div>
                  <div><label htmlFor="a-age" className={labelStyles}>Age *</label><input id="a-age" type="number" name="age" required min="10" max="120" value={applyData.age} onChange={onApplyChange} className={inputStyles} placeholder="e.g. 28" /></div>
                  <div><label htmlFor="a-district" className={labelStyles}>District *</label><select id="a-district" name="district" required value={applyData.district} onChange={onApplyChange} className={inputStyles}><option value="" disabled>Select district</option>{SL_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}</select></div>
                  <div><label htmlFor="a-email" className={labelStyles}>Email *</label><input id="a-email" type="email" name="email" required value={applyData.email} onChange={onApplyChange} className={inputStyles} placeholder="you@example.com" /></div>
                  <div><label htmlFor="a-phone" className={labelStyles}>Phone *</label><input id="a-phone" type="tel" name="phone" required value={applyData.phone} onChange={onApplyChange} className={inputStyles} placeholder="+94 77 000 0000" /></div>
                  <div><label htmlFor="a-bg" className={labelStyles}>Professional Background</label><textarea id="a-bg" name="background" rows={3} value={applyData.background} onChange={onApplyChange} className={inputStyles} placeholder="Brief professional or educational background..." /></div>
                </div>
              </div>
              {/* 2. Business */}
              <div>
                <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-6 pb-3 border-b border-neutral-100">2. Your Business</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="a-bn" className={labelStyles}>Business / Project Name *</label><input id="a-bn" type="text" name="businessName" required value={applyData.businessName} onChange={onApplyChange} className={inputStyles} placeholder="Name of your business or project" /></div>
                  <div><label htmlFor="a-ind" className={labelStyles}>Industry / Sector *</label><select id="a-ind" name="industry" required value={applyData.industry} onChange={onApplyChange} className={inputStyles}><option value="" disabled>Select industry</option>{["Agriculture & Food","Education","Energy & Environment","Fashion","Financial Services","Healthcare","Hospitality & Tourism","Manufacturing","Media & Creative","Real Estate","Retail","Technology & Software","Transport & Logistics","Other"].map(v => <option key={v} value={v}>{v}</option>)}</select></div>
                  <div className="md:col-span-2"><label htmlFor="a-stage" className={labelStyles}>Business Stage *</label><select id="a-stage" name="stage" required value={applyData.stage} onChange={onApplyChange} className={inputStyles}><option value="" disabled>Select stage</option><option value="Idea Stage">Idea Stage – I have an idea but have not started yet</option><option value="New Business">New Business – Early stages of operation</option><option value="Existing Business">Existing Business – Operating, looking to grow</option></select></div>
                </div>
              </div>
              {/* 3. Opportunity */}
              <div>
                <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-6 pb-3 border-b border-neutral-100">3. Your Opportunity</h3>
                <div className="space-y-6">
                  <div><label htmlFor="a-prob" className={labelStyles}>What problem are you solving? *</label><textarea id="a-prob" name="problem" required rows={3} value={applyData.problem} onChange={onApplyChange} className={inputStyles} placeholder="Describe the specific problem your business addresses..." /></div>
                  <div><label htmlFor="a-sol" className={labelStyles}>How does your business solve it? *</label><textarea id="a-sol" name="solution" required rows={3} value={applyData.solution} onChange={onApplyChange} className={inputStyles} placeholder="Your product, service, or approach..." /></div>
                  <div><label htmlFor="a-cust" className={labelStyles}>Who are your customers? *</label><textarea id="a-cust" name="customers" required rows={2} value={applyData.customers} onChange={onApplyChange} className={inputStyles} placeholder="Who will buy your product or use your service?" /></div>
                  <div><label htmlFor="a-rev" className={labelStyles}>Revenue Model *</label><textarea id="a-rev" name="revenueModel" required rows={2} value={applyData.revenueModel} onChange={onApplyChange} className={inputStyles} placeholder="How will the business make money?" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label htmlFor="a-fa" className={labelStyles}>Funding Required (LKR) *</label><select id="a-fa" name="fundingAmount" required value={applyData.fundingAmount} onChange={onApplyChange} className={inputStyles}><option value="" disabled>Select amount</option><option value="Under LKR 250,000">Under LKR 250,000</option><option value="LKR 250,000 – 500,000">LKR 250,000 – 500,000</option><option value="LKR 500,000 – 750,000">LKR 500,000 – 750,000</option><option value="LKR 750,000 – 1,000,000">LKR 750,000 – 1,000,000</option></select></div>
                    <div><label htmlFor="a-diff" className={labelStyles}>What makes you different?</label><input id="a-diff" type="text" name="differentiation" value={applyData.differentiation} onChange={onApplyChange} className={inputStyles} placeholder="Key advantage or differentiation" /></div>
                  </div>
                  <div><label htmlFor="a-use" className={labelStyles}>How will you use the investment? *</label><textarea id="a-use" name="fundingUse" required rows={3} value={applyData.fundingUse} onChange={onApplyChange} className={inputStyles} placeholder="How the investment will be used and what it will achieve..." /></div>
                </div>
              </div>
              {/* 4. Impact */}
              <div>
                <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-6 pb-3 border-b border-neutral-100">4. Your Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="a-jobs" className={labelStyles}>Jobs it could create</label><input id="a-jobs" type="text" name="jobsCreated" value={applyData.jobsCreated} onChange={onApplyChange} className={inputStyles} placeholder="e.g. 5 – 10 direct jobs in year 1" /></div>
                  <div><label htmlFor="a-exp" className={labelStyles}>Export potential</label><input id="a-exp" type="text" name="exportPotential" value={applyData.exportPotential} onChange={onApplyChange} className={inputStyles} placeholder="e.g. Regional export within 3 years" /></div>
                  <div><label htmlFor="a-bsl" className={labelStyles}>Benefit to Sri Lanka</label><textarea id="a-bsl" name="benefitToSriLanka" rows={3} value={applyData.benefitToSriLanka} onChange={onApplyChange} className={inputStyles} placeholder="How does this benefit the Sri Lankan economy or society?" /></div>
                  <div><label htmlFor="a-soc" className={labelStyles}>Social / environmental angle</label><textarea id="a-soc" name="socialAngle" rows={3} value={applyData.socialAngle} onChange={onApplyChange} className={inputStyles} placeholder="Any social or environmental dimension?" /></div>
                </div>
              </div>
              {/* Documents */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-2">Supporting Documents</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  If you have a business plan, pitch deck, financial projections, or product information, email them separately to{" "}
                  <a href="mailto:cm@pearlbay.com?subject=Million%20Project%20Supporting%20Documents" className="text-navy-light underline">cm@pearlbay.com</a>{" "}
                  with your name and business name in the subject line.{" "}
                  <span className="italic text-neutral-400">Document upload via this form is coming soon.</span>
                </p>
              </div>
              
              <div className="flex flex-col gap-3 mt-8">
                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="auth-consent" className="mt-1 w-4 h-4 text-blue-600 bg-white border-neutral-300 rounded focus:ring-blue-500" />
                  <label htmlFor="auth-consent" className="text-sm text-neutral-600 leading-relaxed">
                    I confirm that I am authorised to submit this information and that it is accurate and genuine.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="share-consent" className="mt-1 w-4 h-4 text-blue-600 bg-white border-neutral-300 rounded focus:ring-blue-500" />
                  <label htmlFor="share-consent" className="text-sm text-neutral-600 leading-relaxed">
                    I authorise CM Investments to share relevant project information with selected investors/partners for the purpose of evaluating potential funding or investment.
                  </label>
                </div>
              </div>

              {applyStatus === "error" && (
                <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-200 text-center">
                  {applyError || "Something went wrong. Please email cm@pearlbay.com directly."}
                </div>
              )}
              <div className="text-center mt-8">
                <Button type="submit" variant="primary" size="lg" className="px-12" loading={applyStatus === "loading"} disabled={applyStatus === "loading"}>
                  {applyStatus === "loading" ? "Submitting Application..." : "Submit My Project"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* A12: FOUNDER MESSAGE */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fu}>
            <div className="text-center mb-10">
              <Tag variant="dark" className="mx-auto">A Message From Our Founder</Tag>
            </div>
            <FounderCard
              name="Chathura Masinha"
              position="Founder & Principal, CM Investments (Pvt) Ltd."
              imageSrc="/chathura-masinha.jpg"
              imageAlt="Chathura Masinha – Founder, CM Investments"
              quote="Opportunity should not belong only to those who already have capital. As an entrepreneur myself, I understand that building a business involves uncertainty, setbacks, difficult decisions, and the constant challenge of finding resources to move forward. I don't expect every project to succeed. I do believe more people deserve the opportunity to try."
              biography={
                <p>Chathura Masinha is the Founder and Principal of CM Investments (Pvt) Ltd., connecting global capital with transformational opportunities across Sri Lanka and international markets. The CM Million Project CM E3™ is his flagship entrepreneurial initiative.</p>
              }
              linkedInUrl="mailto:cm@pearlbay.com"
            />
          </motion.div>
        </div>
      </section>

      {/* A13: FINAL CTA */}
      <section className="py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-100px"}} transition={{duration:0.8,ease:"easeOut"}} className="relative rounded-[32px] overflow-hidden bg-navy-dark text-center py-20 px-8 md:py-28 md:px-16">
            <motion.div animate={{backgroundPosition:["0% 50%","100% 50%","0% 50%"]}} transition={{duration:15,ease:"linear",repeat:Infinity}} className="absolute inset-0 z-0 opacity-40 bg-[length:200%_200%]" style={{backgroundImage:"radial-gradient(circle at center, rgba(26,54,128,0.8) 0%, rgba(4,13,41,1) 100%)"}} />
            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-4 border border-blue-400/30 rounded-full px-4 py-1.5 bg-blue-400/10">1 Million Entrepreneurs. 1 Million Opportunities.</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">Ready to Be Part of the Movement?</h2>
              <p className="text-lg text-neutral-300 mb-10 leading-relaxed max-w-2xl">Whether you have an idea to fund, capital to invest, or a business to back — the Million Project CM E3™ starts here.</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" href="#apply">Apply for Funding</Button>
                <Button variant="primary" size="lg" href="#partner">Partner With Us</Button>
                <Button variant="secondary" size="lg" href="mailto:cm@pearlbay.com?subject=Million%20Project%20Investor%20Enquiry">Invest in the Movement</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
