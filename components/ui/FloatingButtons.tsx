"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Banknote, Rocket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FloatingButtons() {
  const router = useRouter();
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const buttons = [
    {
      id: "invest",
      label: "INVEST",
      tooltip: "Discover investment opportunities",
      icon: <TrendingUp size={15} />,
      href: "/service?type=invest",
      bg: "linear-gradient(135deg, #081B52 0%, #1a3680 100%)",
      bgHover: "linear-gradient(135deg, #040d29 0%, #081B52 100%)",
      shadow: "0 8px 32px rgba(8,27,82,0.50)",
      shadowHover: "0 12px 36px rgba(8,27,82,0.65)",
      tooltipColor: "#081B52",
    },
    {
      id: "funding",
      label: "GET FUNDING",
      tooltip: "Submit your project to funding",
      icon: <Banknote size={15} />,
      href: "/service?type=funding",
      bg: "linear-gradient(135deg, #b8943b 0%, #d4a94e 100%)",
      bgHover: "linear-gradient(135deg, #9e7e2e 0%, #b8943b 100%)",
      shadow: "0 8px 32px rgba(180,140,50,0.45)",
      shadowHover: "0 12px 36px rgba(180,140,50,0.65)",
      tooltipColor: "#9e7e2e",
    },
    {
      id: "million",
      label: "1M CM E3™",
      tooltip: "Emerging Entrepreneurs & Enterprises ",
      icon: <Rocket size={15} />,
      href: "/million-project#apply",
      bg: "linear-gradient(135deg, #065f46 0%, #059669 100%)",
      bgHover: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
      shadow: "0 8px 32px rgba(5,150,105,0.40)",
      shadowHover: "0 12px 36px rgba(5,150,105,0.60)",
      tooltipColor: "#065f46",
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (typeof window === "undefined") return;

    try {
      const url = new URL(href, window.location.origin);
      const targetPath = url.pathname;
      const targetSearch = url.search;
      const targetHash = url.hash;
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;

      // 1. Same-page hash navigation (e.g. already on /million-project and clicking /million-project#apply)
      if (targetHash && currentPath === targetPath) {
        e.preventDefault();
        const elementId = targetHash.replace("#", "");
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
        return;
      }

      // 2. Tab switching or re-clicking on /service page
      if (currentPath === "/service" && targetPath === "/service") {
        e.preventDefault();
        if (currentSearch === targetSearch) {
          // Already on this tab -> smooth scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Switch tab and smooth scroll to top
          router.push(href);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
    } catch {
      // Fallback: let standard link navigation proceed
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {buttons.map((btn, index) => {
        const isHovered = hoveredBtn === btn.id;
        return (
          <div
            key={btn.id}
            style={{ position: "relative", display: "flex", alignItems: "center" }}
            onMouseEnter={() => setHoveredBtn(btn.id)}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            {/* Button */}
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ x: 6, scale: 1.04 }}
              transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 280, damping: 22 }}
              style={{ display: "flex" }}
            >
              <Link
                href={btn.href}
                aria-label={btn.label}
                title={btn.label}
                onClick={(e) => handleNavClick(e, btn.href)}
                className="relative overflow-hidden flex items-center justify-center gap-0 md:gap-2 px-3 py-3 md:pl-[14px] md:pr-[20px] md:py-[13px] rounded-r-full text-white no-underline text-[11.5px] font-bold tracking-[0.12em] cursor-pointer select-none whitespace-nowrap transition-[background,box-shadow] duration-300 ease-out"
                style={{
                  background: isHovered ? btn.bgHover : btn.bg,
                  boxShadow: isHovered ? btn.shadowHover : btn.shadow,
                  fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
                }}
              >
                {/* Shine sweep */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      key="shine"
                      initial={{ x: "-100%" }}
                      animate={{ x: "220%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Left accent bar (desktop only) */}
                <motion.span
                  className="hidden md:block"
                  animate={{ height: isHovered ? 22 : 18 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "3px",
                    borderRadius: "2px",
                    background: "rgba(255,255,255,0.55)",
                    flexShrink: 0,
                  }}
                />

                {/* Icon */}
                <span className="flex items-center justify-center opacity-90 shrink-0">
                  {btn.icon}
                </span>

                {/* Label (desktop only) */}
                <span className="hidden md:inline">{btn.label}</span>
              </Link>
            </motion.div>

            {/* Tooltip (desktop only) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  key="tooltip"
                  initial={{ opacity: 0, x: -10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -6, scale: 0.94 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="hidden md:block pointer-events-none"
                  style={{
                    position: "absolute",
                    left: "calc(100% + 14px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: btn.tooltipColor,
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 500,
                    fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
                    letterSpacing: "0.02em",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
                    zIndex: 10000,
                  }}
                >
                  {/* Arrow caret pointing left */}
                  <span
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 0,
                      height: 0,
                      borderTop: "6px solid transparent",
                      borderBottom: "6px solid transparent",
                      borderRight: `7px solid ${btn.tooltipColor}`,
                    }}
                  />
                  {btn.tooltip}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
