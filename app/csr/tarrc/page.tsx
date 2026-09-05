"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import Image from "next/image";

const markdownContent = `
The character of a compassionate society is reflected in its treatment of innocent, voiceless lives. **Turu Animal Rescue and Rehabilitation Centre (TARRC)** is on the frontlines of animal welfare in Sri Lanka, providing emergency roadside rescue, critical surgical and medical care, long-term rehabilitation, and responsible rehoming for injured, abandoned, and distressed animals.

Operating with deep empathy and disciplined care, TARRC manages safe shelter facilities, undertakes community sterilization and vaccination drives, and champions humane coexistence between animals and local neighborhoods.

Through CM Investments' partnership, TARRC receives vital assistance to sustain its veterinary treatments, nourish rescued animals through recovery, and connect rehabilitated companions with loving, permanent families.
`;

export default function TARRCPage() {
  return (
    <main className="min-h-screen bg-navy-dark selection:bg-navy-light selection:text-white">
      <div className="bg-navy-dark">
        <Navigation />
      </div>
      
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="mb-10 w-full max-w-[240px] aspect-square relative rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2">
              <Image
                src="/csr/tarrc.png"
                alt="TARRC Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">TARRC — Turu Animal Rescue and Rehabilitation Centre</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent.trim()} />
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="mailto:cm@pearlbay.com?subject=Support%20TARRC%20Initiative" className="px-8 py-3.5 rounded-full border border-blue-500 bg-blue-600/10 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white focus-visible:outline-none transition-colors">
              Support the Initiative
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
