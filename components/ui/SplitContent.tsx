"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface SplitContentProps {
  tagText?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

export const SplitContent = ({
  tagText,
  title,
  description,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt,
  reverse = false,
  className,
}: SplitContentProps) => {
  return (
    <section className={cn("py-20 md:py-32 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          className={cn(
            "flex flex-col gap-12 lg:gap-24 items-center",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start space-y-6"
          >
            {tagText && (
              <Tag variant="outline">{tagText}</Tag>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark tracking-tight leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
              {description}
            </p>
            
            {buttonText && (
              <div className="pt-4">
                <Button variant="primary" onClick={onButtonClick}>
                  {buttonText}
                </Button>
              </div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy-dark/10 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
