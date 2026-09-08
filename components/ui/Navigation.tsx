"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Million Project", href: "/million-project" },
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
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Pre-set active link based on current route
  const [activeLink, setActiveLink] = useState(() =>
    pathname?.startsWith("/service") ? "Services" :
    pathname?.startsWith("/million-project") ? "Million Project" :
    pathname?.startsWith("/csr") ? "CSR" : "Home"
  );
  const { scrollY } = useScroll();

  // Keep active link in sync when pathname changes (e.g. navigating back)
  useEffect(() => {
    if (pathname?.startsWith("/service")) {
      setActiveLink("Services");
    } else if (pathname?.startsWith("/million-project")) {
      setActiveLink("Million Project");
    } else if (pathname?.startsWith("/csr")) {
      setActiveLink("CSR");
    }
  }, [pathname]);

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

  // Scrollspy functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = navLinks.find((link) => link.href === `#${id}`);
          if (currentLink) {
            setActiveLink(currentLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

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
            <Link href="/" className="flex flex-col group">
              <span className={cn("text-2xl font-bold tracking-tight transition-colors leading-tight", isScrolled ? "text-navy-dark" : "text-white")}>
                CM INVESTMENTS
              </span>
              <span
                className={cn(
                  "text-[10px] sm:text-xs font-[300] tracking-wide transition-colors whitespace-nowrap",
                  isScrolled ? "text-navy-dark/80" : "text-white/80"
                )}
              >
                Emerging Entrepreneurs & Enterprises
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
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
            
            <Button variant="primary" size="sm" href="mailto:cm@pearlbay.com">
               Say Hello
            </Button>

            {/* CSR Round Button */}
            <Link
              href="/csr"
              aria-label="Corporate social responsibility"
              className={cn(
                "w-11 h-11 min-w-[44px] min-h-[44px] rounded-full inline-flex items-center justify-center text-xs font-bold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                pathname === "/csr"
                  ? isScrolled
                    ? "bg-navy-dark text-white border border-navy-dark"
                    : "bg-white text-navy-dark border border-white"
                  : isScrolled
                    ? "border border-navy-dark/20 text-navy-dark hover:bg-navy-dark hover:text-white focus-visible:ring-navy-light"
                    : "border border-white/40 text-white hover:bg-white/15 hover:border-white focus-visible:ring-white"
              )}
            >
              CSR
            </Link>
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

                <Link
                  href="/csr"
                  onClick={() => {
                    setActiveLink("CSR");
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Corporate social responsibility"
                  className={cn(
                    "text-2xl font-medium transition-colors flex items-center justify-between",
                    pathname === "/csr" ? "text-navy-dark font-bold" : "text-neutral-400 hover:text-navy-light"
                  )}
                >
                  <span>CSR</span>
                  <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-navy-dark/20 text-navy-dark font-semibold">
                    Initiatives
                  </span>
                </Link>
              </div>

              <div className="mt-auto pt-8 border-t border-neutral-100">
                <Button variant="primary" size="md" className="w-full" href="mailto:cm@pearlbay.com" onClick={() => setIsMobileMenuOpen(false)}>
                   Say Hello
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
