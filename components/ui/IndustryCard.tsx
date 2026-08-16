"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IndustryCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  className?: string;
  onExplore?: () => void;
}

export const IndustryCard = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  className,
  onExplore,
}: IndustryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col justify-between h-full min-h-[380px] rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-8 bg-navy-dark border border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300",
        className
      )}
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/85 to-navy-dark/60" />
      </div>

      {/* Top row: Number and Arrow Button */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs font-mono font-semibold tracking-widest text-[#3B82F6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          {number}
        </span>
        <div 
          onClick={onExplore}
          className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#3B82F6] backdrop-blur-sm flex items-center justify-center transition-colors duration-300 cursor-pointer text-white"
        >
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative z-10 mt-12 flex flex-col">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[11px] font-medium text-neutral-300/80 uppercase tracking-wider">
                • {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
