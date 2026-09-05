$files = @("app\termsandcon\page.tsx", "app\privacypolicy\page.tsx", "app\cookiespolicy\page.tsx", "app\websitedesclamer\page.tsx")

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        continue
    }

    $content = Get-Content -Raw -Path $file
    if ($content -match "export default function") {
        Write-Host "Skipping $file - already fixed"
        continue
    }

    $title = ""
    $componentName = ""
    if ($file -match "terms") { $title = "Terms & Conditions"; $componentName = "TermsAndConPage" }
    elseif ($file -match "privacy") { $title = "Privacy Policy"; $componentName = "PrivacyPolicyPage" }
    elseif ($file -match "cookies") { $title = "Cookie Policy"; $componentName = "CookiesPolicyPage" }
    elseif ($file -match "websitedesclamer") { $title = "Website Disclaimer"; $componentName = "WebsiteDisclaimerPage" }
    
    $escaped = $content -replace '`', '\`' -replace '\$', '\$'
    
    $newContent = @"
"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

const markdownContent = \`
$escaped
\`;

export default function $componentName() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy-dark">
        <Navigation />
      </div>
      
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">$title</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
"@
    
    Set-Content -Path $file -Value $newContent
    Write-Host "Fixed $file"
}
