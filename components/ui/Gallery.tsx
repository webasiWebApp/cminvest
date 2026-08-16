"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  location: string;
  aspect?: "tall" | "wide" | "square";
}

const galleryItems: GalleryItem[] = [
  {
    src: "/Gallary/WhatsApp Image 2026-08-16 at 20.44.55.jpeg",
    alt: "International Diplomatic & High-Level Delegation",
    title: "International Diplomatic Delegation",
    category: "Diplomatic & Government",
    location: "Global Summit",
    aspect: "wide",
  },
  {
    src: "/Gallary/IMG_7876.jpeg",
    alt: "Strategic Partnership Meeting in Tokyo",
    title: "Strategic Enterprise Dialogue",
    category: "International Business",
    location: "Tokyo, Japan",
    aspect: "tall",
  },
  {
    src: "/Gallary/WhatsApp Image 2026-08-16 at 20.44.55 (1).jpeg",
    alt: "Executive Investor & Strategic Discussion",
    title: "Executive Strategic Discussion",
    category: "Capital & Advisory",
    location: "London, UK",
    aspect: "wide",
  },
  {
    src: "/Gallary/dc44166d-6146-4a3b-bff0-c9f63a63f2bb.JPG",
    alt: "Global Market Operations & Field Visit",
    title: "Commercial Hub Engagement",
    category: "Market Expansion",
    location: "Tokyo, Japan",
    aspect: "tall",
  },
  {
    src: "/Gallary/WhatsApp Image 2026-08-16 at 20.44.56 (1).jpeg",
    alt: "Industrial & Manufacturing Site Collaboration",
    title: "Industrial & Infrastructure Review",
    category: "Project Development",
    location: "International Facility",
    aspect: "wide",
  },
  {
    src: "/Gallary/WhatsApp Image 2026-08-16 at 20.44.56.jpeg",
    alt: "International Trade & Commercial Innovation Showcase",
    title: "Global Commercial Innovation",
    category: "Trade & Partnerships",
    location: "Trade Exhibition",
    aspect: "wide",
  },
  {
    src: "/Gallary/f5635cd5-3151-4317-be7d-f8f9d2be991b.JPG",
    alt: "Executive Partner Dinner and Cultural Exchange",
    title: "Partner Relations & Networking",
    category: "Strategic Alliances",
    location: "Tokyo, Japan",
    aspect: "wide",
  },
];

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-12 bg-navy-dark relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-navy-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <Tag variant="outline" className="mb-6 border-white/20 text-white bg-white/5">
            Global Engagements
          </Tag>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
            Moments, Delegations &amp; Global Footprint
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            High-level international dialogues, diplomatic delegations, commercial negotiations, and strategic partnerships driving cross-border success.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className={cn(
                "group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300",
                item.aspect === "tall" ? "md:row-span-2 min-h-[420px] md:min-h-[560px]" : "min-h-[300px] md:min-h-[360px]"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag & Zoom icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#3B82F6] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <span className="text-xs font-mono text-blue-400 font-medium tracking-wider block mb-1">
                  📍 {item.location}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
                <Image
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left px-4">
                <div>
                  <h4 className="text-white text-lg font-bold">
                    {galleryItems[selectedIndex].title}
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    {galleryItems[selectedIndex].category} • {galleryItems[selectedIndex].location}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-400 mt-2 md:mt-0">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
