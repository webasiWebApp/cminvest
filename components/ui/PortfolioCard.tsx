"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface PortfolioCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  summary: string;
  onReadMore?: () => void;
  className?: string;
}

export const PortfolioCard = ({
  imageSrc,
  imageAlt,
  category,
  title,
  summary,
  onReadMore,
  className,
}: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group flex flex-col bg-white rounded-[20px] overflow-hidden border border-neutral-100",
        "shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-shadow",
        className
      )}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-navy-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy-dark mb-3 leading-snug group-hover:text-navy-light transition-colors">
          {title}
        </h3>
        
        {onReadMore && (
          <div className="mt-auto pt-2">
            <Button variant="text" onClick={onReadMore} className="p-0 text-sm font-semibold">
              Read More
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
