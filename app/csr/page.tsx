"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-navy-light selection:text-white">
      <title>Corporate Social Responsibility (CSR) | CM Investments (Pvt) Ltd.</title>
      <meta
        name="description"
        content="CM Investments' Corporate Social Responsibility commitments across Sri Lanka: Educate a Child in Sri Lanka, Sati Pasala mindfulness in schools, and TARRC animal rescue."
      />

      <Navigation />

      {/* ── Intro Hero Section (The Single Bold Moment) ── */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 bg-navy-dark overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.15]">
              Beyond Capital:<br />
              <span className="text-blue-400">Our Commitment to Sri Lanka</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              At CM Investments, we believe our responsibility to Sri Lanka extends far beyond structuring investments and creating financial value.
              <br /><br />
              We believe true, sustainable development begins with people, communities, and the world around us. Through our CSR initiatives and partnerships, we are committed to investing in the foundations of a stronger Sri Lanka-supporting education, mindful living, and animal welfare.
              <br /><br />
              Our work focuses on creating opportunities for children, nurturing conscious and compassionate communities, and protecting those who cannot speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Three Initiatives Grid ── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Initiative 1: Educate a Child */}
            <Link href="/csr/educate-a-child" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100 shadow-sm hover:shadow-md">
              <div className="w-full aspect-[4/3] relative mb-8 rounded-xl overflow-hidden bg-neutral-100">
                <Image
                  src="/csr/educate child in sri lanka.jpg"
                  alt="Educate a Child in Sri Lanka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-blue-600 transition-colors">Educate a Child in Sri Lanka</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Providing essential classroom supplies and direct educational assistance to students in need across rural Sri Lanka.</p>
            </Link>

            {/* Initiative 2: Sati Pasala */}
            <Link href="/csr/sati-pasala" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100 shadow-sm hover:shadow-md">
              <div className="w-full aspect-[4/3] relative mb-8 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                <Image
                  src="/csr/Sati-Pasala.webp"
                  alt="Sati Pasala"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-blue-600 transition-colors">Sati Pasala</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Cultivating mindfulness, focus, and conscious awareness among schoolchildren and educators across Sri Lanka.</p>
            </Link>

            {/* Initiative 3: TARRC */}
            <Link href="/csr/tarrc" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100 shadow-sm hover:shadow-md">
              <div className="w-full aspect-[4/3] relative mb-8 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                <Image
                  src="/csr/tarrc.png"
                  alt="TARRC"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-blue-600 transition-colors">TARRC</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Providing emergency rescue, medical care, and rehabilitation for injured and distressed animals in Sri Lanka.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Closing Section (Quiet & Disciplined) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-dark tracking-tight mb-4">
            Enduring Responsibility
          </h3>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Our social commitments are not transactional marketing gestures. They are long-term partnerships driven by accountability, humility, and genuine dedication to the welfare of Sri Lanka&apos;s people, children, and environment.
          </p>
          <a
            href="mailto:cm@pearlbay.com?subject=CSR%20Partnership%20Enquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy-dark text-navy-dark text-sm font-medium hover:bg-navy-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-light transition-colors"
          >
            Get in Touch Regarding Our Initiatives
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
