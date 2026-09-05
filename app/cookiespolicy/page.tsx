"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

const markdownContent = `
# COOKIE POLICY

**CM INVESTMENTS (PVT) LTD.**
**Effective Date: [Insert Date]**

This Cookie Policy explains how **CM Investments (Pvt) Ltd.** (“CM Investments”, “CM”, “we”, “us” or “our”) uses cookies and similar technologies when you visit or use our website (“Website”).

By continuing to use the Website, you acknowledge that cookies and similar technologies may be used in accordance with this Cookie Policy, subject to any choices or controls available to you.

---

## 1. What Are Cookies?

Cookies are small text files that may be placed on your computer, mobile device or other internet-connected device when you visit a website.

Cookies allow a website to recognise your device and remember certain information about your visit.

Cookies may help websites:

* function properly;
* remember preferences;
* improve security;
* understand how visitors use the Website;
* improve website performance;
* analyse traffic; and
* improve the user experience.

---

## 2. How CM Investments Uses Cookies

CM Investments may use cookies and similar technologies for legitimate business and website purposes, including to:

* operate and maintain the Website;
* remember user preferences;
* improve website functionality;
* understand how visitors navigate the Website;
* measure website traffic and performance;
* identify technical problems;
* improve content and user experience;
* maintain website security; and
* support appropriate website analytics and communications.

We seek to use information collected through cookies responsibly and in accordance with applicable privacy and data-protection requirements.

---

## 3. Types of Cookies We May Use

### A. Strictly Necessary Cookies

These cookies are required for certain Website functions to operate properly.

They may support:

* security;
* session management;
* page functionality;
* forms;
* accessibility; and
* other essential Website features.

These cookies generally cannot be disabled through the Website's cookie preference system where they are necessary for the Website to function.

---

### B. Functional Cookies

Functional cookies allow the Website to remember choices and preferences made by users.

For example, they may help remember:

* language preferences;
* display preferences;
* certain form or session settings; or
* other user-selected Website options.

---

### C. Analytics and Performance Cookies

Where enabled, analytics cookies help us understand how visitors use the Website.

This may include information such as:

* pages visited;
* approximate usage patterns;
* time spent on pages;
* navigation behaviour;
* browser or device information; and
* technical performance information.

This information helps CM Investments improve the Website and identify areas requiring improvement.

Where possible, analytics information will be used in aggregated or otherwise appropriately managed form.

---

### D. Marketing or Advertising Cookies

CM Investments may use marketing or advertising technologies in the future to understand the effectiveness of communications or advertising campaigns.

Where such technologies are used, appropriate consent or user controls will be provided where required by applicable law.

CM Investments does not sell users' personal information merely because cookies are used on the Website.

---

## 4. Third-Party Cookies

Some features or services incorporated into the Website may be provided by third parties.

These third parties may use cookies or similar technologies in accordance with their own policies.

Examples may include services used for:

* website analytics;
* embedded media;
* maps;
* security;
* communications;
* forms;
* social-media features; or
* other Website functionality.

CM Investments does not control the cookie practices of independent third parties.

Users should review the relevant third party's privacy and cookie policies where appropriate.

---

## 5. Personal Information and Cookies

Cookies do not necessarily identify you personally.

However, certain cookie-related information may be capable of being associated with other information that could identify an individual.

Where cookie information constitutes personal information under applicable law, CM Investments will handle it in accordance with our **Privacy & Confidentiality Notice** and applicable legal requirements.

---

## 6. Your Cookie Choices

Depending on the Website configuration and applicable law, you may be able to:

* accept or reject certain categories of cookies;
* change cookie preferences;
* delete cookies;
* block cookies through your browser; or
* receive notifications before cookies are stored.

Please note that disabling certain cookies may affect the functionality or performance of parts of the Website.

---

## 7. Managing Cookies Through Your Browser

Most modern web browsers allow you to control cookies through their settings.

You can generally configure your browser to:

* block cookies;
* delete existing cookies;
* allow cookies only from certain websites;
* reject third-party cookies; or
* notify you when cookies are being used.

The exact procedure depends on the browser and device you use.

---

## 8. Cookie Consent

Where applicable law requires consent for particular categories of cookies, CM Investments will seek consent through an appropriate cookie-management mechanism.

You may withdraw or change your consent where the Website provides the relevant functionality.

Withdrawal of consent does not necessarily affect the lawfulness of processing carried out before consent was withdrawn.

---

## 9. Website Security

Cookies and similar technologies may be used as part of our Website security and fraud-prevention measures.

However, no website, electronic communication or internet-based system can be guaranteed to be completely secure.

Users should take reasonable precautions to protect their own devices and accounts.

---

## 10. Changes to This Cookie Policy

CM Investments may update this Cookie Policy from time to time to reflect:

* changes to the Website;
* changes in technology;
* changes to cookies or third-party services;
* changes to legal or regulatory requirements; or
* changes to our business practices.

The updated version will be published on this Website with a revised effective date.

---

## 11. Contact Us

If you have questions regarding this Cookie Policy or the way CM Investments uses cookies and similar technologies, please contact us:

**CM INVESTMENTS (PVT) LTD.**
**Email:** [Insert Email]
**Telephone:** [Insert Telephone]
**Registered Address:** [Insert Address]

---

## 12. Related Policies

This Cookie Policy should be read together with:

**Privacy & Confidentiality Notice**
**Website Disclaimer**
**Investor Disclaimer**
**Terms & Conditions**

Together, these documents establish the principal terms governing the use of the CM Investments Website and the handling of information submitted through it.

---

**CM INVESTMENTS (PVT) LTD.**

**Building Sustainable Investments. Connecting Global Capital with Transformational Opportunities.**
`;

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <div className="bg-navy-dark">
        <Navigation />
      </div>
      
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Cookie Policy</h1>
            <div className="w-20 h-1.5 bg-[#3b82f6]"></div>
          </div>
          
          <MarkdownRenderer content={markdownContent} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
