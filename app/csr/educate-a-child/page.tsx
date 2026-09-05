"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import Image from "next/image";

const markdownContent = `
## Every Child Deserves the Opportunity to Learn

Education is one of the most powerful forces for changing a life. It opens doors, builds confidence, strengthens families, and gives young people the opportunity to shape their own future.

**Educate a Child in Sri Lanka** is CM Investments' flagship CSR initiative, founded on a simple belief:

### **No child should be held back from education because their family cannot afford the basic necessities of going to school.**

Across Sri Lanka, many children from economically vulnerable families face challenges that extend far beyond the classroom. The cost of books, stationery, school uniforms, footwear, learning materials, and other everyday necessities can become a significant burden for families—and, in some cases, a reason for a child to fall behind or leave school altogether.

We are working to change that.

## Supporting Children Where It Matters Most

Through **Educate a Child in Sri Lanka**, we work with grassroots schools, teachers, communities, and families to identify children who need support most.

Our assistance may include:

* School books and educational materials
* Stationery and classroom supplies
* School uniforms and essential clothing
* School footwear and other necessities
* Direct educational assistance for vulnerable children
* Support for schools serving disadvantaged communities

Our focus is practical: **remove the barriers that prevent children from learning.**

## Investing in a Child's Future

We do not see education assistance as simply giving a child a schoolbook or a uniform.

We see it as giving a child **continuity, confidence, opportunity, and hope**.

When a child can remain in school, participate with their classmates, learn without the burden of missing basic necessities, and develop the skills they need for tomorrow, the impact extends far beyond that individual child.

It reaches their family, their community, and ultimately the future of Sri Lanka.

## From One Child to a Stronger Sri Lanka

Our ambition is to build a growing network of support for children across regional and rural Sri Lanka, particularly where resources are limited and assistance can make a meaningful difference.

We believe that sustainable national development begins with human development.

### **Every child educated is an investment in Sri Lanka's future.**

## Join Us

Education is not a privilege that should depend on where a child is born or what their family can afford.

CM Investments invites individuals, businesses, institutions, and partners who share this belief to join us in helping more Sri Lankan children stay in school and reach their potential.

**Educate a Child. Empower a Future. Build Sri Lanka.**
`;

export default function EducateAChildPage() {
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
                src="/csr/educate child in sri lanka.jpg"
                alt="Educate a Child in Sri Lanka Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Educate a Child in Sri Lanka</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent.trim()} />
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="mailto:cm@pearlbay.com?subject=Support%20Educate%20a%20Child%20Initiative" className="px-8 py-3.5 rounded-full border border-blue-500 bg-blue-600/10 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white focus-visible:outline-none transition-colors">
              Support the Initiative
            </a>
            <a href="mailto:cm@pearlbay.com?subject=Partner%20With%20Us%20-%20Educate%20a%20Child" className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 focus-visible:outline-none transition-colors">
              Partner With Us
            </a>
            <a href="mailto:cm@pearlbay.com?subject=Sponsor%20a%20Child's%20Education" className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 focus-visible:outline-none transition-colors">
              Sponsor a Child's Education
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
