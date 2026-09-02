"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Banknote, Rocket } from "lucide-react";

export default function FloatingButtons() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const buttons = [
    {
      id: "invest",
      label: "INVEST",
      tooltip: "Discover investment opportunities",
      icon: <TrendingUp size={15} />,
      href: "#invest",
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
      href: "#funding",
      bg: "linear-gradient(135deg, #b8943b 0%, #d4a94e 100%)",
      bgHover: "linear-gradient(135deg, #9e7e2e 0%, #b8943b 100%)",
      shadow: "0 8px 32px rgba(180,140,50,0.45)",
      shadowHover: "0 12px 36px rgba(180,140,50,0.65)",
      tooltipColor: "#9e7e2e",
    },
    {
      id: "million",
      label: "1M PROJECT",
      tooltip: "Apply to the CM Million Project — up to LKR 1M",
      icon: <Rocket size={15} />,
      href: "/million-project#apply",
      bg: "linear-gradient(135deg, #065f46 0%, #059669 100%)",
      bgHover: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
      shadow: "0 8px 32px rgba(5,150,105,0.40)",
      shadowHover: "0 12px 36px rgba(5,150,105,0.60)",
      tooltipColor: "#065f46",
    },
  ];

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
            <motion.a
              href={btn.href}
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ x: 6, scale: 1.04 }}
              transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 280, damping: 22 }}
              style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingLeft: "14px",
                paddingRight: "20px",
                paddingTop: "13px",
                paddingBottom: "13px",
                borderRadius: "0 50px 50px 0",
                background: isHovered ? btn.bgHover : btn.bg,
                boxShadow: isHovered ? btn.shadowHover : btn.shadow,
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
                userSelect: "none",
                whiteSpace: "nowrap",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
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

              {/* Left accent bar */}
              <motion.span
                animate={{ height: isHovered ? 22 : 18 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "3px",
                  borderRadius: "2px",
                  background: "rgba(255,255,255,0.55)",
                  flexShrink: 0,
                  display: "block",
                }}
              />

              {/* Icon */}
              <span style={{ display: "flex", alignItems: "center", opacity: 0.9 }}>
                {btn.icon}
              </span>

              {/* Label */}
              <span>{btn.label}</span>
            </motion.a>

            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  key="tooltip"
                  initial={{ opacity: 0, x: -10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -6, scale: 0.94 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
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
                    pointerEvents: "none",
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
