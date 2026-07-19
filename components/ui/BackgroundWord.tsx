import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundWordProps {
  text: string;
  alignment?: "left" | "center" | "right";
  color?: string;
  opacity?: number;
  className?: string;
}

export const BackgroundWord = ({
  text,
  alignment = "center",
  color = "text-navy-dark",
  opacity = 5,
  className,
}: BackgroundWordProps) => {
  const alignmentClasses = {
    left: "left-0 translate-x-[-10%]",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0 translate-x-[10%]",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center">
      <div
        className={cn(
          "absolute font-bold uppercase whitespace-nowrap select-none",
          "text-[100px] sm:text-[150px] md:text-[200px] lg:text-[280px] xl:text-[350px]",
          "tracking-tighter leading-none",
          alignmentClasses[alignment],
          color,
          className
        )}
        style={{ opacity: opacity / 100 }}
      >
        {text}
      </div>
    </div>
  );
};
