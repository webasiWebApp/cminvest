"use client";

import React, { useState } from "react";
import { motion, type Transition } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export default function WhyInvestSriLankaPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    formType: "investor-enquiry",
    country: "",
    investorType: "",
    sectors: "",
    capacity: "",
    structure: "",
    timeframe: "",
    opportunityType: "",
    objectives: "",
    email: ""
  });

  const [isCountriesModalOpen, setIsCountriesModalOpen] = useState(false);

  const DTAA_COUNTRIES = [
    "Australia", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Canada", "China", "Czech Republic (Czechoslovakia)", 
    "Denmark", "Finland", "France", "Germany", "Hong Kong", "India", "Indonesia", "Iran", "Italy", "Japan", 
    "Jordan", "Korea (South)", "Kuwait", "Luxembourg", "Malaysia", "Mauritius", "Nepal", "Netherlands", "Norway", 
    "Oman", "Pakistan", "Palestine", "Philippines", "Poland", "Qatar", "Romania", "Russia", "Saudi Arabia", 
    "Seychelles", "Singapore", "Sweden", "Switzerland", "Thailand", "Turkey", "United Arab Emirates (UAE)", 
    "United Kingdom (U.K.)", "United States (U.S.A.)", "Vietnam"
  ];

  const fadeTransition: Transition = { duration: 0.7, ease: "easeOut" };
  const fu = { initial:{opacity:0,y:30}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-80px"}, transition: fadeTransition };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) setFormStatus("success");
      else setFormStatus("error");
    } catch {
      setFormStatus("error");
    }
  };

  const REASONS = [
    {
      num: "01",
      title: "Strategic Indian Ocean Location",
      desc: "Sri Lanka sits at the crossroads of major international shipping routes connecting Asia, the Middle East, Africa and Europe. Its location creates opportunities in Logistics, Ports, Maritime services, Manufacturing, Export, Energy, Tourism, and International trade. Sri Lanka's geographic position can make it an attractive base for businesses targeting South Asian and Indian Ocean markets."
    },
    {
      num: "02",
      title: "Gateway to Regional Markets",
      desc: "Sri Lanka provides access to major regional and preferential trading arrangements. The country's trade relationships provide opportunities to reach markets including India, Pakistan, Singapore, Thailand, South Asian markets, European Union, United Kingdom, and Wider Asian markets. The Board of Investment highlights Sri Lanka's trade agreements and preferential access as an important component of its investment proposition."
    },
    {
      num: "03",
      title: "Foreign Investment Protection & Repatriation",
      desc: "Sri Lanka's investment framework provides mechanisms for international investors to bring capital into permitted investments and repatriate investment income and capital proceeds through the applicable foreign-exchange channels. For permitted investments routed through an Inward Investment Account (IIA), the Central Bank states that investment income and capital proceeds can be repatriated outside Sri Lanka."
    },
    {
      num: "04",
      title: "Investment Incentives",
      desc: "Sri Lanka provides a range of investment incentives depending on the sector, location, investment size, export orientation and applicable investment framework. Potential incentives can include Corporate tax holidays for qualifying projects, Reduced or exempt taxation under specific investment regimes, Enhanced Capital Allowances, Import duty concessions, VAT-related exemptions or concessions, Concessions on capital goods and raw materials, Sector-specific incentives, and Strategic Development Project incentives. For example, the BOI currently lists tax holidays of 5–10 years for certain qualifying export projects. Incentives are not automatic."
    },
    {
      num: "05",
      title: "Double Taxation Protection (DTAAs)",
      desc: "Sri Lanka has entered into Double Taxation Avoidance Agreements (DTAAs) with numerous countries. These agreements can help reduce the risk of the same income being taxed twice and provide a framework for cross-border taxation. The BOI currently states that Sri Lanka has DTAAs with 45 countries. For international investors, this can be particularly important when structuring Dividends, Interest, Royalties, Cross-border services, and Corporate investments."
    },
    {
      num: "06",
      title: "100% Foreign Ownership in Many Sectors",
      desc: "Sri Lanka permits foreign investment and foreign ownership in many areas of the economy, subject to applicable restrictions and sector-specific rules. This can allow international investors to establish operations, subsidiaries, joint ventures or other investment structures in Sri Lanka. CM Investments can help international investors assess the most appropriate local structure and identify suitable Sri Lankan partners."
    },
    {
      num: "07",
      title: "Skilled & Cost-Competitive Workforce",
      desc: "Sri Lanka has a highly literate and increasingly skilled workforce. The country's talent base supports sectors including IT, Engineering, Healthcare, Manufacturing, Finance, Education, Tourism, Business Process Outsourcing, and Research & Development. The BOI cites Sri Lanka's literacy rate at approximately 92% and highlights competitive human-capital costs."
    },
    {
      num: "08",
      title: "Growing Investment Opportunities",
      desc: "Sri Lanka is undergoing significant economic transformation, creating opportunities across traditional and emerging sectors including Healthcare & Pharmaceuticals, Renewable Energy, Technology & AI, Manufacturing, Real Estate, Tourism & Hospitality, Logistics, Agriculture & Food Processing, Education, Infrastructure, IT & BPO, Commodity Trading, and Mining & Minerals."
    },
    {
      num: "09",
      title: "Export & International Business Potential",
      desc: "Sri Lanka can be more than a domestic market. We look for businesses that can use Sri Lanka as a platform for Manufacturing → Export, Technology → Global Services, Agriculture → Value-Added Products, Healthcare → Regional Services, Logistics → Indian Ocean Trade, Tourism → International Visitors, Education → International Students, and Commodity Trading → Regional Markets."
    },
    {
      num: "10",
      title: "A Market Where Local Knowledge Matters",
      desc: "Investing in an emerging market requires more than capital. It requires Local knowledge, Trusted relationships, Commercial understanding, Due diligence, Reliable partners, and Execution capability. This is where CM Investments can make the difference."
    }
  ];

  const CM_SERVICES = [
    { title: "Opportunity Identification", desc: "Finding projects and businesses that match your investment objectives." },
    { title: "Project Evaluation", desc: "Commercial and investment-readiness assessment." },
    { title: "Due Diligence Coordination", desc: "Working with appropriate legal, financial, technical and sector professionals." },
    { title: "Local Partnerships", desc: "Identifying potential Sri Lankan business partners and joint-venture opportunities." },
    { title: "Investment Structuring", desc: "Helping develop commercially appropriate investment structures alongside qualified legal and financial professionals." },
    { title: "Government & Institutional Engagement", desc: "Facilitating introductions and stakeholder engagement where appropriate." },
    { title: "Business Establishment", desc: "Supporting investors seeking to establish operations in Sri Lanka." },
    { title: "Post-Investment Support", desc: "Continuing strategic and commercial support as the investment develops." },
  ];

  const OPPORTUNITIES = [
    { sector: "Healthcare", details: "Pharmaceutical manufacturing, medical technology, healthcare facilities and regional healthcare services." },
    { sector: "Energy", details: "Renewable energy, energy infrastructure, storage and emerging energy technologies." },
    { sector: "Technology", details: "AI, software, digital platforms, automation and technology-enabled businesses." },
    { sector: "Manufacturing", details: "Export-oriented manufacturing and import substitution." },
    { sector: "Real Estate", details: "Hospitality, commercial property, mixed developments and strategic real estate." },
    { sector: "Tourism", details: "Hotels, resorts, wellness, cultural tourism and experiential travel." },
    { sector: "Commodities", details: "Oil & gas, agricultural commodities, precious metals and other strategic commodities." },
    { sector: "Education", details: "International education, vocational training and technology-enabled learning." },
    { sector: "Infrastructure", details: "Transport, logistics, utilities and sustainable infrastructure." },
  ];

  const JOURNEY = [
    { step: "01", title: "DISCOVER", desc: "Tell us about your investment objectives." },
    { step: "02", title: "IDENTIFY", desc: "We identify relevant projects and opportunities." },
    { step: "03", title: "EVALUATE", desc: "Projects undergo appropriate commercial and due-diligence assessment." },
    { step: "04", title: "STRUCTURE", desc: "We work with relevant professional advisers to develop an appropriate investment structure." },
    { step: "05", title: "INVEST", desc: "Proceed with the investment following completion of the required due diligence, approvals and documentation." },
    { step: "06", title: "GROW", desc: "Continue building value through strategic partnerships, business development and market expansion." }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white">
      <Navigation />

      {/* 1: HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-36 pb-24 bg-navy-dark overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(ellipse 80% 80% at 50% -20%, rgba(26,54,128,0.7) 0%, transparent 70%)"}} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-[150px] md:text-[250px] text-white/[0.03] whitespace-nowrap leading-none select-none tracking-tighter">SRI LANKA</div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div {...fu}>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-6 border border-blue-400/30 rounded-full px-4 py-1.5 bg-blue-400/10">WHY INVEST IN SRI LANKA?</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              A Strategic Gateway<br /><span className="text-blue-400">to South Asia</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Sri Lanka offers international investors a unique combination of strategic location, access to regional markets, skilled human capital, investment incentives, established infrastructure and significant opportunities across emerging industries.
            </p>
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
              <p className="text-lg text-white font-medium mb-2">At CM Investments, we go beyond identifying opportunities.</p>
              <p className="text-neutral-300">We help international investors understand the market, evaluate projects, find local partners and navigate the path from investment decision to implementation.</p>
            </div>
            <div className="mt-10 flex justify-center">
               <Button variant="primary" size="lg" href="#reasons">Explore 10 Reasons</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2: HIGHLIGHT CALLOUT (100% Repatriation) */}
      <section id="reasons" className="py-16 md:py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fu} className="bg-white border-l-8 border-[#3b82f6] p-8 md:p-14 shadow-lg rounded-r-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
             </div>
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-navy-dark mb-6 leading-tight">
                 100% Repatriation of <br className="hidden md:block"/>Capital & Profits*
               </h2>
              
               <p className="text-sm text-neutral-500 italic max-w-3xl leading-relaxed">
                 Foreign investors may repatriate eligible investment capital, profits and other permitted investment proceeds from Sri Lanka, subject to applicable foreign-exchange laws, tax requirements, investment conditions and banking procedures.
               </p>
               <br />

               <p className="text-sm text-neutral-500 italic max-w-3xl leading-relaxed">*Repatriation is subject to the applicable laws, regulations, investment structure and conditions governing the investment.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3: 10 REASONS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Tag variant="dark" className="mb-6 mx-auto">The Proposition</Tag>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark tracking-tight">10 Reasons to Consider Sri Lanka</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {REASONS.map((r, i) => (
              <motion.div key={i} {...fu} transition={{duration:0.6, delay:i%2*0.1}} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="text-4xl md:text-5xl font-black text-slate-100">{r.num}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-dark mb-4">{r.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">{r.desc}</p>
                  {r.title.includes("Double Taxation") && (
                    <button 
                      onClick={() => setIsCountriesModalOpen(true)}
                      className="mt-5 px-5 py-2.5 bg-[#3b82f6]/10 text-[#3b82f6] font-semibold rounded-full hover:bg-[#3b82f6]/20 transition-colors text-sm flex items-center gap-2"
                    >
                      View Countries
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4: CM INVESTMENTS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-navy-light text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <motion.div {...fu}>
               <Tag variant="outline" className="border-white/20 text-white bg-white/5 mb-6">Execution Partner</Tag>
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Invest Through CM Investments?</h2>
               <p className="text-2xl text-blue-400 font-semibold mb-6">Global Capital. Local Understanding.</p>
               <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                 International investors can have access to opportunities without having to navigate the Sri Lankan market alone. We provide the local knowledge, commercial understanding, and execution capability needed to succeed.
               </p>
             </motion.div>
             <motion.div {...fu} transition={{delay:0.2}}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {CM_SERVICES.map((s,i) => (
                   <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                     <h4 className="text-white font-bold mb-2">{s.title}</h4>
                     <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                   </div>
                 ))}
               </div>
             </motion.div>
           </div>
         </div>
      </section>

      {/* 5: OPPORTUNITIES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fu} className="text-center mb-16">
            <Tag variant="dark" className="mb-6 mx-auto">Investment Opportunities</Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">Where Are We Looking?</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">CM Investments is particularly interested in opportunities capable of generating sustainable economic value.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPPORTUNITIES.map((opt,i) => (
              <motion.div key={i} {...fu} transition={{delay:i*0.05}} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-navy-dark mb-3">{opt.sector}</h4>
                <p className="text-neutral-600 leading-relaxed">{opt.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6: INVESTMENT WITH PURPOSE */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
           <motion.div {...fu}>
             <Tag variant="dark" className="mb-6 mx-auto">Investment With Purpose</Tag>
             <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-12">We Believe Capital Should Create More Than Returns.</h2>
             
             <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
               {["Financial Returns", "Employment", "Innovation", "Economic Development", "Environmental Responsibility", "Social Impact"].map((item, i) => (
                 <React.Fragment key={i}>
                   <span className="text-lg md:text-2xl font-bold text-neutral-800">{item}</span>
                   {i < 5 && <span className="text-blue-400 font-bold text-2xl hidden md:inline">•</span>}
                 </React.Fragment>
               ))}
             </div>
             <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed italic">
               Our investment philosophy is built around the idea that <strong>commercial success and sustainable development can work together.</strong>
             </p>
           </motion.div>
        </div>
      </section>

      {/* 7: JOURNEY */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fu} className="text-center mb-20">
            <Tag variant="outline" className="border-white/20 text-white bg-white/5 mb-6 mx-auto">Your Investment Journey</Tag>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How We Work Together</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {JOURNEY.map((step, i) => (
              <motion.div key={i} {...fu} transition={{delay:i*0.1}} className="relative">
                <span className="absolute -top-10 left-0 text-[80px] font-black text-white/[0.03] pointer-events-none">{step.step}</span>
                <div className="relative z-10 border-t-2 border-[#3b82f6] pt-6">
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8: FINAL CTA & ENQUIRY */}
      <section id="enquiry" className="py-24 md:py-32 px-6 md:px-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fu}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-6 border border-blue-400/30 rounded-full px-4 py-1.5 bg-blue-400/10 inline-block">Ready to Explore Sri Lanka?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-6 tracking-tight leading-tight">Your Next Investment Could Start Here.</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Whether you are a Private Investor, Family Office, Institutional Investor, International Company, Strategic Investor, Fund, or Entrepreneur, CM Investments can help you explore opportunities in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button variant="primary" size="lg" href="#enquiry" className="rounded-xl px-6 py-4">Explore Investment Opportunities</Button>
               <Button variant="secondary" size="lg" href="mailto:cm@pearlbay.com" className="rounded-xl px-6 py-4 bg-white">Talk to CM Investments</Button>
            </div>
            
            <div className="mt-12 p-8 bg-navy-dark rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Invest in Sri Lanka.</h3>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Build in Sri Lanka.</h3>
              <h3 className="text-2xl font-bold mb-8">Grow with Sri Lanka.</h3>
              <p className="text-neutral-300 font-medium">Connecting Global Capital with Sustainable Opportunities.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fu} transition={{delay:0.2}} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-navy-dark/5 border border-neutral-100">
            <h3 className="text-2xl font-bold text-navy-dark mb-2">Investor Enquiry</h3>
            <p className="text-neutral-500 mb-8">Submit your details and investment objectives below.</p>
            
            {formStatus === "success" ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-200 text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <h4 className="text-xl font-bold mb-2">Enquiry Submitted</h4>
                <p>Thank you for reaching out. A member of the CM Investments team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Country of Residence</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, country: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Investor Type</label>
                    <input required type="text" placeholder="e.g. Family Office, Fund, Private" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, investorType: e.target.value})} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Preferred Sectors</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, sectors: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Investment Capacity</label>
                    <input required type="text" placeholder="Approximate value" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, capacity: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Preferred Structure</label>
                    <input type="text" placeholder="e.g. Equity, Debt, JV" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, structure: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-dark mb-2">Timeframe</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                      onChange={(e)=>setFormData({...formData, timeframe: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-dark mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50" 
                    onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-dark mb-2">Your Objectives / Enquiries</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-slate-50 resize-none"
                    onChange={(e)=>setFormData({...formData, objectives: e.target.value})}></textarea>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input required type="checkbox" id="investor-consent" className="mt-1 w-4 h-4 text-blue-600 bg-slate-50 border-neutral-300 rounded focus:ring-blue-500" />
                  <label htmlFor="investor-consent" className="text-sm text-neutral-600 leading-relaxed">
                    I agree to the <a href="/termsandcon" target="_blank" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="/privacypolicy" target="_blank" className="text-blue-500 hover:underline">Privacy & Confidentiality Notice</a>.
                  </label>
                </div>

                <Button variant="primary" size="lg" className="w-full py-4 rounded-xl" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "Submitting..." : "Submit Investor Enquiry"}
                </Button>
                
                {formStatus === "error" && (
                  <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* COUNTRIES MODAL */}
      {isCountriesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm" onClick={() => setIsCountriesModalOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
          >
            <div className="p-6 md:p-8 border-b border-neutral-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-2xl font-bold text-navy-dark">DTAA Countries</h3>
              <button onClick={() => setIsCountriesModalOpen(false)} className="text-neutral-400 hover:text-navy-dark transition-colors p-2 bg-white rounded-full shadow-sm border border-neutral-200">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {DTAA_COUNTRIES.map((country, idx) => (
                  <div key={idx} className="flex items-center text-navy-dark font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0"></span>
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
