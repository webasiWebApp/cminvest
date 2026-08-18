"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "size" | "children" | "href"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  href?: string;
  target?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      loading = false,
      disabled,
      children,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-black text-white rounded-full hover:bg-neutral-900 shadow-sm hover:shadow-md",
      secondary:
        "bg-white text-navy-dark border border-neutral-200 rounded-full hover:bg-neutral-50 shadow-sm",
      text: "bg-transparent text-navy-dark rounded-none hover:text-black relative group",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-9 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    const textSizes = {
      sm: "text-sm py-1",
      md: "text-base py-2",
      lg: "text-lg py-2",
    };

    const isText = variant === "text";
    const appliedSize = isText ? textSizes[size] : sizes[size];

    const content = (
      <>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && icon && <span className="mr-2">{icon}</span>}
        
        <span className="relative">
          {children}
          {isText && (
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-navy-dark transition-all duration-300 group-hover:w-full" />
          )}
        </span>

        {isText && !loading && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );

    const commonProps = {
      className: cn(baseStyles, variants[variant], appliedSize, className),
      whileHover: !disabled && !isText ? { y: -2 } : {},
      transition: { duration: 0.3, ease: "easeOut" },
    };

    if (href) {
      return (
        <motion.a
          ref={ref as any}
          href={href}
          target={target}
          className={commonProps.className}
          whileHover={commonProps.whileHover}
          transition={commonProps.transition as any}
          // @ts-ignore - motion.a accepts these but omit types are complex
          {...props}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        className={commonProps.className}
        disabled={disabled || loading}
        whileHover={commonProps.whileHover}
        transition={commonProps.transition as any}
        // @ts-ignore
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
