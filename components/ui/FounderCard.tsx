"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface FounderCardProps {
  name: string;
  position: string;
  biography: React.ReactNode;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  linkedInUrl?: string;
  className?: string;
}

export const FounderCard = ({
  name,
  position,
  biography,
  quote,
  imageSrc,
  imageAlt,
  linkedInUrl,
  className,
}: FounderCardProps) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden border border-neutral-100 shadow-xl">
        {/* Left: Image */}
        <div className="w-full lg:w-5/12 relative aspect-square lg:aspect-auto min-h-[400px] lg:min-h-[600px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-navy-dark mb-2">
              {name}
            </h3>
            <p className="text-navy-light font-semibold uppercase tracking-widest text-sm mb-8">
              {position}
            </p>

            <div className="w-12 h-1 bg-navy-light mb-8" />

            <div className="prose prose-lg text-neutral-600 mb-10">
              {biography}
            </div>

            <blockquote className="border-l-4 border-navy-light pl-6 italic text-xl md:text-2xl text-navy-dark font-medium leading-relaxed mb-10">
              &quot;{quote}&quot;
            </blockquote>

            {linkedInUrl && (
              <Button 
                variant="secondary" 
                icon={<Globe className="w-5 h-5 text-navy-dark" />}
                onClick={() => {
                  if (linkedInUrl.startsWith('mailto:')) {
                    window.location.href = linkedInUrl;
                  } else {
                    window.open(linkedInUrl, '_blank');
                  }
                }}
              >
                {linkedInUrl.startsWith('mailto:') ? "Get in Touch" : "Connect on LinkedIn"}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
