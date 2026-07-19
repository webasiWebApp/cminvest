"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FullWidthImageProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: boolean;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
}

export const FullWidthImage = ({
  src,
  alt,
  caption,
  overlay = true,
  className,
  aspectRatio = "video",
}: FullWidthImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect: moves image up slightly as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const aspectClasses = {
    video: "aspect-[16/9] md:aspect-[21/9]",
    square: "aspect-square",
    portrait: "aspect-[3/4] md:aspect-video",
    auto: "aspect-auto h-[50vh] md:h-[70vh]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("w-full flex flex-col items-center", className)}
    >
      <div 
        ref={containerRef}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl md:rounded-[32px] bg-neutral-100",
          aspectClasses[aspectRatio]
        )}
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, scale }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={false} // lazy load by default
          />
        </motion.div>

        {overlay && (
          <div className="absolute inset-0 bg-navy-dark/20 mix-blend-multiply" />
        )}
      </div>

      {caption && (
        <p className="mt-4 text-sm text-neutral-500 font-medium">
          {caption}
        </p>
      )}
    </motion.div>
  );
};
