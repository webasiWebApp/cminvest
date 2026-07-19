"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string;
}

export const StatCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  label,
}: StatCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline text-navy-dark font-bold text-4xl md:text-5xl lg:text-6xl">
        {prefix && <span>{prefix}</span>}
        <span ref={ref}>0</span>
        {suffix && <span>{suffix}</span>}
      </div>
      {label && (
        <span className="text-neutral-500 font-medium text-sm md:text-base mt-2 tracking-wide uppercase">
          {label}
        </span>
      )}
    </div>
  );
};
