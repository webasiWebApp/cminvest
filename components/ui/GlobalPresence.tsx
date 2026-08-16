"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "./Tag";

export interface CountryItem {
  code: string;
  name: string;
}

const countries: CountryItem[] = [
  { code: "lk", name: "Sri Lanka" },
  { code: "gb", name: "United Kingdom" },
  { code: "jp", name: "Japan" },
  { code: "au", name: "Australia" },
  { code: "iq", name: "Iraq" },
  { code: "id", name: "Indonesia" },
  { code: "mv", name: "Maldives" },
  { code: "be", name: "Belgium" },
  { code: "us", name: "United States" },
  { code: "ae", name: "UAE" },
  { code: "cn", name: "China" },
  { code: "kr", name: "South Korea" },
  { code: "sl", name: "Sierra Leone" },
  { code: "la", name: "Laos" },
  { code: "th", name: "Thailand" },
  { code: "hk", name: "Hong Kong" },
  { code: "ch", name: "Switzerland" },
  { code: "de", name: "Germany" },
  { code: "fi", name: "Finland" },
  { code: "es", name: "Spain" },
  { code: "kh", name: "Cambodia" },
  { code: "qa", name: "Qatar" },
  { code: "om", name: "Oman" },
  { code: "za", name: "South Africa" },
];

export const GlobalPresence = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <Tag variant="outline" className="mb-4 text-navy-dark border-navy-dark/20 bg-neutral-50">
            Global Network
          </Tag>
          <h2 className="text-2xl md:text-4xl font-bold text-navy-dark tracking-tight mb-4">
            International Footprint &amp; Strategic Jurisdictions
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl">
            Cultivating strong commercial ties, investor relationships, and cross-border project development across global economies.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {countries.map((country, idx) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center space-x-3 p-2.5 md:p-3 rounded-xl bg-neutral-50 hover:bg-soft-blue/40 border border-neutral-200/80 hover:border-blue-300 transition-all duration-200 shadow-sm"
            >
              {/* Flag Icon (30px x 30px container) */}
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 border border-black/10 shadow-inner flex items-center justify-center">
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Country Name */}
              <span className="text-xs md:text-sm font-semibold text-navy-dark truncate">
                {country.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
