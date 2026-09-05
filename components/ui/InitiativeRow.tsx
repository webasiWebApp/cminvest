import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InitiativeRowProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  reversed?: boolean;
  externalLink?: {
    href: string;
    label: string;
  };
  subtleBg?: boolean;
  className?: string;
}

export const InitiativeRow = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  externalLink,
  subtleBg = false,
  className,
}: InitiativeRowProps) => {
  return (
    <section
      className={cn(
        "py-20 md:py-28 px-6 md:px-12 border-b border-neutral-200/70",
        subtleBg ? "bg-neutral-50/60" : "bg-white",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-20 items-center",
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          {/* Mark / Emblem container */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-[380px] h-[240px] sm:h-[280px] relative rounded-2xl border border-neutral-200/80 bg-white p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-contain"
                  priority={!reversed}
                />
              </div>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark tracking-tight leading-snug mb-6">
              {title}
            </h2>

            <div className="text-base sm:text-lg text-neutral-600 leading-relaxed space-y-4">
              {description}
            </div>

            {externalLink && (
              <div className="pt-6">
                <a
                  href={externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-dark/20 text-navy-dark font-medium text-sm hover:bg-navy-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-light transition-colors"
                >
                  <span>{externalLink.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
