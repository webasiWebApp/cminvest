"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExpertiseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const ExpertiseCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: ExpertiseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group flex flex-col h-full bg-navy-dark rounded-2xl md:rounded-[24px] overflow-hidden border border-white/5",
        "hover:shadow-2xl hover:shadow-black/50",
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] bg-navy overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
      </div>
      
      <div className="flex flex-col flex-grow p-8 -mt-12 relative z-10">
        <div className="bg-navy-light w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h3>
        
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
