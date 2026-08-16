"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Gallery", href: "#gallery" },
];

const NavLink = ({
  href,
  children,
  isActive,
  isScrolled,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isScrolled
          ? isActive
            ? "text-navy-dark font-bold"
            : "text-navy-dark/80 hover:text-navy-dark"
          : isActive
            ? "text-white font-bold"
            : "text-white/80 hover:text-white"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5",
            isScrolled ? "bg-navy-dark" : "bg-[#3B82F6]"
          )}
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Glass effect on scroll
    setIsScrolled(latest > 50);

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass py-4 shadow-md" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={cn("text-2xl font-bold tracking-tight transition-colors", isScrolled ? "text-navy-dark" : "text-white")}>
              CM INVESTMENTS
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  isActive={activeLink === link.name}
                  isScrolled={isScrolled}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            <Button variant="primary" size="sm" onClick={() => window.location.href = 'mailto:cm@pearlbay.com'}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn("p-2 focus:outline-none transition-colors", isScrolled ? "text-navy-dark" : "text-white")}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-dark/40 z-40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col px-6 py-8 md:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-bold text-navy-dark">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-neutral-500 hover:text-navy-dark transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "text-2xl font-medium transition-colors",
                      activeLink === link.name ? "text-navy-dark" : "text-neutral-400 hover:text-navy-light"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-neutral-100">
                <Button variant="primary" size="md" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href = 'mailto:cm@pearlbay.com'; }}>
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
