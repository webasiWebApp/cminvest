"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TagVariant = "white" | "dark" | "outline";

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  icon?: React.ReactNode;
  className?: string;
}

export const Tag = ({
  children,
  variant = "white",
  icon,
  className,
}: TagProps) => {
  const variants = {
    white: "bg-white text-navy-dark shadow-sm",
    dark: "bg-navy-dark text-white",
    outline: "bg-transparent text-navy-dark border border-navy-dark/20",
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase cursor-default",
        variants[variant],
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.div>
  );
};
