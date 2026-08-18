"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  className?: string;
}

export const CTABanner = ({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonHref,
  className,
}: CTABannerProps) => {
  return (
    <section className={cn("py-12 md:py-24 px-6 md:px-12", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] overflow-hidden bg-navy-dark text-center py-20 px-8 md:py-32 md:px-16"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute inset-0 z-0 opacity-40 bg-[length:200%_200%]"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(26,54,128,0.8) 0%, rgba(4,13,41,1) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <Button 
              variant="secondary" 
              size="lg"
              onClick={onButtonClick}
              href={buttonHref}
            >
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
