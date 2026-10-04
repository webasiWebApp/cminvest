"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Tag } from "./Tag";

export interface PressReleaseItem {
  src: string;
  alt: string;
  title: string;
  date: string;
}

const articles: PressReleaseItem[] = [
  {
    src: "/article/PHOTO-2026-10-04-11-03-04.jpg",
    alt: "Press Release Article 1",
    title: "Global Investment Focus",
    date: "October 2026",
  },
  {
    src: "/article/掲載誌_page-0001.jpg",
    alt: "Press Release Japanese Publication Page 1",
    title: "International Market Feature (Part 1)",
    date: "2026",
  },
  {
    src: "/article/掲載誌_page-0002.jpg",
    alt: "Press Release Japanese Publication Page 2",
    title: "International Market Feature (Part 2)",
    date: "2026",
  },
];

export const PressRelease = () => {
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
      setSelectedIndex((selectedIndex + 1) % articles.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + articles.length) % articles.length);
    }
  };

  return (
    <section id="press-release" className="py-24 md:py-36 px-6 md:px-12 bg-white relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <Tag variant="outline" className="mb-6">
            In The Media
          </Tag>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-dark tracking-tight mb-6 max-w-3xl">
            Press Releases & Publications
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl leading-relaxed">
            Explore our recent features, announcements, and coverage in leading industry publications across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 min-h-[400px] md:min-h-[500px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 flex items-center justify-end z-10">
                <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-[#3B82F6] backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-2 block">{item.date}</span>
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next article"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[75vh] md:h-[85vh] rounded-xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={articles[selectedIndex].src}
                  alt={articles[selectedIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left px-4">
                <div>
                  <h4 className="text-white text-lg font-bold">
                    {articles[selectedIndex].title}
                  </h4>
                  <p className="text-neutral-400 text-sm mt-1">{articles[selectedIndex].date}</p>
                </div>
                <span className="text-xs font-mono text-neutral-400 mt-2 md:mt-0">
                  {selectedIndex + 1} / {articles.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
