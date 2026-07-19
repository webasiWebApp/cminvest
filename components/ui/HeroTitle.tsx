"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HeroTitleProps {
  title: string;
  highlightWords?: string[];
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const HeroTitle = ({
  title,
  highlightWords = [],
  alignment = "left",
  className,
}: HeroTitleProps) => {
  // Simple heuristic: split by new lines or use a single line if no \n is provided.
  // We can also let the text wrap naturally and animate lines.
  
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Split title by words to colorize highlights
  const words = title.split(" ").map((word, idx) => {
    // Check if word (without punctuation) is in highlightWords
    const cleanWord = word.replace(/[.,!?]/g, "");
    const isHighlight = highlightWords.includes(cleanWord);

    return {
      text: word,
      isHighlight,
      id: idx,
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-bold tracking-tight text-navy-dark leading-[1.1]",
        // Typography scale
        "text-[40px] md:text-[58px] lg:text-[72px]",
        alignmentClasses[alignment],
        className
      )}
    >
      <div className="flex flex-wrap gap-[0.25em]" style={{ justifyContent: alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start' }}>
        {words.map((word) => (
          <motion.span
            key={word.id}
            variants={childVariants}
            className={cn(
              "inline-block",
              word.isHighlight ? "text-transparent bg-clip-text bg-gradient-to-r from-navy-light to-blue-500" : ""
            )}
          >
            {word.text}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};
