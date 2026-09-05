"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail, Phone, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand & About */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              CM INVESTMENTS (PVT) LTD.
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Connecting Capital. Creating Opportunity. Building Sustainable Futures.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="mailto:cm@pearlbay.com" className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-navy-light" />
                <span>hello@cminvest.com</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-1">
              <a href="mailto:cm@pearlbay.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">Quick Links</h4>
            <Link href="#home" className="text-neutral-300 hover:text-white transition-colors text-sm">Home</Link>
            <Link href="#about" className="text-neutral-300 hover:text-white transition-colors text-sm">About Us</Link>
            <Link href="#services" className="text-neutral-300 hover:text-white transition-colors text-sm">Services</Link>
            <Link href="#industries" className="text-neutral-300 hover:text-white transition-colors text-sm">Industries</Link>
            <Link href="#gallery" className="text-neutral-300 hover:text-white transition-colors text-sm">Gallery</Link>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">Explore</h4>
            <Link href="#portfolio" className="text-neutral-300 hover:text-white transition-colors text-sm">Portfolio</Link>
            <Link href="#gallery" className="text-neutral-300 hover:text-white transition-colors text-sm">Global Footprint</Link>
            <Link href="/million-project" className="text-neutral-300 hover:text-white transition-colors text-sm">Million Project</Link>
            <Link href="/service" className="text-neutral-300 hover:text-white transition-colors text-sm">Our Services</Link>
            <a href="mailto:cm@pearlbay.com" className="text-neutral-300 hover:text-white transition-colors text-sm">Contact Us</a>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">Newsletter Signup</h4>
            <p className="text-neutral-400 text-sm mb-2">
              Stay informed with investment insights, market trends, and new project opportunities.
            </p>
            <form className="flex border-b border-white/20 pb-2 focus-within:border-white transition-colors" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:cm@pearlbay.com'; }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-neutral-500"
              />
              <button type="submit" className="text-white hover:text-navy-light transition-colors p-1">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500"
        >
          <p>© {new Date().getFullYear()} CM Investments (Pvt) Ltd. All rights reserved.</p>
          <div className="flex space-x-6 flex-wrap justify-end gap-y-2">
            <Link href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/termsandcon" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookiespolicy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/websitedesclamer" className="hover:text-white transition-colors">Website Disclaimer</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
