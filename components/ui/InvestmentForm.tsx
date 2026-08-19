"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

interface Country {
  name: {
    common: string;
  };
}

export function InvestmentForm() {
  const [countries, setCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentRange: "",
    industry: "",
    description: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data: Country[]) => {
        const countryNames = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default fallback action is mailto if not using an API
    const subject = `Investment Interest: ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Investment Range: ${formData.investmentRange}
Industry of Interest: ${formData.industry}

Description:
${formData.description}
    `.trim();

    window.location.href = `mailto:cm@pearlbay.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputStyles = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all";
  const labelStyles = "block text-sm font-medium text-navy-dark mb-2";

  return (
    <section id="investment-form" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Tag variant="dark" className="mb-6 mx-auto">Investment Interest</Tag>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-dark tracking-tight mb-4">
            Partner With Us
          </h2>
          <p className="text-neutral-600 text-lg">
            Submit your details below to explore strategic investment opportunities and partnerships.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelStyles}>Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputStyles}
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelStyles}>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputStyles}
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelStyles}>Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputStyles}
                placeholder="+1 234 567 8900"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className={labelStyles}>Country *</label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="" disabled>Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Investment Range */}
            <div>
              <label htmlFor="investmentRange" className={labelStyles}>Investment Range *</label>
              <select
                id="investmentRange"
                name="investmentRange"
                required
                value={formData.investmentRange}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="" disabled>Select range</option>
                <option value="LKR 1m to 10m">LKR 1m to 10m</option>
                <option value="LKR 10m to 100m">LKR 10m to 100m</option>
                <option value="LKR 100m to 1b">LKR 100m to 1b</option>
                <option value="LKR 1b +">LKR 1b +</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className={labelStyles}>Industry of Interest *</label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="" disabled>Select industry</option>
                <option value="Any">Any</option>
                <option value="Energy">Energy</option>
                <option value="Healthcare and Pharmaceuticals">Healthcare and Pharmaceuticals</option>
                <option value="Education">Education</option>
                <option value="Technology & Software">Technology & Software</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Metals & Mining">Metals & Mining</option>
                <option value="Professional Services / Consulting">Professional Services / Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label htmlFor="description" className={labelStyles}>Project / Investment Description *</label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className={inputStyles}
              placeholder="Please provide a brief description of your interest..."
            />
          </div>

          <div className="text-center">
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-12 py-4 rounded-full">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
