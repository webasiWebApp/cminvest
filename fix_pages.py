import os

files_to_fix = [
    ('app/termsandcon/page.tsx', 'Terms & Conditions', 'TermsAndConPage'),
    ('app/privacypolicy/page.tsx', 'Privacy Policy', 'PrivacyPolicyPage'),
    ('app/cookiespolicy/page.tsx', 'Cookie Policy', 'CookiesPolicyPage'),
    ('app/websitedesclamer/page.tsx', 'Website Disclaimer', 'WebsiteDisclaimerPage'),
]

for file_path, title, component_name in files_to_fix:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'export default function' in content:
        continue
        
    escaped_content = content.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
    
    new_content = f"""\"use client\";

import React from "react";
import {{ Navigation }} from "@/components/ui/Navigation";
import {{ Footer }} from "@/components/ui/Footer";
import {{ MarkdownRenderer }} from "@/components/ui/MarkdownRenderer";

const markdownContent = `{escaped_content}`;

export default function {component_name}() {{
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy-dark">
        <Navigation />
      </div>
      
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">{title}</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={{markdownContent}} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}}
"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Fixed {file_path}")
