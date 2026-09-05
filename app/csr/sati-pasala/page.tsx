"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import Image from "next/image";

const markdownContent = `
Emotional equilibrium and mental clarity are as indispensable to healthy human development as academic excellence. **Sati Pasala** (“Mindfulness School”) is an internationally recognized, secular educational movement dedicated to cultivating mindfulness, focus, and conscious awareness among schoolchildren and educators across Sri Lanka.

By embedding short, natural, and accessible mindfulness pauses into everyday school routines, Sati Pasala helps children develop emotional self-regulation, empathy, stress resilience, and a grounded sense of presence.

CM Investments proudly supports Sati Pasala in bringing peaceful, attentive, and compassionate learning cultures to schools throughout the island, helping young people navigate modern challenges with clarity and composure.

## The Vision Behind Sati Pasala

### Most Venerable Uda Eriyagama Dhammajiva Maha Thero

Sati Pasala was founded and shaped by **Most Venerable Uda Eriyagama Dhammajiva Maha Thero**, a highly respected meditation teacher and the Abbot and Chief Meditation Master of **Nissarana Vanaya**, Sri Lanka. With decades of dedicated mindfulness practice, he envisioned making mindfulness accessible to children, teachers, and communities in a practical, universal, and non-sectarian way.

His vision was simple yet profound: **mindfulness should be accessible to everyone—not limited by age, background, religion, or social status.**

Under his guidance, Sati Pasala began in 2016 as a grassroots initiative focused on schools and subsequently developed into a wider mindfulness movement reaching schools, universities, educators, public institutions, and other communities.

### A Vision for a Mindful Generation

CM Investments is proud to support this vision because we believe that sustainable development begins not only with educated people, but with **aware, balanced, compassionate, and responsible human beings**.

Supporting Sati Pasala is therefore an investment in something deeper than education alone:

**the development of the human mind and the character of the next generation.**
`;

export default function SatiPasalaPage() {
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
                src="/csr/Sati-Pasala.webp"
                alt="Sati Pasala Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Sati Pasala</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent.trim()} />
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="https://www.satipasala.org/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full border border-blue-500 bg-blue-600/10 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white focus-visible:outline-none transition-colors">
              Visit satipasala.org
            </a>
            <a href="mailto:cm@pearlbay.com?subject=Support%20Sati%20Pasala%20Initiative" className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 focus-visible:outline-none transition-colors">
              Support the Initiative
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
