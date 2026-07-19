"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LargeParagraphProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

const Word = ({
  children,
  progress,
  range,
  isHighlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.25em] mt-[0.1em]">
      <motion.span
        style={{ opacity }}
        className={cn(
          "transition-colors duration-300",
          isHighlight ? "text-navy-light font-semibold" : "text-navy-dark"
        )}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const LargeParagraph = ({
  text,
  highlightWords = [],
  className,
}: LargeParagraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={cn(
        "max-w-[980px] mx-auto text-center font-medium tracking-wide leading-[1.4]",
        "text-2xl md:text-3xl lg:text-4xl",
        className
      )}
    >
      <div className="flex flex-wrap justify-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          
          const cleanWord = word.replace(/[.,!?]/g, "");
          const isHighlight = highlightWords.includes(cleanWord);

          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
              isHighlight={isHighlight}
            >
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};
