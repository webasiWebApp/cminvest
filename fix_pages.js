const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/termsandcon/page.tsx',
  'app/privacypolicy/page.tsx',
  'app/cookiespolicy/page.tsx',
  'app/websitedesclamer/page.tsx'
];

for (const file of filesToFix) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If it already contains export default, skip
  if (content.includes('export default function')) {
    console.log(`Skipping ${file} - already fixed`);
    continue;
  }
  
  // Escape backticks and ${}
  content = content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  
  const componentName = file.split('/')[1].replace(/policy|andcon|desclamer/i, 'Page').replace(/^(.)/, c => c.toUpperCase());
  const title = file.includes('terms') ? 'Terms & Conditions' 
              : file.includes('privacy') ? 'Privacy Policy' 
              : file.includes('cookies') ? 'Cookie Policy' 
              : 'Website Disclaimer';

  const newContent = `"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

const markdownContent = \`${content}\`;

export default function ${componentName}() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy-dark">
        <Navigation />
      </div>
      
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">${title}</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
`;

  fs.writeFileSync(filePath, newContent);
  console.log(`Fixed ${file}`);
}
